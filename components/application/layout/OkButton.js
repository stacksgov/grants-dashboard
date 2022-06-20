import styles from './OkButton.module.css';

const OkButton = () => {
	return (
		<div className={styles.button}>
			<button>
				<svg
					width="13"
					height="10"
					viewBox="0 0 13 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11.5 0.999542L4.5 8.99954L1.5 5.99954"
						stroke="white"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				Ok
			</button>
		</div>
	);
};

export default OkButton;
