import { useCallback, useState } from 'react';

import styles from './Index.module.css';
import NavHeader from '../components/NavHeader';
import InfoCard from '../components/InfoCard';
import Abstracto_005 from '../public/images/Abstracto_005.svg';
import Abstracto_007 from '../public/images/Abstracto_007.svg';
import Abstracto_008 from '../public/images/Abstracto_008.svg';
import bountiesJson from '../data/bounties.json';

const { openBounties, closedBounties } = bountiesJson.reduce((acc, item) => {
	if (item.isOpen) {
		acc.openBounties.push(item);
	} else {
		acc.closedBounties.push(item);
	}
	return acc;
}, { openBounties: [], closedBounties: [] });

const useHome = () => {
	const [context, setContext] = useState(openBounties.length > 0 ? 'open' : 'closed');

	const handleOpenClick = useCallback(() => {
		setContext('open');
	}, [])

	const handleClosedClick = useCallback(() => {
		setContext('closed');
	}, [])

	const bounties = context === 'open' ? openBounties : closedBounties;

	const showNoOpenBountiesText = bounties.length === 0 && context === 'open';

	return {
		context,
		handleOpenClick,
		handleClosedClick,
		bounties,
		showNoOpenBountiesText
	}
}

const NoOpenBounties = () => {
	return <div className={styles.noOpenBountiesContainer}>
		<p>New Critical Bounties will be available on August 25th, 2023. If you have questions in the meantime, please email <a href = "mailto: grants@stacks.org">grants@stacks.org</a>.</p>
	</div>
}


const Home = () => {
	const { context, handleOpenClick, handleClosedClick, bounties, showNoOpenBountiesText } = useHome();

	const bountyCards = bounties?.map((bounty) => (
		<InfoCard key={bounty.title} title={bounty.title} headingSecondary={bounty.headingSecondary} awardedIn={bounty.awardedIn} fee={bounty.fee} deadline={bounty.deadline} description={bounty.description} text={bounty.text} link={bounty.link} isOpen={bounty.isOpen}/>
	)) ?? null;

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
						<button onClick={handleOpenClick} className={context === 'open' ? styles.active : ''}>Open</button>
						<button onClick={handleClosedClick} className={context === 'closed' ? styles.active : ''}>Closed</button>
					</div>
					<div className={styles.cardsWrapper}>
						{showNoOpenBountiesText && <NoOpenBounties />}
						{bountyCards}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;