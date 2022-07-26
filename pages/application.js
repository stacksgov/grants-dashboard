import styles from "./Application.module.css";
import Nav from "../components/application/layout/Nav";
import Steps from "../components/application/layout/Steps";
import StacksLogo from "../public/images/stacks-logo.svg";
import Checkmark from "../public/images/checkmark.svg";
import ProjectImpact from "../components/application/ProjectImpact";
import ProjectLinks from "../components/application/ProjectLinks";
import ProjectType from "../components/application/ProjectType";
import { useEffect, useState } from "react";
import {
  isValidURL,
  isValidEmail,
  isValidStxAddress,
} from "../components/Input";

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
import ProjectUserInfoCTwo from "../components/application/ProjectUserInfoCTwo";
import ProjectRevisionsOne from "../components/application/ProjectRevisionsOne";
import ProjectRevisionsTwo from "../components/application/ProjectRevisionsTwo";
import { useSession } from "next-auth/react";

const Application = () => {
  const { data: session } = useSession();

  useEffect(() => {
    let formData = JSON.parse(localStorage.getItem("formData"));

    if (!formData) localStorage.setItem("formData", JSON.stringify({}));
    formData.githubUsername = session.user.name;
    localStorage.setItem("formData", JSON.stringify(formData));
  }, []);

  const [currentStep, setCurrentStep] = useState(1);

  let invalidFields = [];

  let optionGroupsChecked = [];
  let optionGroupsValid = [];

  function validateField(field) {
    field.style.outlineColor = "#3182ce";
    field.style.borderColor = "#3182ce";
    invalidFields = invalidFields.filter((e) => e !== field.name);
  }

  function checkField(field) {
    switch (field.type) {
      case "text":
      case "textarea":
        console.log(`field value for ${field.name}: `, field.value);

        if (field.value == undefined || field.value == "") {
          field.style.outlineColor = "red";
          field.style.borderColor = "red";
          invalidFields.push(field.name);
        } else {
          switch (field.name) {
            case "wishlistGithub":
            case "referenceLink":
              if (!isValidURL(field.value)) {
                field.style.outlineColor = "red";
                field.style.borderColor = "red";
                invalidFields.push(field.name);
              }
              break;
            case "email":
              if (!isValidEmail(field.value)) {
                field.style.outlineColor = "red";
                field.style.borderColor = "red";
                invalidFields.push(field.name);
              }
              break;
            case "stxAddress":
              if (!isValidStxAddress(field.value)) {
                field.style.outlineColor = "red";
                field.style.borderColor = "red";
                invalidFields.push(field.name);
              }
              break;

            default:
              validateField(field);

              break;
          }
        }
        break;
      case "radio":
        if (!optionGroupsChecked.includes(field.name)) {
          optionGroupsChecked.push(field.name);
        }
        if (!optionGroupsValid.includes(field.name)) {
          if (field.checked) {
            optionGroupsValid.push(field.name);
          }
        }
        break;
    }
  }

  function handleSubmit() {
    let fields = Array.from(document.querySelectorAll("input, textarea"));
    console.log(fields);

    fields.map((field) => {
      console.log("FIELD TYPE", field);

      switch (field.name) {
        case "discordUsername":
        case "twitterUsername":
        case "projectTeam":
        case "referenceLink":
        case "referenceLinkDescription":
        case "budgetRevision":
        case "durationRevision":
        case "projectRevisions":
          break;
        case "wishlistGithub":
          let existingWishlist =
            document.getElementById("existingWishlist").checked;
          if (!existingWishlist) {
            validateField(field);
            break;
          }
          checkField(field);
          break;
        case "stxMemo":
          let stxMemoNotRequired =
            document.getElementById("stxMemoRequired").checked;
          if (stxMemoNotRequired) {
            validateField(field);
            break;
          }
          checkField(field);
          break;
        case "previousGrantGithub":
          let previouslyCompletedGrant = document.getElementById(
            "completedPreviousGrant"
          ).checked;
          if (!previouslyCompletedGrant) {
            validateField(field);
            break;
          }
          checkField(field);
          break;
        case "otherEcosystemPrograms":
          let otherEcosystemPrograms =
            document.getElementById("otherEcosystem").checked;
          if (!otherEcosystemPrograms) {
            validateField(field);
            break;
          }
          checkField(field);
          break;
        default:
          checkField(field);
          break;
      }
    });
    let optionsValid = optionGroupsChecked.length == optionGroupsValid.length;
    optionsValid ? null : invalidFields.push(optionGroupsChecked[0]);

    console.log("invalid fields", invalidFields);
    let formData = JSON.parse(localStorage.getItem("formData"));

    if (invalidFields.length == 0) {
      setCurrentStep(currentStep + 1);
      fields.map((field) => {
        let { name, value, type } = field;

        switch (type) {
          case "text":
          case "textarea":
            formData[name] = value;
            break;
          case "radio":
            if (field.checked) {
              formData[name] = value;
            }
        }
        localStorage.setItem("formData", JSON.stringify(formData));
      });
    }
  }

  const CurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <ProjectFundingStream />;
      case 2:
        return <ProjectImpact />;
      case 3:
        return <ProjectInformation />;
      case 4:
        return <ProjectLinks />;
      case 5:
        return <ProjectMission />;
      case 6:
        return <ProjectRevisionsOne />;
      case 7:
        return <ProjectRevisionsTwo />;
      case 8:
        return <ProjectRoadmap />;
      case 9:
        return <ProjectTags />;
      case 10:
        return <ProjectTrack />;
      case 11:
        return <ProjectType />;
      case 12:
        return <ProjectUserInfoOne />;
      case 13:
        return <ProjectUserInfoTwo />;
      case 14:
        return <ProjectUserInfoCTwo />;
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
              "Funding Stream",
              "Impact",
              "Project Information",
              "Links",
              "Mission",
              "Revisions 1",
              "Revisions 2",
              "Roadmap",
              "Tags",
              "Track",
              "Type",
              "User Info 1",
              "User Info 2",
              "User Info C 2",
            ]}
          />
        </div>
        <div>{CurrentStep()}</div>
        <div className={styles.button}>
          <button onClick={handleSubmit} name="okButton">
            <Checkmark />
            <p>Ok</p>
          </button>
        </div>
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
