import styles from "./ApplicationType.module.css";
import Form from "../Form";
import Input from "../Input";
import GithubIcon from "../../public/images/github.svg";
import { useEffect } from "react";
import { getSelectedValue } from "../Form";

const ApplicationType = () => {
  useEffect(() => {
    getSelectedValue("applicationType");
  });

  const Fields = () => {
    return (
      <div>
        <div className={styles.radioWrapper}>
          <div>
            <div className={styles.radio}>
              <input
                type="radio"
                name="applicationType"
                value="This is an application for a project that I intend to complete myself or as part of a team."
              />
              <label>
                This is an application for a project that I intend to complete
                myself or as part of a team.
              </label>
            </div>
          </div>
          <div>
            <div className={styles.radio}>
              <input
                type="radio"
                name="applicationType"
                value="This is just an idea I want to add to the Wishlist."
              />
              <label>This is just an idea I want to add to the Wishlist.</label>
            </div>
          </div>
          <div>
            <div className={styles.radio}>
              <input
                id="existingWishlist"
                type="radio"
                name="applicationType"
                value="This is an application I found on the list of approved Wishlist grants that I wish to complete."
              />
              <label>
                This is an application I found on the list of approved Wishlist
                grants that I wish to complete.
              </label>
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
      </div>
    );
  };
  return (
    <Form
      title="Application Type"
      description="What type of an application is this?"
      fields={Fields}
    />
  );
};

export default ApplicationType;
