import styles from './Primer.module.css';
import Nav from '../components/application/layout/Nav';
import Steps from '../components/application/layout/Steps';
import StacksLogo from '../public/images/stacks-logo.svg';
import FundingStreams from '../components/primer/FundingStreams';
import Wishlist from '../components/primer/Wishlist';
import ProjectPhases from '../components/primer/ProjectPhases';
import PaymentQuantity from '../components/primer/PaymentQuantity';
import PaymentNotes from '../components/primer/PaymentNotes';
import Applicant from '../components/primer/Applicant';
import ApplicationRules from '../components/primer/ApplicationRules';
import PerfectApplication from '../components/primer/PerfectApplication';
import Checkmark from '../public/images/checkmark.svg';
import { useState } from 'react';

const Primer = () => {
	const [currentStep, setCurrentStep] = useState(1);

	function handleSubmit() {
		if (currentStep < 8) {
			setCurrentStep(currentStep + 1);
		}
	}

	const CurrentStep = () => {
		switch (currentStep) {
			case 1:
				return <FundingStreams />;
			case 2:
				return <Wishlist />;
			case 3:
				return <ProjectPhases />;
			case 4:
				return <PaymentQuantity />;
			case 5:
				return <PaymentNotes />;
			case 6:
				return <Applicant />;
			case 7:
				return <ApplicationRules />;
			case 8:
				return <PerfectApplication />;
		}
	};
	return (
		<div className={styles.applicationWrapper}>
			<Nav step={currentStep} name={'Primer'} />
			<div className={styles.mainComponents}>
				<div className={styles.middleComponent}>
					<Steps
						setCurrentStep={setCurrentStep}
						step={currentStep}
						steps={[
							'Funding Streams & Project Types',
							'Wishlist Projects',
							'Project Phases & Deliverables',
							'Payment Quantity & Sizing',
							'Payment Notes',
							'Applicant (aka Project Lead)',
							'Application Do’s & Do Not’s',
							'The Perfect Application'
						]}
					/>
				</div>
				<div className={styles.currentStep}>
					<CurrentStep />
				</div>
				{/* <div>{OkButton}</div> */}
				<div className={styles.button}>
					<button onClick={handleSubmit}>
						<Checkmark />
						{currentStep <= 8 ? <p>Ok</p> : <p>Submit Application</p>}
					</button>
				</div>
			</div>
			<StacksLogo className={styles.stacksSVG} />
		</div>
	);
};

export default Primer;
