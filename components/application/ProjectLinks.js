import styles from "./ProjectLinks.module.css";
import { useState } from "react";
import Input from "../Input";

const ProjectLinks = ({ form }) => {
  const [inputText, setInputText] = useState("");
  const [inputSecondText, setSecondInputText] = useState("");
  const characterCount = inputText.length;
  const secondCharacterCount = inputSecondText.length;
  // const handleChange = (event) => {
  // 	setInputText(event.target.value);
  // };
  const secondHandleChange = (event) => {
    setSecondInputText(event.target.value);
  };
  return (
    <div className={styles.projectLinkWrapper}>
      <h1>Project Links</h1>
      <div className={styles.subtitle}>
        <p>Do you have any reference materials to provide?</p>
        <p>
          You are allowed to provide one reference link to support your
          application. Pitch decks and code repositories are encouraged. If you
          provide a pitch deck, it is helpful if you include testimonial
          (tweets, etc) from the community indicating that your project will
          fill a need in the community. Short videos and/or voice memos of you
          pitching your project are also encouraged. Links must be accessible to
          all.
        </p>
      </div>
      <div>
        <div className={styles.inputSectionWrapper}>
          <div className={styles.inputSection}>
            <Input
              type="area"
              label="Reference Link URL"
              name="firstLink"
              form={form}
            />
          </div>
          <div className={styles.inputSection}>
            <Input
              type="area"
              label="Reference Link Description"
              name="referenceLinkDescription"
              form={form}
            />
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
    </div>
  );
};

export default ProjectLinks;
