import Input from "../Input";
import Form from "../Form";

const ProjectImpact = () => {
  const ImpactField = () => {
    return (
      <div>
        <Input name="projectImpact" maxchar={300} height="100px" />
      </div>
    );
  };
  const RisksField = () => {
    return (
      <div>
        <Input name="projectRisks" maxchar={300} height="100px" />
      </div>
    );
  };
  return (
    <div>
      <div style={{ paddingBottom: "85px" }}>
        <Form
          title="Project Impact"
          description="What key metrics will the community be able to review to verify that this project had a high impact?"
          fields={ImpactField}
        />
      </div>
      <div>
        <Form
          title="Project Risks"
          description="What are the risks involved with this project?  Are there any technical (or other) factors that might limit your ability to complete the project?  If so, what is your plan to overcome these factors?"
          fields={RisksField}
        />
      </div>
    </div>
  );
};

export default ProjectImpact;
