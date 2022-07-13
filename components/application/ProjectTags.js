import styles from "./ProjectTags.module.css";
import Link from "next/link";
import {
  projectGoals,
  projectAudience,
  projectTracks,
  projectOpenness,
} from "../../content";
import Input from "../Input";

const ProjectTags = ({ form }) => {
  return (
    <div className={styles.projectTagsWrapper}>
      <h1>Project Tags</h1>
      <p className={styles.subtitle}>
        Select the Project Tags below. If you have questions about Project Tags,
        click{" "}
        <Link href="/">
          <a>here</a>
        </Link>
        .
      </p>
      <div className={styles.section}>
        <h2>Project Goals</h2>
        <div className={styles.selectionChoices}>
          {projectGoals.map((goal) => {
            return (
              <div>
                <Input
                  type="radio"
                  name="projectGoals"
                  value={goal.name}
                  form={form}
                  checked={goal.name == form.formData["projectGoals"]}
                />
                <label>{goal.name}</label>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.section}>
        <h2>Project Audience</h2>
        <div className={styles.selectionChoices}>
          {projectAudience.map((audience) => {
            return (
              <div>
                <Input
                  type="radio"
                  name="projectAudience"
                  value={audience.name}
                  form={form}
                  checked={audience.name == form.formData["projectAudience"]}
                />
                <label>{audience.name}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.firstTitle}>
        <label for="audience">Specific Audience</label>
        <div className={styles.progressBarWrapper}>
          <p> 80 Characters</p>
          <div className={styles.progressBar}>
            <span
              style={{
                background: "#718096",
                width: "70%",
                height: "100%",
                display: "block",
              }}
            ></span>
          </div>
        </div>
      </div>
      <Input
        className={styles.inputTextField}
        name="audience"
        maxLength={30}
        form={form}
      />
      <p className={styles.inputDescription}>
        Please tell us who your target audience is for this project.
      </p>
      <div className={styles.section}>
        <h2>Project Openness</h2>
        <div className={styles.selectionChoicesLast}>
          {projectOpenness.map((openness) => {
            return (
              <div>
                <Input
                  type="radio"
                  name="projectOpenness"
                  value={openness.name}
                  form={form}
                  checked={openness.name == form.formData["projectOpenness"]}
                />
                <label>{openness.name}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectTags;
