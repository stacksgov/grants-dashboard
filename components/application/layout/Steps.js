import styles from './Steps.module.css';

const Steps = (props) => {
	let currentStep = props.step;

	const Step = (props) => {
		if (parseInt(props.stepNumber) === currentStep) {
			return (
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
						{props.title}
					</li>
				</span>
			);
		} else if (parseInt(props.stepNumber) < currentStep) {
			return (
				<span>
					<li className={styles.currentStepComplete}>
						<svg
							width="10"
							height="8"
							viewBox="0 0 10 8"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.75 0.999634L3.5 6.99963L1.25 4.74963"
								stroke="#68D391"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						{props.title}
					</li>
				</span>
			);
		} else {
			return (
				<span>
					<li className={styles.currentStep}>{props.title}</li>
				</span>
			);
		}
	};
	return (
		<div className={styles.stepsWrapper}>
			<ul>
				{props.steps.map((item, index) => {
					return <Step stepNumber={index + 1} title={item} />;
				})}
			</ul>
		</div>
	);
};

export default Steps;
