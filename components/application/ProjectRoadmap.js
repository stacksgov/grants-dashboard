import styles from "./ProjectRoadmap.module.css";
import Checkmark from "../../public/images/checkmark.svg";
import ArrowLeft from "../../public/images/arrowLeft.svg";
import ArrowRight from "../../public/images/arrowRight.svg";

import Input from "../Input";
import Form, { getFormData } from "../Form";
import { useState, useEffect } from "react";

function validateMilestone(number) {
  let deliverable = Array.from(
    document.getElementsByName(`milestone${number}Deliverable`)
  )[0];
  let acceptanceCriteria = Array.from(
    document.getElementsByName(`milestone${number}AC`)
  )[0];

  let isDeliverableValid = isFieldValid(deliverable);
  let isAcceptanceCriteriaValid = isFieldValid(acceptanceCriteria);

  if (isDeliverableValid && isAcceptanceCriteriaValid) {
    return true;
  } else {
    return false;
  }
}

function isFieldValid(field) {
  if (field.value == undefined || field.value == "") {
    field.style.outlineColor = "red";
    field.style.borderColor = "red";
    return false;
  } else {
    field.style.outlineColor = "#3182ce";
    field.style.borderColor = "#3182ce";
    return true;
  }
}

const ProjectRoadmap = () => {
  const [numOfMilestones, setNumOfMilestones] = useState();
  const [currentMilestone, setCurrentMilestone] = useState(1);

  useEffect(() => {
    let { projectBudget } = getFormData();
    setNumOfMilestones(getNumberOfMilestones(projectBudget));
  });

  const Milestones = () => {
    let milestones = [];
    const Milestone = (number) => {
      return (
        <div key={`milestone${number}`} className={styles.section}>
          <div className={styles.arrows}>
            <button
              onClick={() => {
                if (currentMilestone > 1)
                  setCurrentMilestone(currentMilestone - 1);
              }}
            >
              <ArrowLeft />
            </button>
            <button
              onClick={() => {
                if (
                  currentMilestone < numOfMilestones &&
                  validateMilestone(number)
                )
                  setCurrentMilestone(currentMilestone + 1);
              }}
            >
              <ArrowRight />
            </button>
          </div>
          <div>
            <p>Milestone Deliverables</p>
            <div className={styles.input}>
              <div>
                <div>
                  <Input
                    name={`milestone${number}Deliverable`}
                    label={`Deliverable (Milestone ${currentMilestone} of ${numOfMilestones})`}
                    labelSize="12px"
                    labelColor="rgba(255, 255, 255, 0.48)"
                    maxChar={80}
                    inputWidth="625px"
                  />
                  <button>
                    <Checkmark />
                    <p>Ok</p>
                  </button>
                </div>
              </div>
              <div>
                <Input
                  name={`milestone${number}AC`}
                  label={`Acceptance Criteria (Milestone ${currentMilestone} of ${numOfMilestones})`}
                  labelSize="12px"
                  labelColor="rgba(255, 255, 255, 0.48)"
                  maxChar={80}
                  inputWidth="625px"
                />
                <button>
                  <Checkmark />
                  <p>Ok</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };
    for (let i = 1; i <= numOfMilestones; i++) {
      milestones.push(Milestone(i));
    }
    return milestones;
  };

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

  const Fields = () => {
    return (
      <div>
        <div className={styles.section}>
          <p>Final Deliverable</p>
          <div className={styles.input}>
            <div>
              <Input
                name="finalDeliverable"
                label="Final Deliverable"
                labelSize="12px"
                labelColor="rgba(255, 255, 255, 0.48)"
                maxChar={80}
                inputWidth="625px"
              />
              <button>
                <Checkmark />
                <p>Ok</p>
              </button>
            </div>

            <div>
              <Input
                name="finalDeliverableAC"
                label="Acceptance Criteria"
                labelSize="12px"
                labelColor="rgba(255, 255, 255, 0.48)"
                maxChar={80}
                inputWidth="625px"
              />
              <button>
                <Checkmark />
                <p>Ok</p>
              </button>
            </div>
          </div>
        </div>
        {Milestones()[currentMilestone - 1]}
      </div>
    );
  };
  return (
    <Form
      title="Project Roadmap"
      description="Provide clear, concise, easy to review deliverables and acceptance criteria for progress payments."
      fields={Fields}
    />
  );
};

export default ProjectRoadmap;
