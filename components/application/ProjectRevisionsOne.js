import Input from "../Input";
import Form from "../Form";

const ProjectRevisionsOne = () => {
  return (
    <Form
      title="Application Revisions (1 of 2)"
      description="This is an optional page.  Please let us know about and proposed revisions to the Wishlist project."
    >
      <Input
        name="budgetRevision"
        label="Project Budget Revision"
        hint="(optional)"
        labelFontSize="18px"
        description="Make any budget revisions and note your rationale above.  Please note, budget should be denominated in USD.  Also, revisions to the budget could impact the number of milestones required for the project."
        maxchar={100}
      />
      <Input
        name="durationRevision"
        label="Project Duration Revision"
        hint="(optional)"
        labelFontSize="18px"
        description="Make any project duration revisions (in hours) and explain your rationale above."
        maxchar={100}
      />
    </Form>
  );
};

export default ProjectRevisionsOne;
