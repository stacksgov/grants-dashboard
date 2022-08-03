import Input from "../Input";
import Form from "../Form";

const ProjectMission = () => {
  const Fields = () => {
    return (
      <div>
        <Input name="projectMission" maxchar={1500} height="500px" />
      </div>
    );
  };
  return (
    <Form
      title="Project Mission Statement"
      description="Emphasize what is new & novel to Stacks and how the Stacks community will benefit from the project."
      fields={Fields}
    />
  );
};

export default ProjectMission;
