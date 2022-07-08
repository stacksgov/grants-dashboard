import styles from './ProjectTrack.module.css';
import Link from 'next/link';

const ProjectTrack = ({ props: { formData, handleChange } }) => {
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
					<input onChange={handleChange} type="radio" value="Stacks Protocol" name="projectTrack" />
					<label>Stacks Protocol</label>
					<ul>
						<li>Blockchain Improvements, AppChains, HyperChains, Nodes, Mining, etc</li>
					</ul>
				</div>

				<div className={styles.tracks}>
					<input
						onChange={handleChange}
						type="radio"
						value="Stacks Interface"
						name="projectTrack"
					/>
					<label>Stacks Interface</label>
					<ul>
						<li>APIs, Indexers, Decentralized Identification, Wallets, Explorers, etc.</li>
					</ul>
				</div>

				<div className={styles.tracks}>
					<input
						onChange={handleChange}
						type="radio"
						value="Stacks dApps & Clarity"
						name="projectTrack"
					/>

					<label>Stacks dApps & Clarity</label>
					<ul>
						<li>Clarity Improvements, SIP Development, Smart Contract Templates, dApps, etc.</li>
					</ul>
				</div>
				<div className={styles.tracks}>
					<input
						onChange={handleChange}
						type="radio"
						value="Stacks Education & Community"
						name="projectTrack"
					/>
					<label>Stacks Education & Community</label>
					<ul>
						<li>
							Documentation, Tutorials, Workshops, Governance, Education, Content Creation, etc.
						</li>
					</ul>
				</div>
				<div className={styles.tracks}>
					<input
						onChange={handleChange}
						type="radio"
						value="Stacks Developer Experience"
						name="projectTrack"
					/>
					<label>Stacks Developer Experience</label>
					<ul>
						<li>Tooling, Software Development Kits, Libraries, Faucets, Sandboxes, etc.</li>
					</ul>
				</div>

				<div className={styles.tracks}>
					<input
						onChange={handleChange}
						type="radio"
						value="Stacks User Experience"
						name="projectTrack"
					/>
					<label>Stacks User Experience</label>
					<ul>
						<li>
							UX/UI Research, Speculative Design Studies, Prototypes, Component Libraries, etc
						</li>
					</ul>
				</div>

				<div className={styles.tracks}>
					<input
						onChange={handleChange}
						type="radio"
						value="Stacks User Experience"
						name="projectTrack"
					/>
					<label>Cross-Chain & Off-Chain</label>
					<ul>
						<li>Decentralized Storage Integrations, Oracles & Bridges, EVM Integrations, etc.</li>
					</ul>
				</div>

				<div className={styles.tracks}>
					<input
						onChange={handleChange}
						type="radio"
						value="Bitcoin Utility via Stacks"
						name="projectTrack"
					/>
					<label>Bitcoin Utility via Stacks</label>
					<ul>
						<li>DLC-Clarity Explorations, BTC-STX Wallets</li>
						<li>BTC-Native DeFi (using Stacks), etc.</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProjectTrack;
