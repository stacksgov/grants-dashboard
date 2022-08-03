import Input from "../Input";
import Form from "../Form";

const ProjectRevisionsTwo = () => {
  const Fields = () => {
    return (
      <div>
        <Input name="projectRevisions" maxchar={1500} height="500px" />
      </div>
    );
  };
  return (
    <Form
      title="Project Revisions (2 of 2)"
      description="This is an optional page.  Explain any other proposed revisions to the Wishlist project."
      fields={Fields}
    />
  );
};

export default ProjectRevisionsTwo;
