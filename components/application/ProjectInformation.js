import styles from './ProjectInformation.module.css';

const ProjectInformation = ({ updateIssue }) => {
	return (
		<div className={styles.projectInformationWrapper}>
			<h1>Project Information</h1>
			<div>
				<div className={styles.firstTitle}>
					<label for="name">Title Your Project</label>
					<div className={styles.progressBarWrapper}>
						<p>30 Characters</p>
						<div className={styles.progressBar}>
							<span
								style={{
									background: '#718096',
									width: '30%',
									height: '100%',
									display: 'block'
								}}
							></span>
						</div>
					</div>
				</div>
				<input id="name" type="text" placeholder="Type Here..." />
				<p className={styles.inputDescription}>
					Name your Project so that it clearly communicates your objectives to others, during review
					and in the future.
				</p>
			</div>

			<div className={styles.secondSection}>
				<div>
					<label for="budget">Total Project Budget</label>
					<input
						id="budget"
						type="number"
						placeholder="Type Here..."
						onWheel={(e) => e.target.blur()}
					/>
					<p>Provide the total budget in $USD to complete your Project.</p>
				</div>
				<div>
					<label for="duration">Total Project Duration</label>
					<input
						id="duration"
						type="number"
						placeholder="Type Here..."
						onWheel={(e) => e.target.blur()}
					/>
					<p>
						Provide the total amount of hours required to complete your Project. Include all members
						if this is a team project.
					</p>
				</div>
			</div>
			<div className={styles.lastSection}>
				<label for="teamMembers">Project Team Members</label>
				<input id="team" type="text" placeholder="Type Here..." />
				<p>Provide the GitHub usernames of any Project Team Members. Comma separate all names.</p>
			</div>
		</div>
	);
};

export default ProjectInformation;
