import styles from './PaymentQuantity.module.css';

const PaymentQuantity = () => {
	return (
		<div className={styles.fundingStreamWrapper}>
			<h1>Payment Quantity & Sizing</h1>
			<p className={styles.subtitle}>
				The chart below states the number of payments and the percentage of the total project budget
				issued for each payment. These numbers are a function of the total project budget.
			</p>
			<table>
				<thead>
					<tr>
						<th>PROJECT BUDGET</th>
						<th>NUMBER OF PAYMENTS</th>
						<th>% OF BUDGET PER PAYMENT</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>$0 to $9,999</td>
						<td>2 (zero milestones)</td>
						<td>50%</td>
					</tr>
					<tr>
						<td>$10k to $24,999</td>
						<td>3 (1 milestone)</td>
						<td>33%</td>
					</tr>
					<tr>
						<td>$25k to $59,999</td>
						<td>4 (2 milestones)</td>
						<td>25%</td>
					</tr>
					<tr>
						<td>$60k to $99,999</td>
						<td>5 (3 milestones)</td>
						<td>20%</td>
					</tr>
					<tr>
						<td>$100k to $149,999</td>
						<td>6 (4 milestones)</td>
						<td>17%</td>
					</tr>
					<tr>
						<td>$150k to $250k</td>
						<td>8 (6 milestones)</td>
						<td>12.5%</td>
					</tr>
				</tbody>
			</table>
			<p className={styles.furtherDescription}>
				Please note support for some types of projects may deviate from the chart above, including,
				but not limited to Stacks Chapters, Stacks Foundation Residents, and Stacks Foundation
				Direct Investments.
			</p>
		</div>
	);
};

export default PaymentQuantity;
