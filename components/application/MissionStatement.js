import styles from "./MissionStatement.module.css";
import { useState } from "react";
import Input from "../Input";

const MissionStatement = ({ form }) => {
  const [inputText, setInputText] = useState("");
  const characterCount = inputText.length;
  //   const handleChange = (event) => {
  //     setInputText(event.target.value);
  //   };
  return (
    <div className={styles.missionStatementWrapper}>
      <h1>Project Mission Statement</h1>
      <p className={styles.subtitle}>
        What is the mission of your project and why should the Stacks Community
        support it? Emphasize the what parts of your project are new & novel and
        how the Stacks community will benefit from the work.
      </p>
      <div className={styles.sectionWrapper}>
        <div>
          <Input type="area" name="mission" form={form} />
          <div className={styles.progressBarWrapper}>
            <p>{characterCount} Characters</p>
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
      </div>
    </div>
  );
};

export default MissionStatement;
