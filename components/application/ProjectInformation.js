import Input from '../Input';
import Form from '../Form';
import styles from './ProjectInformation.module.css';

const ProjectInformation = () => {
	let style = { display: 'flex', gap: '20px' };

	const Fields = () => {
		return (
			<div>
				<Input
					name="projectTitle"
					label="Title Your Project"
					maxChar={30}
					description="Name your Project so that it clearly communicates your objectives to others, during review and in the future."
				/>
				<div style={style}>
					<Input
						name="projectBudget"
						label="Total Project Budget"
						description="Provide the total budget in $USD to complete your Project."
						pageWidth="half"
					/>
					<Input
						name="projectDuration"
						label="Total Project Duration"
						description="Provide the total amount of hours required to complete your Project. Include all members if this is a team project."
						pageWidth="half"
					/>
				</div>
				<Input
					name="projectTeam"
					label="Project Team Members"
					description="Provide the GitHub usernames of any Project Team Members. Separate all names."
				/>
			</div>
		);
	};
	return (
		<Form
			title="Project Information"
			description="Tell us some basics about your project."
			fields={Fields}
		/>
	);
};

export default ProjectInformation;
