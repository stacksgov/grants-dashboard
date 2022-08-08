import styles from './Utilities.module.css';
import CloseIcon from '../public/images/close.svg';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import StacksLogo from '../public/images/stacks-logo.svg';
import { Octokit } from '@octokit/rest';
import { useEffect } from 'react';
import { ST } from 'next/dist/shared/lib/utils';

const Utilities = () => {
	const { data: session } = useSession();
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
	});
	return (
		<div>
			<Link href="/">
				<a>
					<div className={styles.close}>
						<p>
							<CloseIcon />
							Close
						</p>
						<span></span>
					</div>
				</a>
			</Link>
			<div className={styles.utilitiesWrapper}>
				<h1>Utilities</h1>
				<p className={styles.descriptor}>A couple of tools that might be helpful.</p>

				<div className={styles.buttonWrapper}>
					<div>
						<p>A. Calculate and Verify Payment Amounts</p>
						<Link href="/stacks-payment-converter">
							<a>
								<button>STX Payment Converter</button>
							</a>
						</Link>
					</div>
					<div>
						<p>B. Export Grant Data from Github</p>
						{!session && (
							<Link href="/grant-data-exporter">
								<a>
									<button onClick={() => signIn('github')}>Connect Github</button>
								</a>
							</Link>
						)}
						{session && (
							<Link href="/grant-data-exporter">
								<a>
									<button>Grant Data Exporter</button>
								</a>
							</Link>
						)}
					</div>
				</div>
			</div>
			<StacksLogo className={styles.stacksSVG} />
		</div>
	);
};

export default Utilities;
