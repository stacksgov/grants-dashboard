import styles from "./ProjectTags.module.css";
import Form from "../Form";
import Input from "../Input";

const ProjectTags = () => {
  const Fields = () => {
    return (
      <div>
        <div style={{ paddingBottom: "40px" }}>
          <p className={styles.title}>Project Goals</p>
          <div className={styles.list}>
            <div className={styles.radio}>
              <input
                type="radio"
                name="projectGoal"
                value="Create New Technology"
              />
              <label>Create New Technology</label>
            </div>
            <div className={styles.radio}>
              <input
                type="radio"
                name="projectGoal"
                value="Improve Existing Technologies"
              />
              <label>Improve Existing Technologies</label>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.radio}>
              <input
                type="radio"
                name="projectGoal"
                value="Integrate Between Technologies"
              />
              <label>Integrate Between Technologies</label>
            </div>
            <div className={styles.radio}>
              <input
                type="radio"
                name="projectGoal"
                value="Strengthen Community"
              />
              <label>Strengthen Community</label>
            </div>
          </div>
        </div>
        <div style={{ paddingBottom: "40px" }}>
          <p className={styles.title}>Project Audience</p>
          <div className={styles.list}>
            <div className={styles.radio}>
              <input type="radio" name="projectAudience" value="Developers" />
              <label>Developers</label>
            </div>
            <div className={styles.radio}>
              <input
                type="radio"
                name="projectAudience"
                value="End Users (Consumer)"
              />
              <label>End Users (Consumer)</label>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.radio}>
              <input
                type="radio"
                name="projectAudience"
                value="Miners & Validators"
              />
              <label>Miners & Validators</label>
            </div>
            <div className={styles.radio}>
              <input
                type="radio"
                name="projectAudience"
                value="End Users (Institutional)"
              />
              <label>End Users (Institutional)</label>
            </div>
          </div>
        </div>
        <Input
          name="specificAudience"
          label="Specific Audience"
          maxChar={80}
          description="Please tell us who your target audience is for this project."
        />
        <div style={{ paddingBottom: "40px" }}>
          <p className={styles.title}>Project Openness</p>
          <div className={styles.list}>
            <div
              style={{ minWidth: "0px", marginRight: "50px" }}
              className={styles.radio}
            >
              <input
                type="radio"
                name="projectOpenness"
                value="Fully Open Source"
              />
              <label>Fully Open Source</label>
            </div>
            <div
              style={{ minWidth: "0px", marginRight: "50px" }}
              className={styles.radio}
            >
              <input
                type="radio"
                name="projectOpenness"
                value="Partially Open Source"
              />
              <label>Partially Open Source</label>
            </div>
            <div style={{ minWidth: "0px" }} className={styles.radio}>
              <input
                type="radio"
                name="projectOpenness"
                value="Not Open Source"
              />
              <label>Not Open Source</label>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Form
      title="Project Tags"
      description="Select the Project Tags that best align with your project."
      fields={Fields}
    />
  );
};

export default ProjectTags;
