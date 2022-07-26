import styles from "./ProjectType.module.css";
import Form from "../Form";
import Input from "../Input";
import GithubIcon from "../../public/images/github.svg";

const ProjectType = () => {
  const Fields = () => {
    return (
      <div>
        <div className={styles.radioWrapper}>
          <p>DIRECT APPLICATION</p>
          <div>
            <div className={styles.radio}>
              <input
                type="radio"
                name="projectType"
                value="This is a direct application, I intend to perform the work myself or as part of a team."
              />
              <label>
                This is a direct application, I intend to perform the work
                myself or as part of a team.
              </label>
            </div>
          </div>
        </div>
        <div className={styles.radioWrapper}>
          <p>WISHLIST RELATED</p>
          <div>
            <div className={styles.radio}>
              <input
                type="radio"
                name="projectType"
                value="This is an application for a project I want to add to the Wishlist and hope soneone else applied to complete it."
              />
              <label>
                This is an application for a project I want to add to the
                Wishlist and hope soneone else applied to complete it.
              </label>
            </div>
          </div>
          <div>
            <div className={styles.radio}>
              <input
                id="existingWishlist"
                type="radio"
                name="projectType"
                value="This is an application I found on the Wishlist that I wish to complete. (paste issue url below)"
              />
              <label>
                This is an application I found on the Wishlist that I wish to
                complete. (paste issue url below)
              </label>
            </div>
          </div>
          <Input
            name="wishlistGithub"
            label="Wishlist GitHub Issue"
            labelSize="12px"
            labelColor="rgba(255, 255, 255, 0.24)"
            image={<GithubIcon />}
          />
        </div>
      </div>
    );
  };
  return (
    <Form
      title="Application Type"
      description="Is this a direct application or is it Wishlist related?"
      fields={Fields}
    />
  );
};

export default ProjectType;
