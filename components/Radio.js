import styles from './Radio.module.css';

const Radio = (props) => {
	const { name, value, id = name, disabled = false } = props;
	return (
		<div style={disabled ? { opacity: '0.5' } : {}} className={styles.radioWrapper}>
			<input
				style={disabled ? { backgroundColor: 'black', borderWidth: '6px' } : {}}
				disabled={disabled}
				id={id}
				type="radio"
				name={name}
				value={value}
			/>
			<label>{value}</label>
		</div>
	);
};

export default Radio;
