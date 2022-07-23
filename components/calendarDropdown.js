import Calendar from 'react-calendar';
import styles from './CalendarDropDown.module.css';
import DropdownIcon from '../public/images/dropdown.svg';
import { useState, useEffect } from 'react';
const CalendarDropdown = (props) => {
	const [show, setShow] = useState(true);
	useEffect(() => {
		setShow(true);
	}, [props.value]);
	return (
		<div>
			<button
				className={styles.calendarDropdownButton}
				onClick={() => {
					setShow(!show);
				}}
			>
				<p>Drop down...</p>
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
