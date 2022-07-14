import Blob from '../public/images/blob.svg';
import styles from './Index.module.css';
import Rocket from '../public/images/rocket.svg';
import Link from 'next/link';
import IndexGithub from '../public/images/indexGithub.svg';
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
					User-owned & open-source internet powered by the{' '}
					<span className={styles.highlightedWords}>Stacks</span> blockchain,{' '}
					<span className={styles.highlightedWords}>Clarity</span> smart contracts, and secured by{' '}
					<span className={styles.highlightedWords}>Bitcoin.</span>
				</p>
			</div>
			<div className={styles.rightWrapper}>
				<div className={styles.firstSection}>
					<div>
						<p>Funding Available from:</p>
						<p>One-thousand to two-hundred and fifty thousand dollars.</p>
						<Link href="/application">
							<button>
								<a>Submit Your Application</a>

								<Rocket />
							</button>
						</Link>{' '}
					</div>
				</div>
				<div className={styles.secondSection}>
					<div>
						<p>Maximize Your Impact</p>
						<p>Submit a Wishlist project. Or apply to take one on.</p>
						<Link href="/">
							<a>
								<button>Wishlist Projects</button>
							</a>
						</Link>{' '}
					</div>
					<div>
						<p>Want to learn the basics?</p>
						<p>Check out our educational Project Launchpad Primer.</p>
						<Link href="/primer">
							<button>
								<a>Project Launchpad Primer</a>
							</button>
						</Link>
					</div>
					<div>
						<p>Want to explore the details?</p>
						<p>Vist the Project Launchpad GitHub Repository.</p>
						<button>
							Project Launchpad Repository <IndexGithub />
						</button>
					</div>
				</div>
			</div>
			<Link href="/utilities">
				<a>
					<button className={styles.utilities}>Utilities</button>
				</a>
			</Link>
			<div className={styles.blob}>
				<Blob />
			</div>
		</div>
	);
};

export default Home;
