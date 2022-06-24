import styles from './ProjectTags.module.css';
import Link from 'next/link';
const ProjectTags = () => {
	return (
		<div className={styles.projectTagsWrapper}>
			<h1>Project Track</h1>
			<p className={styles.subtitle}>
				Select the Project Type below. If you have questions about Project Types, click{' '}
				<Link href="/">
					<a>here</a>
				</Link>
				.
			</p>
			<div className={styles.section}>
				<h2>Project Goals</h2>
				<div className={styles.selectionChoices}>
					<div>
						<input id="newTechnology" type="checkbox" />
						<label for="newTechnology">Create New Technology</label>
					</div>
					<div>
						<input id="integrateTechnologies" type="checkbox" />
						<label for="integrateTechnologies">Integrate Between Technologies</label>
					</div>
					<div>
						<input id="improveTechnologies" type="checkbox" />
						<label for="improveTechnologies">Improve Existing Technologies</label>
					</div>
					<div>
						<input id="strengthenCommunity" type="checkbox" />
						<label for="strengthenCommunity">Strengthen Community</label>
					</div>
				</div>
			</div>

			<div className={styles.section}>
				<h2>Project Audience</h2>
				<div className={styles.selectionChoices}>
					<div>
						<input id="developers" type="checkbox" /> <label>Developers</label>
					</div>
					<div>
						<input id="existingEndUsers" type="checkbox" /> <label>Existing End Users</label>
					</div>
					<div>
						<input id="minersValidators" type="checkbox" /> <label>Miners & Validators</label>
					</div>
					<div>
						<input id="potentialEndUsers" type="checkbox" /> <label>Potential End Users</label>
					</div>
				</div>
			</div>
			<div className={styles.section}>
				<h2>Project Openness</h2>
				<div className={styles.selectionChoicesLast}>
					<div>
						<input id="fullyOpenSource" type="checkbox" /> <label>Fully Open Source</label>
					</div>
					<div>
						<input id="partiallyOpenSource" type="checkbox" /> <label>Partially Open Source</label>
					</div>
					<div>
						<input id="notOpenSource" type="checkbox" /> <label>Not Open Source</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectTags;
