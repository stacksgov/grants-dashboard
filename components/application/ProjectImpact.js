import TextArea from "../TextArea";
import Form from "../Form";

const ProjectImpact = () => {
  return (
    <>
      <Form
        title="Project Impact"
        description="What key metrics will the community be able to review to verify that this project had a high impact?"
      >
        <TextArea name="projectImpact" maxchar={300} height="100px" />
      </Form>
      <Form
        title="Project Risks"
        description="What are the risks involved with this project?  Are there any technical (or other) factors that might limit your ability to complete the project?  If so, what is your plan to overcome these factors?"
      >
        <TextArea name="projectRisks" maxchar={300} height="100px" />
      </Form>
    </>
  );
};

export default ProjectImpact;
