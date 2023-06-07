import styles from './Index.module.css';
import NavHeader from '../components/NavHeader';
import InfoCard from '../components/InfoCard';
import Abstracto_005 from '../public/images/Abstracto_005.svg';
import Abstracto_007 from '../public/images/Abstracto_007.svg';
import Abstracto_008 from '../public/images/Abstracto_008.svg';

const Home = () => {
	const data = [
		{
			title: 'sBTC Protocol',
			fee: '1.25 BTC per team member',
			headingSecondary: 'Testing Team',
			awardedIn: '$BTC',
			deadline: 'June 20, 2023',
			description: 'Seeking 3-6 experienced Software Engineers to design and build sBTC-related testing infrastructure and quality assurance systems. The members of this team will be expected to work 40 hrs/wk for 12 weeks on this effort.',
			text: '',
			link: 'https://github.com/stacksgov/Stacks-Grant-Launchpad/issues/914'
		},
		{
			title: 'Stacks Protocol',
			fee: 'Up to 100k STX',
			headingSecondary: 'Liquid STX',
			awardedIn: '$STX',
			deadline: 'June 20, 2023',
			description: 'Develop a comprehensive liquid stacking module for STX on Stacks. Provide a streamlined stacking process for users and increasing liquidity and participation in the network via automated reward conversion, stSTX token issuance, and other liquid stacking features.',
			text: '',
			link: 'https://github.com/stacksgov/Stacks-Grant-Launchpad/issues/915'
		},
		{
			title: 'Bitcoin on Stacks',
			fee: 'Undetermined',
			headingSecondary: 'Improvements',
			awardedIn: '$BTC',
			deadline: 'June 20, 2023',
			description: 'Soliciting ideas for open-source, high-impact contributions to advance the mission of activating all L1 Bitcoin-based assets on the L2 Stacks layer via the sBTC protocol.',
			text: 'Open to proposals focused on extending sBTC at the infrastructural or application level and/or improving DevEx.',
			link: 'https://github.com/stacksgov/Stacks-Grant-Launchpad/issues/916'
		},
		{
			title: 'Stacks & Clarity',
			fee: 'Undetermined',
			headingSecondary: 'Improvements',
			awardedIn: '$STX',
			deadline: 'June 20, 2023',
			description: 'Soliciting ideas for open-source, high-impact contributions to advance the mission of activating all L1 Bitcoin-based assets on the L2 Stacks layer via Clarity smart contracts.',
			text: 'Open to proposals focused on improving Stacks at the infrastructural or application level and/or improving DevEx',
			link: 'https://github.com/stacksgov/Stacks-Grant-Launchpad/issues/917'
		}
	]

	return (
		<div className={styles.bountiesBody}>
			<div style={{ position: 'absolute', right: 0, bottom: 0, zIndex: 1 }}>
				<Abstracto_005 />
			</div>
			<div>
				<style>{`
					html,
					body,
					body > div:first-child,
					div#__next,
					div#__next > div {
						
					}
				`}</style>
				<div style={{ position: 'absolute', top: 0, left: 0 }}>
					<Abstracto_007 />
				</div>
				<div className={styles.container}>
					<NavHeader />
					<div className={styles.banner}>
						<div className={styles.bannerLeft}>
							<p className={styles.textTop}>Funding up to 12 BTC + 250k STX</p>
							<h1>Critical Bounties</h1>
							<p className={styles.textBottom}>Critical Bounties are RFP-style grants that support the development of a user-owned & open-source internet anchored in Bitcoin technology.</p>
						</div>
						<div style={{ position: 'absolute', right: -150, top: -190, zIndex: -1 }}>
							<Abstracto_008 />
						</div>
					</div>
					<div className={styles.buttons}>
						<button className={styles.active}>Open</button>
					</div>
					<div className={styles.cardsWrapper}>
						{
							data.map((item, index) => (
								<InfoCard key={index} title={item.title} headingSecondary={item.headingSecondary} awardedIn={item.awardedIn} fee={item.fee} deadline={item.deadline} description={item.description} text={item.text} link={item.link} />
							))
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;