import styles from './Primer.module.css';
import Nav from '../components/application/layout/Nav';
import Steps from '../components/application/layout/Steps';
import StacksLogo from '../public/images/stacks-logo.svg';
import UseOkButton from '../components/application/layout/OkButton';
import FundingStreams from '../components/primer/FundingStreams';
import Wishlist from '../components/primer/Wishlist';
import ProjectPhases from '../components/primer/ProjectPhases';
import PaymentQuantity from '../components/primer/PaymentQuantity';
import PaymentNotes from '../components/primer/PaymentNotes';
import Applicant from '../components/primer/Applicant';
import ApplicationRules from '../components/primer/ApplicationRules';
import PerfectApplication from '../components/primer/PerfectApplication';

const Primer = () => {
	const { OkButton, currentStep } = UseOkButton();

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
				<div>{OkButton}</div>
			</div>
			<StacksLogo className={styles.stacksSVG} />
		</div>
	);
};

export default Primer;
