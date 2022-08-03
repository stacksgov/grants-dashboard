import Input from "../Input";
import Form from "../Form";

const ProjectRevisionsOne = () => {
  const Fields = () => {
    return (
      <div>
        <Input
          name="budgetRevision"
          label="Project Budget Revision (optional)"
          description="Make any budget revisions and note your rationale above.  Please note, budget should be denominated in USD.  Also, revisions to the budget could impact the number of milestones required for the project."
          maxchar={100}
        />
        <Input
          name="durationRevision"
          label="Project Duration Revision (optional)"
          description="Make any project duration revisions (in hours) and explain your rationale above."
          maxchar={100}
        />
      </div>
    );
  };
  return (
    <Form
      title="Project Revisions (1 of 2)"
      description="This is an optional page.  Please let us know about and proposed revisions to the Wishlist project."
      fields={Fields}
    />
  );
};

export default ProjectRevisionsOne;
