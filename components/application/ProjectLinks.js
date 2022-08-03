import Input from "../Input";
import TextArea from "../TextArea";
import Form from "../Form";

const ProjectLinks = () => {
  return (
    <Form
      title="Project Links (optional)"
      description="Do you have any reference materials to provide?

      Pitch decks and/or code repositories are encouraged. It’s helpful to include testimonials (tweets, etc) from the community indicating that your project will fill a need in the community. Short videos and/or voice memos of you pitching your project are also encouraged.  Links must be accessible to all."
    >
      <Input name="referenceLink" label="Reference Link URL" />
      <TextArea
        name="referenceLinkDescription"
        label="Reference Link Description"
        height="100px"
        maxchar={300}
      />
    </Form>
  );
};

export default ProjectLinks;
