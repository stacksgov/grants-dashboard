import styles from "./ProjectLeadInformation.module.css";
import Input from "../Input";
import Form from "../Form";
import GithubIcon from "../../public/images/github.svg";

const ProjectLeadInformation = () => {
  let style = { display: "flex", gap: "20px" };

  const Fields = () => {
    return (
      <div>
        <div style={style}>
          <Input
            name="stxAddress"
            label="STX Wallet Address *"
            pageWidth="half"
            labelSize="12px"
            paddingBottom="50px"
            inputWidth="475px"
          />
          <div className={styles.memo}>
            <Input
              name="stxMemo"
              label="STX Wallet Memo *"
              pageWidth="half"
              labelSize="12px"
              paddingBottom="50px"
              inputWidth="250px"
            />
            <div
              style={{ color: "rgba(255, 255, 255, 0.24)", top: "80px" }}
              className={styles.checkboxWrapper}
            >
              <input id="stxMemoRequired" type="checkbox"></input>
              <label>
                I confirm no memo is required for the wallet address provided
              </label>
            </div>
          </div>
        </div>
        <div className={styles.previousGrants}>
          <div className={styles.checkboxWrapper}>
            <input id="completedPreviousGrant" type="checkbox"></input>
            <label>
              I have previously completed - or - I am currently working on
              another Stacks Foundation funded grant, residency, etc.
            </label>
          </div>
          <Input
            name="previousGrant"
            label="GitHub Issue"
            labelSize="12px"
            labelColor="rgba(255, 255, 255, 0.24)"
            image={<GithubIcon />}
          />
        </div>
        <div className={styles.previousGrants}>
          <div className={styles.checkboxWrapper}>
            <input id="otherEcosystem" type="checkbox"></input>
            <label>
              I have previously completed - or - I am currently enrolled in - or
              - I am accepted into: Stacks Web3 Startup Lab and/or Stacks
              Accelerator.
            </label>
          </div>
        </div>
        <Input
          name="otherEcosystemPrograms"
          label="Explain below which program and tell us about your project."
          labelSize="12px"
          labelColor="rgba(255, 255, 255, 0.24)"
          maxChar={300}
          height="100px"
        />
      </div>
    );
  };
  return (
    <Form
      title="Project Lead Information"
      description="Tell us the account funds should be made payable to if your application is approved. 
	  Note, this information will be visible on Github and cannot be changed after submitting."
      fields={Fields}
    />
  );
};

export default ProjectLeadInformation;
