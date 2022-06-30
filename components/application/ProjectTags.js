import styles from './ProjectTags.module.css';
import Link from 'next/link';
const ProjectTags = ({ updateIssue }) => {
	return (
		<div className={styles.projectTagsWrapper}>
			<h1>Project Tags</h1>
			<p className={styles.subtitle}>
				Select the Project Tags below. If you have questions about Project Tags, click{' '}
				<Link href="/">
					<a>here</a>
				</Link>
				.
			</p>
			<div className={styles.section}>
				<h2>Project Goals</h2>
				<div className={styles.selectionChoices}>
					<div>
						<input
							id="createNewTechnology"
							type="radio"
							value="Create New Technology"
							name="projectGoals"
						/>
						<label for="createNewTechnology">Create New Technology</label>
					</div>
					<div>
						<input
							id="integrateBetweenTechnologies"
							type="radio"
							value="Integrate Between Technologies"
							name="projectGoals"
						/>
						<label for="integrateBetweenTechnologies">Integrate Between Technologies</label>
					</div>
					<div>
						<input
							id="improveExistingTechnologies"
							type="radio"
							value="Improve Existing Technologies"
							name="projectGoals"
						/>
						<label for="improveExistingTechnologies">Improve Existing Technologies</label>
					</div>
					<div>
						<input
							id="strengthenCommunity"
							type="radio"
							value="Strengthen Community"
							name="projectGoals"
						/>
						<label for="strengthenCommunity">Strengthen Community</label>
					</div>
				</div>
			</div>

			<div className={styles.section}>
				<h2>Project Audience</h2>
				<div className={styles.selectionChoices}>
					<div>
						<input id="developers" type="radio" value="Developers" name="projectAudience" />
						<label for="developers">Developers</label>
					</div>
					<div>
						<input
							id="existingEndUsers"
							type="radio"
							value="Existing End Users"
							name="projectAudience"
						/>
						<label for="existingEndUsers">Existing End Users</label>
					</div>
					<div>
						<input
							id="minersAndValidators"
							type="radio"
							value="Miners & Validators"
							name="projectAudience"
						/>
						<label for="minersAndValidators">Miners & Validators</label>
					</div>
					<div>
						<input
							id="potentialEndUsers"
							type="radio"
							value="Potential End Users"
							name="projectAudience"
						/>
						<label for="potentialEndUsers">Potential End Users</label>
					</div>
				</div>
			</div>
			<div className={styles.section}>
				<h2>Project Openness</h2>
				<div className={styles.selectionChoicesLast}>
					<div>
						<input
							id="fullOpenSource"
							type="radio"
							value="Fully Open Source"
							name="projectOpenness"
						/>
						<label for="fullOpenSource">Fully Open Source</label>
					</div>
					<div>
						<input
							id="partiallyOpenSource"
							type="radio"
							value="Partially Open Source"
							name="projectOpenness"
						/>
						<label for="partiallyOpenSource">Partially Open Source</label>
					</div>
					<div>
						<input id="notOpenSource" type="radio" value="Not Open Source" name="projectOpenness" />
						<label for="notOpenSource">Not Open Source</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectTags;
