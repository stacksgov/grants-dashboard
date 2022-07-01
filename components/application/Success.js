import styles from './Success.module.css';

import { AiFillGithub } from 'react-icons/ai';

const Home = () => {
	return (
		<div className={styles.indexWrapper}>
			<div className={styles.rightWrapper}>
				<div>
					<p>Your Project application has been submitted for review:</p>
					<p> Please allow 2-4 weeks for your Initial Review. </p>
					<p>All comments, feedback, and notifications moving forward will be handled via GitHub</p>
					<button>
						View Application on Github
						<AiFillGithub size="25" />
					</button>
				</div>
				<div>
					<p>Want to explore the details?</p>
					<p>Vist the Project Launchpad GitHub Repository.</p>
					<button>
						Project Launchpad Repository <AiFillGithub size="25" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
