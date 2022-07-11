import styles from './StacksPayment.module.css';
import CloseIcon from '../public/images/close.svg';
import StacksLogo from '../public/images/stacks-logo.svg';

const StacksConverter = () => {
	return (
		<div>
			<div className={styles.close}>
				<p>
					<CloseIcon />
					Close
				</p>
				<span></span>
			</div>
			<div className={styles.stxPaymentWrapper}>
				<h1>STX Payment Converter</h1>
				<p className={styles.descriptor}>
					A simple widget for verifying the amount of STX you receive for payments. All conversions
					are based on a 7-day trailing average.
				</p>
				<div className={styles.paymentCalculatorWrapper}>
					<div className={styles.dropdownWrapper}>
						<label for="selectCurrency">A. Select Currency (STX or USD)</label>
						<select name="selectCurrency">
							<option value="" disabled selected>
								Drop down...
							</option>
							<option value="stacks">STX</option>
							<option value="usd">USD</option>
						</select>
					</div>
					<div className={styles.dropdownWrapper}>
						<label for="amountReceived">C. Input Amount Received</label>
						<input
							name="amountReceived"
							type="number"
							placeholder="Type here..."
							onWheel={(e) => e.target.blur()}
						/>
					</div>
					<div className={styles.dropdownWrapper}>
						<label for="selectDate">B. Select Date Payment Issued</label>
						<select name="selectDate">
							<option value="" disabled selected>
								Drop down...
							</option>
						</select>
					</div>
					<div className={styles.dropdownWrapper}>
						<button className={styles.converterButton}>Click to Convert</button>
					</div>
					<div className={styles.dropdownWrapper}>
						<div>
							<p>Date Range</p>
							<p>Aug-24-22 to Sept-01-22 </p>
							<p>in 7-day trailing average</p>
						</div>
					</div>
					<div className={styles.dropdownWrapper}>
						<div className={styles.stxAmount}>
							<p>STX</p>
							<p>768.39</p>
							<p>1 STX = 0.4 USD</p>
						</div>
					</div>
					<div className={styles.dropdownWrapper}></div>
					<div className={styles.dropdownWrapper}>
						<button className={styles.clipboardButton}>Copy to clipboard</button>
					</div>
				</div>
			</div>
			<StacksLogo className={styles.stacksSVG} />
		</div>
	);
};

export default StacksConverter;
