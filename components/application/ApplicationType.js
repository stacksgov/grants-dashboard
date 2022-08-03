import Form from "../Form";
import Input from "../Input";
import Radio from "../Radio";
import GithubIcon from "../../public/images/github.svg";
import { useEffect } from "react";
import { getSelectedValue } from "../Form";

const ApplicationType = () => {
  useEffect(() => {
    getSelectedValue("applicationType");
  });

  return (
    <Form
      title="Application Type"
      description="What type of an application is this?"
    >
      <Radio
        name="applicationType"
        value="This is an application for a project that I intend to complete myself or as part of a team."
      />
      <Radio
        name="applicationType"
        value="This is just an idea I want to add to the Wishlist."
      />
      <Radio
        id="existingWishlist"
        name="applicationType"
        value="This is an application I found on the list of approved Wishlist grants that I wish to complete."
      />
      <Input
        name="wishlistGithub"
        label="Wishlist GitHub Issue"
        image={<GithubIcon />}
      />
    </Form>
  );
};

export default ApplicationType;
