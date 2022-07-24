import Input from '../Input';
import Form from '../Form';

const ProjectMission = () => {
	const Fields = () => {
		return (
			<div>
				<Input
					name="projectMission"
					maxChar={1500}
					description="Name your Project so that it clearly communicates your objectives to others, during review and in the future."
					height="750px"
				/>
			</div>
		);
	};
	return (
		<Form
			title="Project Mission Statement"
			description="Emphasize what is new & novel to Stacks and how the Stacks community will benefit from the project."
			fields={Fields}
		/>
	);
};

export default ProjectMission;
