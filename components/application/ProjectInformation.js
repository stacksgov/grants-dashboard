import Input from '../Input';
import Form from '../Form';
import Container from '../Container';

const ProjectInformation = () => {
	return (
		<Form title="Grant Information" description="Tell us some basics about your grant.">
			<Input
				name="projectTitle"
				label="Title Your Grant"
				maxchar={30}
				description="Name your Grant so that it clearly communicates your objectives to others, during review and in the future."
			/>
			<Container>
				<Input
					name="projectBudget"
					label="Total Budget"
					description="Provide the total budget in $USD to complete your Grant."
					isNumber={true}
				/>
				<Input
					name="projectDuration"
					label="Total Duration"
					description="Provide the total amount of hours required to complete your Grant. Include all members if this is a team grant."
					isNumber={true}
				/>
			</Container>
			<Input
				name="projectTeam"
				label="Grant Team Members"
				description="Provide the GitHub usernames of any Grant Team Members. Comma separate all names."
			/>
		</Form>
	);
};

export default ProjectInformation;
