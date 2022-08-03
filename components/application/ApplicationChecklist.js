import styles from "./ApplicationChecklist.module.css";
import Input from "../Input";
import Form from "../Form";
import GithubIcon from "../../public/images/github.svg";
import { useEffect } from "react";

const ApplicationChecklist = () => {
  useEffect(() => {
    let formData = JSON.parse(localStorage.getItem("formData"));
    if (formData.agreedToChecklist) {
      let checklist = Array.from(document.getElementsByName("guidelines"));
      checklist.map((item) => {
        item.checked = true;
      });
    }
  });

  const Fields = () => {
    return (
      <div>
        <div className={styles.list}>
          <div className={styles.checkboxWrapper}>
            <input id="guideline1" name="guidelines" type="checkbox"></input>
            <label>
              I have read and understood the application guidelines and the
              terms and conditions.
            </label>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.checkboxWrapper}>
            <input id="guideline2" name="guidelines" type="checkbox"></input>
            <label>
              I have read the application review schedule and understand when to
              expect feedback on my application.
            </label>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.checkboxWrapper}>
            <input id="guideline3" name="guidelines" type="checkbox"></input>
            <label>
              I understand that if I have any questions regarding the
              application and/or project they should be asked either as a
              comment to my project application Github issue or in the Projects
              Github disucussion board.
            </label>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.checkboxWrapper}>
            <input id="guideline4" name="guidelines" type="checkbox"></input>
            <label>
              I understand any software, code, or community resources produced
              with support from the Stacks Foundation must be released under an
              open-source license.
            </label>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.checkboxWrapper}>
            <input id="guideline5" name="guidelines" type="checkbox"></input>
            <label>
              I understand all payments are contingent on satisfactory
              completion of each deliverable described by me in this
              application.
            </label>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.checkboxWrapper}>
            <input id="guideline6" name="guidelines" type="checkbox"></input>
            <label>
              I understand that in order for a deliverable to be reviewed I must
              add a comment to my project application Github issue and provide a
              link to the deliverable requiring review.
            </label>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Form
      title="Application Checklist"
      description="Please confirm you acknowledge the following before proceeding with the rest of your application."
      fields={Fields}
    />
  );
};

export default ApplicationChecklist;
