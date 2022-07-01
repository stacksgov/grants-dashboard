import styles from './ConnectGithub.module.css';

import { AiFillGithub } from 'react-icons/ai';

const Home = () => {
	return (
		<div className={styles.indexWrapper}>
			<div className={styles.rightWrapper}>
				<div>
					<p>First, connect with GitHub:</p>
					<p>After submitting, all Projects live on GitHub.</p>
					<button>
						Login with GitHub
						<AiFillGithub size="25" />
					</button>
				</div>

				<div>
					<p>Want to learn the basics?</p>
					<p>Check out our educational Project Launchpad Primer.</p>
					<button>Project Launchpad Primer</button>
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
