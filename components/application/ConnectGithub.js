import styles from './ConnectGithub.module.css';
import GithubIcon from '../../public/images/github.svg';

const Home = () => {
	return (
		<div className={styles.indexWrapper}>
			<div className={styles.rightWrapper}>
				<div>
					<p>First, connect with GitHub:</p>
					<p>After submitting, all Projects live on GitHub.</p>
					<button>
						Login with GitHub
						<GithubIcon className={styles.svg} />
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
						Project Launchpad Repository <GithubIcon className={styles.svg} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
