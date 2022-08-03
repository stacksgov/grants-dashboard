import Input from "../Input";
import Form from "../Form";
import Container from "../Container";

const ProjectInformation = () => {
  return (
    <Form
      title="Project Information"
      description="Tell us some basics about your project."
    >
      <Input
        name="projectTitle"
        label="Title Your Project"
        maxchar={30}
        description="Name your Project so that it clearly communicates your objectives to others, during review and in the future."
      />
      <Container>
        <Input
          name="projectBudget"
          label="Total Project Budget"
          description="Provide the total budget in $USD to complete your Project."
          isNumber={true}
        />
        <Input
          name="projectDuration"
          label="Total Project Duration"
          description="Provide the total amount of hours required to complete your Project. Include all members if this is a team project."
          isNumber={true}
        />
      </Container>
      <Input
        name="projectTeam"
        label="Project Team Members"
        description="Provide the GitHub usernames of any Project Team Members. Separate all names."
      />
    </Form>
  );
};

export default ProjectInformation;
