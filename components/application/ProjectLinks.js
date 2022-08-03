import Input from "../Input";
import Form from "../Form";

const ProjectLinks = () => {
  const Fields = () => {
    return (
      <div style={{ paddingTop: "25px" }}>
        <div>
          <Input name="referenceLink" label="Reference Link URL" />
        </div>
        <div style={{ paddingTop: "50px" }}>
          <Input
            name="referenceLinkDescription"
            label="Reference Link Description"
            height="100px"
            maxchar={300}
          />
        </div>
      </div>
    );
  };
  return (
    <Form
      title="Project Links (optional)"
      description="Do you have any reference materials to provide?

      Pitch decks and/or code repositories are encouraged. It’s helpful to include testimonials (tweets, etc) from the community indicating that your project will fill a need in the community. Short videos and/or voice memos of you pitching your project are also encouraged.  Links must be accessible to all."
      fields={Fields}
    />
  );
};

export default ProjectLinks;
