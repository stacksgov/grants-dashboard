import styles from "./Application.module.css";
import Nav from "../components/application/layout/Nav";
import Steps from "../components/application/layout/Steps";
import Checkmark from "../public/images/checkmark.svg";
import StacksLogo from "../public/images/stacks-logo.svg";
import ProjectLead from "../components/application/ProjectLead";
import FundingStream from "../components/application/FundingStream";
import ProjectTrack from "../components/application/ProjectTrack";
import ProjectTags from "../components/application/ProjectTags";
import ProjectInformation from "../components/application/ProjectInformation";
import ProjectRoadmap from "../components/application/ProjectRoadmap";
import MissionStatement from "../components/application/MissionStatement";
import ProjectImpact from "../components/application/ProjectImpact";
import ProjectLinks from "../components/application/ProjectLinks";
import Success from "../components/application/Success";
import { useState } from "react";

const Application = () => {
  //   const { formData, setFormData } = useFormData();
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({});

  function handleChange(event) {
    console.log("handnling change");
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit() {
    console.log("form data", formData);
    setCurrentStep(currentStep + 1);
    if (currentStep > 8) {
      submitApplication();
    }
  }

  const CurrentStep = (form) => {
    switch (currentStep) {
      case 1:
        return <ProjectLead form={form} />;
      case 2:
        return <FundingStream form={form} />;
      case 3:
        return <ProjectTrack form={form} />;
      case 4:
        return <ProjectTags form={form} />;
      case 5:
        return <ProjectInformation form={form} />;
      case 6:
        return <ProjectRoadmap form={form} />;
      case 7:
        return <MissionStatement form={form} />;
      case 8:
        return <ProjectImpact form={form} />;
      case 9:
        return <ProjectLinks form={form} />;
      case 10:
        return <Success form={form} />;
    }
  };

  return (
    <div
      className={styles.applicationWrapper}
      onSubmit={() => console.log("submitting")}
    >
      <Nav name={"Application"} step={currentStep} />
      <div className={styles.mainComponents}>
        <div className={styles.middleComponent}>
          <Steps
            setCurrentStep={setCurrentStep}
            step={currentStep}
            steps={[
              "Project Lead",
              "Funding Stream & Project Type",
              "Project Track",
              "Project Tags",
              "Project Information",
              "Project Roadmap",
              "Project Mission Statement",
              "Project Impact & Risks",
              "Project Links",
            ]}
          />
        </div>
        <div>
          {CurrentStep({ formData, handleChange })}
          {JSON.stringify(formData)}
        </div>
        <div className={styles.button}>
          <button onClick={handleSubmit}>
            <Checkmark />
            {currentStep <= 8 ? <p>Ok</p> : <p>Submit Application</p>}
          </button>
        </div>
      </div>
      <StacksLogo className={styles.stacksSVG} />
    </div>
  );
};

export default Application;
