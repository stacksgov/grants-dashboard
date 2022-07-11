import styles from './StacksPayment.module.css';
import CloseIcon from '../public/images/close.svg';
import StacksLogo from '../public/images/stacks-logo.svg';
import DropdownIcon from '../public/images/dropdown.svg';
import Calendar from 'react-calendar';
import { useState } from 'react';

const StacksConverter = () => {
	const [value, onChange] = useState(new Date());
	const [show, setShow] = useState(false);
	// let pastSevenDays = value.getDate() - 7;
	let pastSevenDays = new Date(new Date().setDate(value.getDate() - 7));
	const copyAmount = () => {
		let copyText = document.getElementById('stxNumber').innerText;
		console.log(copyText);
		navigator.clipboard.writeText(copyText);
	};
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
					<div className={styles.calendarDropdownWrapper}>
						<h2 for="selectDate">B. Select Date Payment Issued</h2>
						{console.log(show)}
						<button
							onClick={() => {
								setShow(!show);
							}}
						>
							<p>Drop Down...</p>
							<DropdownIcon />
						</button>
						<div>
							<Calendar
								className={show ? styles.show : styles.hide}
								onChange={onChange}
								value={value}
							/>
						</div>
					</div>
					<div className={styles.dropdownWrapper}>
						<button className={styles.converterButton}>Click to Convert</button>
					</div>
					<div className={styles.dropdownWrapper}>
						<div>
							<p>Date Range</p>
							<p>
								{pastSevenDays
									.toLocaleString('default', {
										month: 'long',
										day: '2-digit',
										year: '2-digit'
									})
									.replace(' ', '-')
									.replace(',', '-')
									.replace(' ', '')}
								{` to `}
								{value
									.toLocaleString('default', {
										month: 'long',
										day: '2-digit',
										year: '2-digit'
									})
									.replace(' ', '-')
									.replace(',', '-')
									.replace(' ', '')}
							</p>
							<p>in 7-day trailing average</p>
						</div>
					</div>
					<div className={styles.dropdownWrapper}>
						<div className={styles.stxAmount}>
							<p>STX</p>
							<p id="stxNumber">768.40</p>
							<p>1 STX = 0.4 USD</p>
						</div>
					</div>
					<div className={styles.dropdownWrapper}></div>
					<div className={styles.dropdownWrapper}>
						<button className={styles.clipboardButton} onClick={copyAmount}>
							Copy to clipboard
						</button>
					</div>
				</div>
			</div>
			<StacksLogo className={styles.stacksSVG} />
		</div>
	);
};

export default StacksConverter;
