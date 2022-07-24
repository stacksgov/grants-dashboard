import Input from "../Input";
import Form from "../Form";

const ProjectRevisionsTwo = () => {
  const Fields = () => {
    return (
      <div>
        <Input
          name="projectRevisions"
          maxChar={1500}
          description="Name your Project so that it clearly communicates your objectives to others, during review and in the future."
          height="750px"
        />
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
