import styles from "./Application.module.css";
import Nav from "../components/application/layout/Nav";
import Steps from "../components/application/layout/Steps";
import Checkmark from "../public/images/checkmark.svg";
import StacksLogo from "../public/images/stacks-logo.svg";
import Wishlist from "../components/application/Wishlist";
import FundingStream from "../components/application/FundingStream";
import ProjectTrack from "../components/application/ProjectTrack";
import ProjectTags from "../components/application/ProjectTags";
import ProjectInformation from "../components/application/ProjectInformation";
import ProjectRoadmap from "../components/application/ProjectRoadmap";
import MissionStatement from "../components/application/MissionStatement";
import ProjectLinks from "../components/application/ProjectLinks";
import Success from "../components/application/Success";
import { useState } from "react";

const Application = () => {
  //   const { formData, setFormData } = useFormData();
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({});

  function handleChange(event) {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit() {
    console.log("form data", formData);
    setCurrentStep(currentStep + 1);
    if (currentStep > 7) {
      submitApplication();
    }
  }

  const CurrentStep = (props) => {
    switch (currentStep) {
      case 1:
        return <Wishlist props={props} />;
      case 2:
        return <FundingStream props={props} />;
      case 3:
        return <ProjectTrack props={props} />;
      case 4:
        return <ProjectTags props={props} />;
      case 5:
        return <ProjectInformation props={props} />;
      case 6:
        return <ProjectRoadmap props={props} />;
      case 7:
        return <MissionStatement props={props} />;
      case 8:
        return <ProjectLinks props={props} />;
      case 9:
        return <Success props={props} />;
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
            step={currentStep}
            steps={[
              "Wishlist Project?",
              "Funding Stream & Projet Type",
              "Project Track",
              "Project Tags",
              "Project Information",
              "Project Roadmap",
              "Project Mission Statement",
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
            {currentStep <= 7 ? <p>Ok</p> : <p>Submit Application</p>}
          </button>
        </div>
      </div>
      <StacksLogo className={styles.stacksSVG} />
    </div>
  );
};

export default Application;
