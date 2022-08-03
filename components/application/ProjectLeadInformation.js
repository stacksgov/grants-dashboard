import Input from "../Input";
import Form from "../Form";
import GithubIcon from "../../public/images/github.svg";
import Container from "../Container";
import Checkbox from "../Checkbox";
import TextArea from "../TextArea";

const ProjectLeadInformation = () => {
  return (
    <Form
      title="Project Lead Information"
      description="Tell us the account funds should be made payable to if your application is approved. Note, this information will be visible on Github and cannot be changed after submitting."
    >
      <Container>
        <Input name="stxAddress" label="STX Wallet Address *" />

        <div>
          <Input name="stxMemo" label="STX Wallet Memo *" />
          <Checkbox
            id="stxMemoRequired"
            value="I confirm no memo is required for the wallet address provided.*"
          />
        </div>
      </Container>
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
        label="Explain below which program and tell us about your project."
        maxchar={300}
        height="100px"
      />
    </Form>
  );
};

export default ProjectLeadInformation;
