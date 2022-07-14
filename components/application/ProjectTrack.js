import styles from './ProjectTrack.module.css';
import Link from 'next/link';
import { projectTracks } from '../../content';
import Input from '../Input';

const ProjectTrack = ({ form }) => {
	return (
		<div className={styles.projectTrackWrapper}>
			<h1>Project Track</h1>
			<p className={styles.subtitle}>
				Select the Project Type below. If you have questions about Project Types, click{' '}
				<Link href="/">
					<a>here</a>
				</Link>
				.
			</p>

			<div className={styles.tracksWrapper}>
				{projectTracks.map((track) => {
					return (
						<div className={styles.tracks}>
							<Input
								type="radio"
								name="projectTrack"
								value={track.name}
								form={form}
								checked={track.name == form.formData['projectTrack']}
							/>
							<label>{track.name}</label>
							<ul>
								{track.list.map((item) => {
									return <li>{item}</li>;
								})}
							</ul>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectTrack;
