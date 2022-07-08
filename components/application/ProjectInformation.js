import styles from "./ProjectInformation.module.css";
import { useState } from "react";
const ProjectInformation = ({ props: { formData, handleChange } }) => {
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
        <input
          name="projectName"
          type="text"
          placeholder="Type Here..."
          maxLength={30}
          onChange={handleChange}
        />
        <p className={styles.inputDescription}>
          Name your Project so that it clearly communicates your objectives to
          others, during review and in the future.
        </p>
      </div>

      <div className={styles.secondSection}>
        <div>
          <label>Total Project Budget</label>
          <input
            onChange={handleChange}
            name="projectBudget"
            type="number"
            placeholder="Type Here..."
            onWheel={(e) => e.target.blur()}
          />
          <p>Provide the total budget in $USD to complete your Project.</p>
        </div>
        <div>
          <label>Total Project Duration</label>
          <input
            onChange={handleChange}
            name="projectDuration"
            type="number"
            placeholder="Type Here..."
            onWheel={(e) => e.target.blur()}
          />
          <p>
            Provide the total amount of hours required to complete your Project.
            Include all members if this is a team project.
          </p>
        </div>
      </div>
      <div className={styles.lastSection}>
        <label>Project Team Members</label>
        <input
          onChange={handleChange}
          name="projectTeam"
          type="text"
          placeholder="Type Here..."
        />
        <p>
          Provide the GitHub usernames of any Project Team Members. Comma
          separate all names.
        </p>
      </div>
    </div>
  );
};

export default ProjectInformation;
