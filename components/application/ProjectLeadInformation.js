import Input from "../Input";
import Form from "../Form";
import GithubIcon from "../../public/images/github.svg";
import Container from "../Container";
import Checkbox from "../Checkbox";
import TextArea from "../TextArea";

const ProjectLeadInformation = () => {
  return (
    <Form
      title="Grant Lead Information"
      description="Tell us a bit about any other support you’ve received within the Stacks ecosystem."
    >
      <Checkbox
        id="completedPreviousGrant"
        value="I have previously completed - or - I am currently working on another
        Stacks Foundation funded grant, residency, etc."
      />

      <Input name="previousGrant" label="GitHub Issue" image={<GithubIcon />} />
      <Checkbox
        id="otherEcosystem"
        value="I have previously completed - or - I am currently enrolled in - or -
          I am accepted into: Stacks Web3 Startup Lab and/or Stacks
          Accelerator."
      />
      <TextArea
        name="otherEcosystemPrograms"
        label="Explain below which program and tell us about your grant."
        maxchar={300}
        height="100px"
      />
    </Form>
  );
};

export default ProjectLeadInformation;
