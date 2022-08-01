import Calendar from 'react-calendar';
import styles from './CalendarDropDown.module.css';
import DropdownIcon from '../public/images/dropdown.svg';
import { useState, useEffect, useRef } from 'react';
const CalendarDropdown = (props) => {
	const [show, setShow] = useState(true);
	const ref = useRef(false);
	useEffect(() => {
		setShow(true);
	}, [props.value]);

	return (
		<div>
			<button
				className={styles.calendarDropdownButton}
				onClick={() => {
					setShow(!show);
					ref.current = true;
				}}
			>
				<p>
					{ref.current === true
						? props.value
								.toLocaleString('default', {
									month: 'long',
									day: '2-digit',
									year: '2-digit'
								})
								.replace(' ', '-')
								.replace(',', '-')
								.replace(' ', '')
						: 'Drop down...'}
				</p>
				<DropdownIcon />
			</button>
			<div>
				<Calendar
					className={show ? styles.hide : styles.show}
					onChange={props.onChange}
					value={props.value}
				/>
			</div>
		</div>
	);
};

export default CalendarDropdown;
