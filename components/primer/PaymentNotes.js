import styles from './PaymentNotes.module.css';

const PaymentNotes = () => {
	return (
		<div className={styles.paymentNotesWrapper}>
			<h1>Payment Notes</h1>
			<p className={styles.subtitle}>
				The notes below reflect some frequently asked questions we receive regarding project
				payments. Please read each note and check the corresponding box.
			</p>
			<ul>
				<li>
					Please note that while the total project budget is requested for in U.S. Dollars ($USD)
					all payments are made in Stacks ($STX).
				</li>
				<li>
					The quantity of $STX disbursed with each payment is calculated using a 7-day trailing
					average from the time each payment is approved.
				</li>
				<li>
					All payments are disbursed at the successful conclusion of each project phase outlined on
					the next page of this application.
				</li>
				<li>
					All payments will be disbursed within 20 days of each successfully completed project
					phase.
				</li>
			</ul>
		</div>
	);
};

export default PaymentNotes;
