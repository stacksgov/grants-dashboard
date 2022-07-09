import styles from './Steps.module.css';
import Pencil from '../../../public/images/pencil.svg';
import CheckmarkGreen from '../../../public/images/checkmarkGreen.svg';
const Steps = (props) => {
	let currentStep = props.step;
	let setCurrentStep = props.setCurrentStep;

	const Step = (props) => {
		if (parseInt(props.stepNumber) === currentStep) {
			return (
				<span onClick={() => setCurrentStep(props.stepNumber)}>
					<li className={styles.currentStep}>
						<Pencil />
						{props.title}
					</li>
				</span>
			);
		} else if (parseInt(props.stepNumber) < currentStep) {
			return (
				<span onClick={() => setCurrentStep(props.stepNumber)}>
					<li className={styles.currentStepComplete}>
						<CheckmarkGreen />
						{props.title}
					</li>
				</span>
			);
		} else {
			return (
				<span onClick={() => setCurrentStep(props.stepNumber)}>
					<li className={styles.currentStep}>{props.title}</li>
				</span>
			);
		}
	};
	return (
		<div className={styles.stepsWrapper}>
			<ul>
				{props.steps.map((item, index) => {
					let currentIndex = index + 1;
					return <Step stepNumber={currentIndex} title={item} />;
				})}
			</ul>
		</div>
	);
};

export default Steps;
