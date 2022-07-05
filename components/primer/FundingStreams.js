import styles from './FundingStreams.module.css';

const FundingStreams = () => {
	return (
		<div className={styles.fundingStreamWrapper}>
			<h1>Funding Streams & Project Types</h1>
			<p className={styles.subtitle}>
				The most common form of support the Stacks Foundation provides is Development Grants.
				However, this is just one form of support. There are several other Types or Levels. Each
				belonging to a Funding Stream.
			</p>
			<table>
				<thead>
					<tr>
						<th>FUNDING STREAM</th>
						<th># TYPES / LEVELS</th>
						<th>FOCUS</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Developer Grants</td>
						<td>3 (levels)</td>
						<td>Open Source Technology</td>
					</tr>
					<tr>
						<td>Developer Grants</td>
						<td>3 (levels)</td>
						<td>Open Source Technology</td>
					</tr>
					<tr>
						<td>Developer Grants</td>
						<td>3 (levels)</td>
						<td>Open Source Technology</td>
					</tr>
					<tr>
						<td>Developer Grants</td>
						<td>3 (levels)</td>
						<td>Open Source Technology</td>
					</tr>
				</tbody>
			</table>
			<p className={styles.furtherDescription}>
				Please note every project Type or Level can be applied for as a Wishlist Project. See next
				page for more details!
			</p>
		</div>
	);
};

export default FundingStreams;
