import Blob from '../public/images/blob.svg';
import styles from './index.module.css';
import Rocket from '../public/images/rocket.svg';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';

const Home = () => {
	return (
		<div className={styles.indexWrapper}>
			<div className={styles.leftWrapper}>
				<p className={styles.foundation}>Stacks Foundation</p>
				<h1>Project Launchpad</h1>
				<p>
					Committed to helping developers, designers, community leaders, artists, entrepreneurs, and
					more build a more...
				</p>
				<p>
					User-owned & open-source internet powered by the <span>Stacks</span> blockchain,{' '}
					<span>Clarity</span> smart contracts, and secured by <span>Bitcoin.</span>
				</p>
			</div>
			<div className={styles.rightWrapper}>
				<div>
					<p>Funding Available from:</p>
					<p>One-thousand to two-hundred and fifty thousand dollars.</p>
					<Link href="/application">
						<button>
							<a>Submit Your Application</a>

							<Rocket />
						</button>
					</Link>{' '}
					<p>GitHub Account Required</p>
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

			<div className={styles.blob}>
				<Blob />
			</div>
		</div>
	);
};

export default Home;
