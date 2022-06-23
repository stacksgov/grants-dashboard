import styles from './ProjectTrack.module.css';

const ProjectTrack = () => {
	return (
		<div className={styles.projectTrackWrapper}>
			<h1>Project Track</h1>
			<p className={styles.subtitle}>
				Select the Project Type below. If you have questions about Project Types, click here.
			</p>

			<div>
				<div>
					<input type="checkbox" />
				</div>
			</div>
		</div>
	);
};

export default ProjectTrack;
