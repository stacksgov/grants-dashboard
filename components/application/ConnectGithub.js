import styles from './ConnectGithub.module.css';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

const ConnectGithub = () => {
	return (
		<div className={styles.indexBackground}>
			<div className={styles.indexWrapper}>
				<div className={styles.rightWrapper}>
					<div className={styles.funding}>
						<p>Funding available from:</p>
						<p>One-thousand to two-hundred and fifty thousand dollars.</p>
						<button>
							<Link href="/application">
								<a>Login with Github</a>
							</Link>

							<div>
								<AiFillGithub size="25" />
							</div>
						</button>
						<p>GitHub Account Required</p>
					</div>
					<div className={styles.basics}>
						<p>Want to learn the basics?</p>
						<p>Check out our educational Project Launchpad Primer.</p>
						<button>Project Launchpad Primer</button>
					</div>

					<div className={styles.basics}>
						<p>Want to explore the details?</p>
						<p>Vist the Project Launchpad GitHub Repository.</p>
						<button>
							<div> Project Launchpad Repository</div>
							<div>
								<AiFillGithub size="25" />
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConnectGithub;
