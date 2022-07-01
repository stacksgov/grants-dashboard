import styles from "./OkButton.module.css";
import { useState } from "react";
import { Octokit, App } from "octokit";
import IssueTemplate from "./IssueTemplate";

console.log("issue template", IssueTemplate);
const github = new Octokit({
  auth: "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",
});

const UseOkButton = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [issue, setIssue] = useState({
    name: null,
    budget: null,
    duration: null,

    wishlist: false,
    directApplication: false,

    // Project Type
    levelOne: false,
    levelTwo: false,
    levelThree: false,
    community: false,
    education: false,
    event: false,
    chapter: false,
    alex: false,
    resident: false,
    investment: false,

    // Project Track
    protocol: false,
    interface: false,
    dappsAndClarity: false,
    educationAndCommunity: false,
    developerExperience: false,
    userExperience: false,
    crossChainOffChain: false,
    btcUtility: false,

    // Project Tags
    createNewTechnology: false,
    integrateBetweenTechnologies: false,
    improveExistingTechnologies: false,
    strengthenCommunity: false,

    developers: false,
    existingEndUsers: false,
    minersAndValidators: false,
    potentialEndUsers: false,

    fullOpenSource: false,
    partiallyOpenSource: false,
    notOpenSource: false,

    stxAddress: null,
    stxMemo: null,
    team: [],

    // Deliverables
    final: null,
    milestoneOne: null,
    milestoneTwo: null,
    milestoneThree: null,
    milestoneFour: null,
    milestoneFive: null,
    milestoneSix: null,
    milestoneSeven: null,
    milestoneEight: null,
    milestoneNine: null,
    milestoneTen: null,
    milestoneEleven: null,
    milestoneTwelve: null,

    // Support Links
    firstLink: null,
    firstLinkDescription: null,
    secondLink: null,
    secondLinkDescription: null,

    mission: null,
  });

  function nextStep() {
    let elements = Array.from(document.querySelectorAll("*[id]")).filter(
      (element) => Object.keys(issue).includes(element.id)
    );

    console.log("elements: ", elements);

    let updatedIssue = {};

    let values = elements.map((element) => {
      console.log(`${element} checked?`, element.checked);

      updatedIssue[element.id] =
        element.type == "radio"
          ? element.checked
            ? { choice: element.value }
            : null
          : element.value;
    });

    console.log("updatedIssue: ", updatedIssue);

    for (let prop in issue) {
      if (Object.keys(updatedIssue).includes(prop)) {
        issue[prop] = updatedIssue[prop];
      }
    }

    setIssue(issue);

    console.log("issue", issue);

    setCurrentStep(currentStep + 1);
  }

  async function submitApplication() {
    let res = await github.rest.issues.create({
      owner: "vidiabtc",
      repo: "dashboard-github",
      title: issue.name,
      body: IssueTemplate(issue),
      assignees: ["diopitis", "vidiabtc"],
      labels: ["new"],
    });
  }

  return {
    currentStep,
    OkButton: (
      <div className={styles.button}>
        {currentStep <= 7 ? (
          <button onClick={nextStep}>
            <svg
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 0.999542L4.5 8.99954L1.5 5.99954"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Ok {currentStep}
          </button>
        ) : (
          <button
            onClick={() => {
              nextStep();
              submitApplication();
            }}
          >
            <svg
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 0.999542L4.5 8.99954L1.5 5.99954"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Submit Application
          </button>
        )}
      </div>
    ),
  };
};

export default UseOkButton;
