import styles from './Steps.module.css';

const Steps = (props) => {
	return (
		<div className={styles.stepsWrapper}>
			<ul>
				<span>
					<li className={styles.currentStep}>
						<svg
							width="10"
							height="10"
							viewBox="0 0 10 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.53429 0.93515L2.03906 7.44491L1.5 8.4996L2.55445 7.96054L9.06445 1.46531L8.53429 0.93515Z"
								stroke="#805AD5"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						Wishlist Project {props.step}
					</li>
				</span>
				<span>
					<li>Funding Stream & Project Type </li>
				</span>
				<span>
					<li>Project Track</li>
				</span>
				<span>
					<li>Project Tags</li>
				</span>
				<span>
					<li>Project Information</li>
				</span>
				<span>
					<li>Project Roadmap</li>
				</span>
				<span>
					<li>Project Mission Statement</li>
				</span>
				<span>
					<li>Project Links</li>
				</span>
			</ul>
		</div>
	);
};

export default Steps;
