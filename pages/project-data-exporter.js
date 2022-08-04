import styles from "./ProjectData.module.css";
import Link from "next/link";
import CloseIcon from "../public/images/close.svg";
import StacksLogo from "../public/images/stacks-logo.svg";
import { useState, useEffect } from "react";
import CalendarDropdown from "../components/CalendarDropdown";
import { CSVLink, CSVDownload } from "react-csv";
import { Octokit } from "@octokit/rest";
import { useSession, signIn } from "next-auth/react";
import LoadingSpinner from "../public/images/loading-spinner.svg";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

const ProjectDataExporter = () => {
  const [CSVData, setCSVData] = useState([
    ["projectName", "projectBudget", "projectDuration"],
  ]);

  const { data: session } = useSession();

  console.log(session ? session.user.name : null);

  const [endDate, setEndDate] = useState(new Date());
  const [projectType, setProjectType] = useState("");
  const [projectPhase, setProjectPhase] = useState("");
  let pastSevenDays = new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000);
  const [startDate, setStartDate] = useState(pastSevenDays);
  const [projectTracks, setProjectTracks] = useState("");
  const [projectsFound, setProjectsFound] = useState(0);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [exportButton, setExportButton] = useState(false);

  useEffect(() => {
    setExportButton(false);
    setProjectsFound(0);
  }, [
    endDate,
    projectType,
    projectPhase,
    startDate,
    projectTracks,
    startDate,
    projectTracks,
  ]);

  let issues = [];
  const applicationTypeArr = [
    "Direct Application",
    "Wishlist Submission",
    "Wishlist Request",
  ];
  const projectTypeArr = [
    "Open Source Starter",
    "Open Source Builder",
    "Community Builder",
    "Education",
    "Events",
    "Chapter (by Region)",
    "ALEX (DeFi)",
    "Resident Program",
    "Direct Investment",
  ];
  const projectTrackArr = [
    "Stacks Protocol",
    "Stacks Interface",
    "Stacks dApps & Clarity",
    "Stacks Education & Community",
    "Stacks Developer Experience",
    "Stacks User Experience",
    "Cross-Chain & Off-Chain",
    "Bitcin Utility via Stacks",
  ];
  const projectStatusArr = [
    "Initial Review in Progress",
    "Review in Progress",
    "Revisions in Progress",
    "Onboarding in Progress",
    "Milestone in Progress",
    "Final Deliverable in Progress",
    "Project Complete",
    "Project Now Stale",
    "Project Closed",
  ];
  const projectPhaseArr = [
    "Application Phase",
    "Onboarding Phase",
    "Milestone 1",
    "Milestone 2",
    "Milestone 3",
    "Milestone 4",
    "Milestone 5",
    "Milestone 6",
    "Milestone 7",
    "Milestone 8",
    "Milestone 9",
    "Milestone 10",
    "Final Deliverable",
  ];

  const predictedImpactScoreArr = ["6", "5", "4", "3", "2", "1"];

  async function getIssues() {
    setCSVData([["projectName", "projectBudget", "projectDuration"]]);
    issues = [];
    const github = new Octokit({
      auth: session.accessToken,
    });
    setLoadingSpinner(true);

    let req = await github.rest.issues.listForRepo({
      owner: "stacksgov",
      repo: "grants-dashboard",
      state: "all",
      labels: `${projectTracks},${projectPhase},${projectType}`,
      since: `${startDate}`,
    });

    let res = req.data;

    res.map((issue) => {
      let teamMembers = issue.assignees.map((assignee) => assignee.login);

      issues.push({
        dateSubmitted: issue.created_at,
        number: issue.number,
        projectLead: issue.user.login,
        projectName: issue.title,
        teamMembers: teamMembers,
        url: issue.html_url,
        labels: issue.labels,
        body: issue.body,
      });
    });

    const relevantIssues = issues.filter(
      (issue) => Date.parse(issue.dateSubmitted) <= Date.parse(endDate)
    );

    relevantIssues.map((issue) => {
      issue.labels.map((label) => {
        if (applicationTypeArr.includes(label.name)) {
          issue.applicationType = label.name;
        }

        if (projectTypeArr.includes(label.name)) {
          issue.projectType = label.name;
        }

        if (projectTrackArr.includes(label.name)) {
          issue.projectTrack = label.name;
        }
        if (projectStatusArr.includes(label.name)) {
          issue.projectStatus = label.name;
        }
        if (projectPhaseArr.includes(label.name)) {
          issue.projectPhase = label.name;
        }
        if (predictedImpactScoreArr.includes(label.name)) {
          issue.predictedImpactScore = label.name;
        }
      });
    });

    relevantIssues.map((issue) => {
      if (issue.body) {
        console.log("issue", issue.body);
        const regex = /(?<=&thinsp;)([\s\S]*?)(?=\*\*)/g;
        const lines = issue.body
          .match(regex)
          .map((line) => line.replace("\n", "").replace("\n", "").trim());

        issue.projectName = lines[0];
        issue.projectBudget = lines[1];
        issue.projectDuration = lines[2];
        // issue.fundingStream = lines[3];
        // issue.projectType = lines[4];
        // issue.projectTrack = lines[5];
        // issue.projectGoal = lines[6];
        // issue.projectAudience = lines[7];
        // issue.specificAudience = lines[8];
        // issue.projectOpenness = lines[9];
        // issue.projectTeamMembers = lines[10];
        // issue.previousGrants = lines[11];
        // issue.ecosystemPrograms = lines[12];
        // issue.projectMission = lines[13];
        let newCSVData = CSVData;
        newCSVData.push([
          issue.projectName,
          issue.projectBudget,
          issue.projectDuration,
        ]);
        setCSVData(newCSVData);
      }
    });

    await Promise.all(
      relevantIssues.map(async (issue) => {
        let req = await github.rest.issues.listComments({
          owner: "stacksgov",
          repo: "grants-dashboard",
          issue_number: `${issue.number}`,
        });
        let res = req.data;
        issue.commentName = res.map((commenter) => commenter.user.login);
      })
    );

    console.log("relevant issues", relevantIssues);

    await Promise.all(
      relevantIssues.map(async (issue) => {
        let req = await github.rest.reactions.listForIssue({
          owner: "stacksgov",
          repo: "grants-dashboard",
          issue_number: `${issue.number}`,
        });

        let res = req.data;
        issue.reactionUsername = res.map((reactor) => reactor.user.login);
      })
    );

    if (relevantIssues.length === 0) {
      setProjectsFound("Nothing Matched this Criteria");
    } else {
      setProjectsFound(relevantIssues.length);
    }

    if (res) {
      setLoadingSpinner(false);
      setExportButton(true);
    }
  }

  // getProject();

  return (
    <div>
      <Link href="/">
        <a>
          <div className={styles.close}>
            <p>
              <CloseIcon />
              Close
            </p>
            <span></span>
          </div>
        </a>
      </Link>
      <div className={styles.projectDataWrapper}>
        <h1>Project Data Exporter</h1>
        <p className={styles.descriptor}>
          A simple widget for exporting project data from Github as a .CSV file.
        </p>
        <div className={styles.projectExportWrapper}>
          <div className={styles.dropdownWrapper}>
            <label htmlFor="selectProjectType">A. Select Project Type(s)</label>
            <select
              name="selectProjectType"
              onChange={(e) => setProjectType(e.target.value)}
            >
              <option value="" disabled selected>
                Drop down...
              </option>
              <option value="Open Source Starter">Open Source Starter</option>
              <option value="Open Source Builder">Open Source Builder</option>
              <option value="Community Builder">Community Builder</option>
              <option value="Education">Education</option>
              <option value="Events">Events</option>
              <option value="Chapter (by Region)">Chapter (by Region)</option>
              <option value="Alex (DeFi)">Alex (DeFi)</option>
              <option value="Resident Program">Resident Program</option>
              <option value="Direct Investment">Direct Investment</option>
            </select>
          </div>
          <div className={styles.calendarDropdownWrapper}>
            <label htmlFor="amountReceived">D. Select Start Date</label>
            <CalendarDropdown onChange={setStartDate} value={startDate} />
          </div>

          <div className={styles.dropdownWrapper}>
            <label htmlFor="selectProjectTrack">
              B. Select Project Track(s)
            </label>
            <select
              name="selectProjectTrack"
              onChange={(e) => setProjectTracks(e.target.value)}
            >
              <option value="" disabled selected>
                Drop down...
              </option>
              <option value="Stacks Protocol">Stacks Protocol</option>
              <option value="Stacks Interface">Stacks Interface</option>
              <option value="Stacks dApps & Clarity">
                Stacks dApps & Clarity
              </option>
              <option value="Stacks Education & Community">
                Stacks Education & Community
              </option>
              <option value="Stacks Developer Experience">
                Stacks Developer Experience
              </option>
              <option value="Stacks User Experience">
                Stacks User Experience
              </option>
              <option value="Cross-Chain & Off-Chain">
                Cross-Chain & Off-Chain
              </option>
              <option value="Bitcoin Utility via Stacks">
                Bitcoin Utility via Stacks
              </option>
            </select>
          </div>
          <div className={styles.calendarDropdownWrapper}>
            <label htmlFor="selectDate">E. Select End Date</label>
            <CalendarDropdown onChange={setEndDate} value={endDate} />
          </div>
          <div className={styles.dropdownWrapper}>
            <label htmlFor="selectProjectPhase">C. Select Project Phase</label>
            <select
              name="selectProjectPhase"
              onChange={(e) => setProjectPhase(e.target.value)}
            >
              <option value="" disabled selected>
                Drop down...
              </option>
              <option value="Application Phase">Application Phase</option>
              <option value="Onboarding Phase">Onboarding Phase</option>
              <option value="Milestone 1">Milestone 1</option>
              <option value="Milestone 2">Milestone 2</option>
              <option value="Milestone 3">Milestone 3</option>
              <option value="Milestone 4">Milestone 4</option>
              <option value="Milestone 5">Milestone 5</option>
              <option value="Milestone 6">Milestone 6</option>
              <option value="Milestone 7">Milestone 7</option>
              <option value="Milestone 8">Milestone 8</option>
              <option value="Milestone 9">Milestone 9</option>
              <option value="Milestone 10">Milestone 10</option>
              <option value="Final Deliverable">Final Deliverable</option>
            </select>
          </div>
          <div className={styles.buttonWrappers}>
            {!exportButton ? (
              <button className={styles.converterButton} onClick={getIssues}>
                {!loadingSpinner ? "Click to Export" : <LoadingSpinner />}
              </button>
            ) : (
              <CSVLink
                data={CSVData}
                filename={"projects-dashboard-export.csv"}
              >
                <button className={styles.converterButton}>Download CSV</button>
              </CSVLink>
            )}
          </div>
          <div className={styles.dropdownWrapper}>
            <div>
              <p>Date Range</p>
              <p className={styles.dates}>
                {startDate
                  .toLocaleString("default", {
                    month: "long",
                    day: "2-digit",
                    year: "2-digit",
                  })
                  .replace(" ", "-")
                  .replace(",", "-")
                  .replace(" ", "")}{" "}
                to{" "}
                {endDate
                  .toLocaleString("default", {
                    month: "long",
                    day: "2-digit",
                    year: "2-digit",
                  })
                  .replace(" ", "-")
                  .replace(",", "-")
                  .replace(" ", "")}
              </p>
            </div>
          </div>
          <div className={styles.dropdownWrapper}>
            <div className={styles.projectsFound}>
              <p>Projects Found</p>
              <p>{projectsFound}</p>
            </div>
          </div>
        </div>
      </div>

      <StacksLogo className={styles.stacksSVG} />
    </div>
  );
};

export default ProjectDataExporter;

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  session.user.email = "";
  return {
    props: {
      session,
    },
  };
}
