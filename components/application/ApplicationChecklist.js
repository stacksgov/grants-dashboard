import Checkbox from "../Checkbox";
import Form from "../Form";
import { useEffect } from "react";

const ApplicationChecklist = () => {
  useEffect(() => {
    let formData = JSON.parse(localStorage.getItem("formData"));
    if (formData.agreedToChecklist) {
      let checklist = Array.from(document.getElementsByName("guidelines"));
      checklist.map((item) => {
        item.checked = true;
      });
    }
  });

  return (
    <Form
      title="Application Checklist"
      description="Please confirm you acknowledge the following before proceeding with the rest of your application."
    >
      <Checkbox
        name="guidelines"
        id="guideline1"
        value="I have read and understood the application guidelines and the terms
        and conditions."
      />
      <Checkbox
        name="guidelines"
        id="guideline2"
        value="I have read the application review schedule and understand when to
        expect feedback on my application."
      />
      <Checkbox
        name="guidelines"
        id="guideline3"
        value="I understand that if I have any questions regarding the application and/or project they should be asked either as a comment to my project application Github issue or in the Projects Github disucussion board."
      />
      <Checkbox
        name="guidelines"
        id="guideline4"
        value="I understand any software, code, or community resources produced with support from the Stacks Foundation must be released under an open-source license."
      />
      <Checkbox
        name="guidelines"
        id="guideline5"
        value="I understand all payments are contingent on satisfactory completion of each deliverable described by me in this application."
      />
      <Checkbox
        name="guidelines"
        id="guideline6"
        value="I understand that in order for a deliverable to be reviewed I must add a comment to my project application Github issue and provide a link to the deliverable requiring review."
      />
    </Form>
  );
};

export default ApplicationChecklist;
