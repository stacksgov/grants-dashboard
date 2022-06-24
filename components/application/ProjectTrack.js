import styles from './ProjectTrack.module.css';
import Link from 'next/link';

const ProjectTrack = () => {
	return (
		<div className={styles.projectTrackWrapper}>
			<h1>Project Track</h1>
			<p className={styles.subtitle}>
				Select the Project Type below. If you have questions about Project Types, click{' '}
				<Link href="/">
					<a>here</a>
				</Link>
				.
			</p>

			<div className={styles.tracksWrapper}>
				<div className={styles.tracks}>
					<input id="stacksProtocol" type="checkbox" />
					<label>Stacks Protocol</label>
					<ul>
						<li>Blockchain Explorations & Improvements</li>
						<li>AppChain Explorations and Improvements</li>
						<li>API Explorations and Improvements</li>
						<li>Node Deployment and Decentralization</li>
						<li>Stacks Mining</li>
						<li>Other</li>
					</ul>
				</div>

				<div className={styles.tracks}>
					<input id="stacksInterface" type="checkbox" />
					<label for="stacksInterface">Stacks Interface</label>
					<ul>
						<li>Decentralized Identification</li>
						<li>HyperChain Explorations and Improvements</li>
						<li>Browser Extension & Mobile App Explorations</li>
						<li>IoT Explorations</li>
						<li>Wallets</li>
						<li>On-Chain Analytics & Explorers</li>
					</ul>
				</div>

				<div className={styles.tracks}>
					<input id="stacksDapps" type="checkbox" />
					<label for="stacksDapps">Stacks dApps & Clarity</label>
					<ul>
						<li> Clarity Improvements</li>
						<li>SIP Development</li>
						<li>Smart Contract Templates</li>
						<li>DeFi / DAO / NFT / Gaming dApps</li>
						<li>Supply Chain & Smart City dApps</li>
						<li>Other</li>
					</ul>
				</div>
				<div className={styles.tracks}>
					<input id="stacksEducation" type="checkbox" />
					<label for="stacksEducation">Stacks Education & Community</label>
					<ul>
						<li>Tutorials and Documentation</li>
						<li>Videos and Workshops</li>
						<li>Governance Initiatives</li>
						<li>Education Initiatives</li>
						<li>Marketing Initiatives</li>
						<li>Other</li>
					</ul>
				</div>
				<div className={styles.tracks}>
					<input id="stacksDX" type="checkbox" />
					<label for="stacksDX">Stacks Developer Experience</label>
					<ul>
						<li>Blockchain Explorations & Improvements</li>
						<li>AppChain Explorations and Improvements</li>
						<li>API Explorations and Improvements</li>
						<li>Node Deployment and Decentralization</li>
						<li>Stacks Mining</li>
						<li>Other</li>
					</ul>
				</div>

				<div className={styles.tracks}>
					<input id="stacksUX" type="checkbox" />
					<label for="stacksUX">Stacks User Experience</label>
					<ul>
						<li> UX/UI Research</li>
						<li>Speculative Design Case Studies</li>
						<li>Prototype Design</li>
						<li>Design Systems</li>
						<li>Frontend Component Libraries</li>
						<li>Other</li>
					</ul>
				</div>

				<div className={styles.tracks}>
					<input id="crossChain" type="checkbox" />
					<label for="crossChain">Cross-Chain & Off-Chain</label>
					<ul>
						<li>Gaia Improvements</li>
						<li>Decentralized Storage Integrations</li>
						<li>Oracles & Bridges</li>
						<li>EVM / ENS Integrations</li>
						<li>Fiat On- and Fiat Off-Ramps</li>
						<li>Other</li>
					</ul>
				</div>

				<div className={styles.tracks}>
					<input id="btcUtility" type="checkbox" />
					<label for="btcUtility">Stacks Protocol</label>
					<ul>
						<li>DLC-Clarity Explorations</li>
						<li>BTC-STX Wallets</li>
						<li>BTC-Native Stacks Transactions</li>
						<li>BTC-Native DeFi (using Stacks)</li>
						<li>BTC/STX On-Chain Analysis Tools</li>
						<li>Other</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProjectTrack;
