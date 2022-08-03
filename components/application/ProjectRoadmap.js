import styles from "./ProjectRoadmap.module.css";
import ArrowLeft from "../../public/images/arrowLeft.svg";
import ArrowRight from "../../public/images/arrowRight.svg";

import Input from "../Input";
import Form, { getFormData } from "../Form";
import { useState, useEffect } from "react";

function validateMilestone(number) {
  let deliverable = Array.from(
    document.getElementsByName(`milestone${number}Deliverable`)
  )[0];

  let isDeliverableValid = isFieldValid(deliverable);

  if (isDeliverableValid) {
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
    let formData = JSON.parse(localStorage.getItem("formData"));
    let { projectBudget } = formData;

    let numMilestones = getNumberOfMilestones(projectBudget);
    formData.currentMilestone = currentMilestone;
    localStorage.setItem("formData", JSON.stringify(formData));

    setNumOfMilestones(numMilestones);
  }, [currentMilestone]);

  const Milestones = () => {
    let milestones = [];
    let nav = [];

    for (let i = 1; i <= numOfMilestones; i++) {
      nav.push(i);
    }
    const Milestone = (number) => {
      return (
        <div key={`milestone${number}`} className={styles.section}>
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
                    maxchar={80}
                  />
                  <div className={styles.arrows}>
                    <button
                      onClick={() => {
                        if (currentMilestone > 1)
                          setCurrentMilestone(currentMilestone - 1);
                      }}
                    >
                      <ArrowLeft />
                    </button>
                    <div className={styles.nav}>
                      <ul>
                        {nav.map((i) => {
                          let style = {};

                          if (i == currentMilestone) {
                            style = { color: "#9F7AEA" };
                          }
                          if (i > currentMilestone) {
                            style = {
                              color: "rgba(255, 255, 255, 0.24)",
                            };
                          }

                          return (
                            <li
                              style={style}
                              // onClick={() => setCurrentMilestone(i)}
                              key={i}
                            >
                              {i}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
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
                </div>
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
                maxchar={80}
              />
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
      description="Provide clear, concise, easy to review deliverables for progress payments."
      fields={Fields}
    />
  );
};

export default ProjectRoadmap;
