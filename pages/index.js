import Blob from '../public/images/blob.svg';
import styles from './Index.module.css';
import Rocket from '../public/images/rocket.svg';
import RocketShip from '../public/images/rocketship.svg';
import Link from 'next/link';
import IndexGithub from '../public/images/indexGithub.svg';
import { useSession, signIn, signOut } from 'next-auth/react';
import ExternalLinkIcon from '../public/images/externalLink.svg';
import { useEffect, useState } from 'react';
import { Octokit } from '@octokit/rest';
import StacksLogo from '../public/images/indexStxLogo.svg';
import StacksLogoSuccess from '../public/images/stacksModalLogoSuccess.svg';

const Home = () => {
	const { data: session } = useSession();
	const [show, setShow] = useState(false);
	const [mobile, setMobile] = useState();

	useEffect(() => {
		async function refresh() {
			if (session) {
				const github = new Octokit({
					auth: session.accessToken
				});
				await github.request('GET /user');
			}
		}
		if (session) {
			refresh();
		}

		window.innerWidth >= 800 ? setMobile(false) : setMobile(true);
	});

	const Button = () => {
		if (mobile === true) {
			return (
				<button onClick={() => setShow(true)}>
					Submit Your Application
					<Rocket />
				</button>
			);
		} else if (!session) {
			return (
				<button backgroundColor="grey" onClick={() => signIn('github')}>
					<a>Connect Github</a>
					<IndexGithub />
				</button>
			);
		} else if (session) {
			return (
				<Link href="/application">
					<button>
						<a>Submit Your Application</a>
						<Rocket />
					</button>
				</Link>
			);
		} else {
			return null;
		}
	};

	return (
		<div className={styles.indexParent}>
			<div>
				<style global jsx>{`
					html,
					body,
					body > div:first-child,
					div#__next,
					div#__next > div {
						height: 100%;
					}
				`}</style>

				<div className={styles.indexWrapper}>
					<div className={styles.leftWrapper}>
						<p className={styles.foundation}>Stacks Foundation</p>

						<h1>Grants Launchpad</h1>

						<p>
							Committed to helping developers, designers, community leaders, artists, entrepreneurs,
							and more build a more...
						</p>
						<div className={styles.mainBodyText}>
							<p>User-owned & open-source internet powered by the </p>
							<div className={styles.highlightedWords}>Stacks</div> blockchain,{' '}
							<div className={styles.highlightedWords}>Clarity</div> smart contracts, and secured by{' '}
							<div className={styles.highlightedWords}>Bitcoin.</div>
						</div>
					</div>
					<div className={styles.rightWrapper}>
						<div className={styles.secondSection}>
							<p>Before you apply:</p>

							<a
								href="https://github.com/stacksgov/Stacks-Grant-Launchpad"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button>
									VISIT GITHUB REPO <ExternalLinkIcon className={styles.externalLinkIcon} />
								</button>
							</a>
						</div>
						<div className={styles.firstSection}>
							<div>
								<p>Funding Available from:</p>
								<p>One-thousand to two-hundred and fifty thousand dollars.</p>
								<Button />
							</div>
						</div>
						<div className={styles.thirdSection}>
							<p>Already have an active grant?</p>

							<a
								href="https://grantsdashboard.stacks.org"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button>
									OLD DASHBOARD <ExternalLinkIcon className={styles.externalLinkIcon} />
								</button>
							</a>
						</div>
						<RocketShip className={styles.rocketShip} />
					</div>

					<Blob className={styles.blobSVG} />
				</div>
				<Link href="/utilities">
					<a>
						<button className={styles.utilities}>Utilities</button>
					</a>
				</Link>
				<StacksLogo className={styles.stxLogo} />
			</div>
			{show === true ? (
				<div className={styles.mobileModal}>
					<StacksLogoSuccess className={styles.stxLogoModal} />

					<p>
						Looks like you are on a mobile device. For the best experience and to submit a grant
						please use a computer.
					</p>
					<p onClick={() => setShow(false)}>Dismiss</p>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default Home;
