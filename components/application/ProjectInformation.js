import styles from "./ProjectInformation.module.css";
import { useState } from "react";
import Input from "../Input";

const ProjectInformation = ({ form }) => {
  const [inputText, setInputText] = useState("");
  const characterCount = inputText.length;

  return (
    <div className={styles.projectInformationWrapper}>
      <h1>Project Information</h1>
      <div>
        <div className={styles.firstTitle}>
          <label>Title Your Project</label>
          <div className={styles.progressBarWrapper}>
            <p> {characterCount} Characters</p>
            <div className={styles.progressBar}>
              <span
                style={{
                  background: "#718096",
                  width: `${characterCount * 1}%`,
                  height: "100%",
                  display: "block",
                }}
              ></span>
            </div>
          </div>
        </div>
        <Input name="projectName" form={form} maxLength={30} />
        <p className={styles.inputDescription}>
          Name your Project so that it clearly communicates your objectives to
          others, during review and in the future.
        </p>
      </div>

      <div className={styles.secondSection}>
        <div>
          <Input
            label="Total Project Budget"
            name="projectBudget"
            type="number"
            form={form}
          />
          <p>Provide the total budget in $USD to complete your Project.</p>
        </div>
        <div>
          <Input
            label="Total Project Duration"
            name="projectDuration"
            type="number"
            form={form}
          />
          <p>
            Provide the total amount of hours required to complete your Project.
            Include all members if this is a team project.
          </p>
        </div>
      </div>
      <div className={styles.lastSection}>
        <Input label="Project Team Members" name="projectTeam" form={form} />

        <p>
          Provide the GitHub usernames of any Project Team Members. Comma
          separate all names.
        </p>
      </div>
    </div>
  );
};

export default ProjectInformation;
