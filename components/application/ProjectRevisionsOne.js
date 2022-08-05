import Input from "../Input";
import Form from "../Form";

const ProjectRevisionsOne = () => {
  return (
    <Form
      title="Application Revisions (1 of 2)"
      description="This is an optional page.  Please let us know about and proposed revisions to the Wishlist grant."
    >
      <Input
        name="budgetRevision"
        label="Grant Budget Revision"
        hint="(optional)"
        labelFontSize="18px"
        description="Make any budget revisions and note your rationale above.  Please note, budget should be denominated in USD.  Also, revisions to the budget could impact the number of milestones required for the grant."
        maxchar={100}
      />
      <Input
        name="durationRevision"
        label="Grant Duration Revision"
        hint="(optional)"
        labelFontSize="18px"
        description="Make any grant duration revisions (in hours) and explain your rationale above."
        maxchar={100}
      />
    </Form>
  );
};

export default ProjectRevisionsOne;
