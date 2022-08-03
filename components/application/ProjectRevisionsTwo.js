import Form from "../Form";
import TextArea from "../TextArea";

const ProjectRevisionsTwo = () => {
  return (
    <Form
      title="Application Revisions (2 of 2)"
      description="This is an optional page.  Explain any other proposed revisions to the Wishlist project."
    >
      <TextArea name="projectRevisions" maxchar={1500} height="500px" />
    </Form>
  );
};

export default ProjectRevisionsTwo;
