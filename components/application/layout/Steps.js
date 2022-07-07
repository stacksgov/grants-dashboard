import styles from './Steps.module.css';
import Pencil from '../../../public/images/pencil.svg';
import CheckmarkGreen from '../../../public/images/checkmarkGreen.svg';
const Steps = (props) => {
	let currentStep = props.step;

	const Step = (props) => {
		if (parseInt(props.stepNumber) === currentStep) {
			return (
				<span>
					<li className={styles.currentStep}>
						<Pencil />
						{props.title}
					</li>
				</span>
			);
		} else if (parseInt(props.stepNumber) < currentStep) {
			return (
				<span>
					<li className={styles.currentStepComplete}>
						<CheckmarkGreen />
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
