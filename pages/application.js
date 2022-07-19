import styles from "./Application.module.css";
import Nav from "../components/application/layout/Nav";
import Steps from "../components/application/layout/Steps";
import StacksLogo from "../public/images/stacks-logo.svg";

import ProjectImpact from "../components/application/ProjectImpact";
import ProjectLinks from "../components/application/ProjectLinks";
import ProjectType from "../components/application/ProjectType";
import { useState } from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import ProjectInformation from "../components/application/ProjectInformation";
import ProjectUserInfoOne from "../components/application/ProjectUserInfoOne";
import ProjectUserInfoTwo from "../components/application/ProjectUserInfoTwo";
import ProjectFundingStream from "../components/application/ProjectFundingStream";
import ProjectTrack from "../components/application/ProjectTrack";
import ProjectTags from "../components/application/ProjectTags";
import ProjectRoadmap from "../components/application/ProjectRoadmap";
import ProjectMission from "../components/application/ProjectMission";

const Application = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const CurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <ProjectType />;
      case 2:
        return <ProjectUserInfoOne />;
      case 3:
        return <ProjectUserInfoTwo />;
      case 4:
        return <ProjectFundingStream />;
      case 5:
        return <ProjectTrack />;
      case 6:
        return <ProjectTags />;
      case 7:
        return <ProjectInformation />;
      case 8:
        return <ProjectRoadmap />;
      case 9:
        return <ProjectMission />;
      case 10:
        return <ProjectImpact />;
      case 11:
        return <ProjectLinks />;
    }
  };

  return (
    <div className={styles.applicationWrapper}>
      <Nav name={"Application"} step={currentStep} />
      <div className={styles.mainComponents}>
        <div id="step" className={styles.middleComponent}>
          <Steps
            setCurrentStep={setCurrentStep}
            step={currentStep}
            steps={[
              "Application Type",
              "User Information (1 of 2)",
              "User Information (2 of 2)",
              "Project Type",
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
        <div>{CurrentStep()}</div>
      </div>
      <StacksLogo className={styles.stacksSVG} />
    </div>
  );
};

export default Application;

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  session.user.email = "";
  return {
    props: {
      session,
    },
  };
}
