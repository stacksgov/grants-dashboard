import Form from "../Form";
import TextArea from "../TextArea";

const ProjectMission = () => {
  return (
    <Form
      title="Project Mission Statement"
      description="Emphasize what is new & novel to Stacks and how the Stacks community will benefit from the project."
    >
      <TextArea name="projectMission" maxchar={1500} height="500px" />
    </Form>
  );
};

export default ProjectMission;
