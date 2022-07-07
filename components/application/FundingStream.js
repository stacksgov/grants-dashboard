import styles from './FundingStream.module.css';
import PersonIcon from '../../public/images/person.svg';
import TagIcon from '../../public/images/payTag.svg';
import DropIcon from '../../public/images/waterDrop.svg';
import ArrowIcon from '../../public/images/arrow.svg';
import ExternalLinkIcon from '../../public/images/externalLink.svg';

const FundingStream = () => {
	return (
		<div className={styles.fundingStreamWrapper}>
			<h1>Funding Stream & Project Type</h1>
			<p className={styles.subtitle}>
				Select the Project Type below. If you have questions about Project Types, click here.
			</p>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>
							<p>
								<PersonIcon />
								Name
							</p>
						</th>
						<th>
							<p>
								<TagIcon />
								MAX. $
								<ArrowIcon />
							</p>
						</th>
						<th>
							<p>
								<DropIcon />
								FUNDING STREAM
								<ArrowIcon />
							</p>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<input
								id="levelOne"
								type="radio"
								value="Level 1: Open Source Starter Grant"
								name="type"
							/>
						</td>
						<td>
							<label for="levelOne">Level 1: Open Source Starter Grant</label>
						</td>

						<td>
							<span>$5k</span>
						</td>

						<td>
							<span className={styles.developerGrant}>Developer Grants</span>
						</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<input
								id="levelTwo"
								type="radio"
								value="	Level 2: Open Source Builder Grant"
								name="type"
							/>
						</td>
						<td>
							<label for="levelTwo">Level 2: Open Source Builder Grant</label>
						</td>
						<td>
							<span>$50k</span>
						</td>
						<td>
							<span className={styles.developerGrant}>Developer Grants</span>
						</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<input
								id="levelThree"
								type="radio"
								value="Level 3: Open Source MVP Grant"
								name="type"
							/>
						</td>
						<td>
							<label for="levelThree">Level 3: Open Source MVP Grant</label>
						</td>
						<td>
							<span>$250k</span>
						</td>
						<td>
							<span className={styles.communityGrant}>Community Grants</span>
						</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<input
								id="community"
								type="radio"
								value="Stacks Community Builder Grant"
								name="type"
							/>
						</td>
						<td>
							<label for="community">Stacks Community Builder Grant</label>
						</td>
						<td>
							<span>Varies</span>
						</td>
						<td>
							<span className={styles.communityGrant}>Community Grants</span>
						</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<input id="education" type="radio" value="Stacks Education Grant" name="type" />
						</td>
						<td>
							<label for="education">Stacks Education Grant</label>
						</td>
						<td>
							<span>Varies</span>
						</td>
						<td>
							<span className={styles.communityGrant}>Community Grants</span>
						</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<input id="event" type="radio" value="	Stacks Event Grant" name="type" />
						</td>
						<td>
							<label for="event">Stacks Event Grant</label>
						</td>
						<td>
							<span>5k</span>
						</td>
						<td>
							<span className={styles.communityGrant}>Community Grants</span>
						</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<input
								id="chapter"
								type="radio"
								value="	Stacks Chapter Grant (by Region)"
								name="type"
							/>
						</td>
						<td>
							<label for="chapter">Stacks Chapter Grant (by Region)</label>
						</td>
						<td>
							<span>Varies</span>
						</td>
						<td>
							<span className={styles.ecosystemPartnerGrant}>Ecosystem Partner Grant</span>
						</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<input id="alex" type="radio" value="ALEX (DeFi) Grant" name="type" />
						</td>
						<td>
							<label for="alex">ALEX (DeFi) Grant</label>
						</td>
						<td>
							<span>Varies</span>
						</td>
						<td>
							<span className={styles.advancedSupport}>Advanced Support</span>
						</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<input
								id="resident"
								type="radio"
								value="Stacks Foundation Direct Investment"
								name="type"
							/>
						</td>
						<td>
							<label for="resident"> Stacks Foundation Direct Investment</label>
						</td>
						<td>
							<span>Varies</span>
						</td>
						<td>
							<span className={styles.advancedSupport}>Advanced Support</span>
						</td>
						<td></td>
					</tr>

					<tr>
						<td></td>
						<td>
							<p>Stacks Web3 Startup Lab</p>
						</td>
						<td>
							<span>Varies</span>
						</td>
						<td>
							<span className={styles.affiliatedOrganization}>Affiliated Organization</span>
						</td>
						<td>
							<ExternalLinkIcon />
						</td>
					</tr>
					<tr>
						<td></td>
						<td>
							<p>Stacks Accelerator</p>
						</td>
						<td>
							<span>Varies</span>
						</td>
						<td>
							<span className={styles.affiliatedOrganization}>Affiliated Organization</span>
						</td>
						<td>
							<ExternalLinkIcon />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default FundingStream;
