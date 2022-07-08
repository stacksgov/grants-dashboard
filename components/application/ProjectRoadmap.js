import styles from "./ProjectRoadmap.module.css";
import Link from "next/link";
import { useState } from "react";
import CheckmarkIcon from "../../public/images/checkmark.svg";
import ArrowIcon from "../../public/images/arrow.svg";

const ProjectRoadmap = ({ props: { formData, handleChange } }) => {
  const [milestone, setMilestone] = useState(1);
  const [inputText, setInputText] = useState("");

  function getNumberOfMilestones(budget) {
    if (budget < 10e3) {
      return 0;
    } else if (budget < 25e3) {
      return 1;
    } else if (budget < 60e3) {
      return 2;
    } else if (budget < 100e3) {
      return 3;
    } else if (budget < 150e3) {
      return 4;
    } else if (budget < 250e3) {
      return 6;
    } else {
      return 8;
    }
  }

  const numOfMilestones = getNumberOfMilestones(
    parseInt(formData.projectBudget)
  );
  console.log("number of milestones: ", numOfMilestones);

  const characterCount = inputText.length;

  const MilestonesNav = [];

  const Milestone = (number, name) => {
    console.log("props", number);
    return (
      <>
        <div className={styles.firstSection}>
          <label>Milestone {number}</label>

          <div className={styles.inputWrapper}>
            <input
              key={name}
              name={name}
              onChange={handleChange}
              placeholder="Type here..."
            />
            <button>
              <CheckmarkIcon />
              Ok
            </button>
          </div>
          <div className={styles.progressBarWrapper}>
            <p>80 Characters</p>
            <div className={styles.progressBar}>
              <span
                style={{
                  background: "#718096",
                  width: "30%",
                  height: "100%",
                  display: "block",
                }}
              ></span>
            </div>
          </div>
        </div>
        <div className={styles.milestoneStepsWrapper}>
          <div className={styles.milestoneSteps}>
            <button onClick={() => setMilestone(milestone - 1)}>
              <ArrowIcon className={styles.arrowBackward} />
              Back
            </button>
            <div>{MilestonesNav}</div>
          </div>
          <div>
            <button onClick={() => setMilestone(milestone + 1)}>
              Next <ArrowIcon className={styles.arrowForward} />
            </button>
          </div>
        </div>
      </>
    );
  };

  const Milestones = () => {
    let milestones = [];

    for (let i = 1; i <= numOfMilestones; i++) {
      MilestonesNav.push(<p>{i}</p>);
      milestones.push(Milestone(i, `milestone${i}`));
    }
    return milestones;
  };

  return (
    <div className={styles.projectRoadmapWrapper}>
      <h1>Project Roadmap</h1>
      <p className={styles.subtitle}>
        Select the Project Type below. If you have questions about Project
        Types, click{" "}
        <Link href="/">
          <a>here</a>
        </Link>
        .
      </p>
      <h2>Milestone Deliverable</h2>
      {Milestones()[milestone - 1]}
      <div className={styles.secondSection}>
        <div>
          <label>Final Deliverable</label>
          <div className={styles.progressBarWrapper}>
            <p>{characterCount} Characters</p>
            <div className={styles.progressBar}>
              <span
                style={{
                  background: "#718096",
                  width: "30%",
                  height: "100%",
                  display: "block",
                }}
              ></span>
            </div>
          </div>
        </div>
        <input
          id="final"
          placeholder="Type here..."
          onChange={handleChange}
          maxLength={30}
        />
      </div>
    </div>
  );
};

export default ProjectRoadmap;
