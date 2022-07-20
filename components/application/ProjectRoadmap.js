import styles from "./ProjectRoadmap.module.css";
import Input from "../Input";
import Form from "../Form";

const ProjectRoadmap = () => {
  const Fields = () => {
    return (
      <div>
        <div className={styles.section}>
          <p>Final Deliverable</p>
          <div className={styles.input}>
            <Input
              name="finalDeliverable"
              label="Final Deliverable"
              labelSize="12px"
              labelColor="rgba(255, 255, 255, 0.48)"
              maxChar={80}
              paddingBottom="30px"
            />
            <Input
              name="finalDeliverableAC"
              label="Acceptance Criteria"
              labelSize="12px"
              labelColor="rgba(255, 255, 255, 0.48)"
              maxChar={80}
              paddingBottom="40px"
            />
          </div>
        </div>
        <div className={styles.section}>
          <p>Milestone Deliverables</p>
          <div className={styles.input}>
            <Input
              name="milestoneOneDeliverable"
              label="Deilverable (Milestone 1 of 3)"

              labelSize="12px"
              labelColor="rgba(255, 255, 255, 0.48)"
              maxChar={80}
              paddingBottom="30px"
            />
            <Input
              name="milestoneOneAC"
              label="Acceptance Criteria (Milestone 1 of 3)"

              labelSize="12px"
              labelColor="rgba(255, 255, 255, 0.48)"
              maxChar={80}
              paddingBottom="40px"
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <Form
      title="Project Roadmap"
      description="Provide clear, concise, easy to review deliverables and acceptance criteria for progress payments."
      fields={Fields}
    />
  );
};

export default ProjectRoadmap;
