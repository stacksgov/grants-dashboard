import styles from "./ProjectImpact.module.css";
import Input from "../Input";

const ProjectImpact = ({ form }) => {
  return (
    <div className={styles.projectImpactWrapper}>
      <div>
        <label for="projectImpact">Project Impact</label>
        <p className={styles.inputDescription}>
          How will the impact of your project be measured? What key metrics will
          the community be able to review to verify (not trust) that funding for
          this project has a high impact?
        </p>

        <Input name="projectImpact" form={form} />

        <div className={styles.progressBarWrapper}>
          <p>80 Characters</p>
          <div className={styles.progressBar}>
            <span
              style={{
                background: "#718096",
                width: "50%",
                height: "100%",
                display: "block",
              }}
            ></span>
          </div>
        </div>
      </div>

      <div className={styles.secondSection}>
        <label for="projectRisks">Project Risks</label>
        <p className={styles.inputDescription}>
          What are the risks involved with this project? Are there any technical
          (or other) factors that might limit your ability to complete the
          project? If so, what is your plan to overcome these factors?
        </p>

        <Input name="projectRisks" form={form} />

        <div className={styles.progressBarWrapper}>
          <p>80 Characters</p>
          <div className={styles.progressBar}>
            <span
              style={{
                background: "#718096",
                width: "50%",
                height: "100%",
                display: "block",
              }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectImpact;
