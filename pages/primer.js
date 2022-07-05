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
import ConnectGithub from '../components/application/ConnectGithub';
import PerfectApplication from '../components/primer/PerfectApplication';
const Primer = () => {
	const { OkButton, currentStep } = UseOkButton();

	// const CurrentStep = () => {
	// 	switch (currentStep) {
	// 		case 1:
	// 			return <Wishlist />;
	// 		// return <ConnectGithub />;
	// 		case 2:
	// 			return <FundingStream />;
	// 		case 3:
	// 			return <ProjectTrack />;

	// 		case 4:
	// 			return <ProjectTags />;
	// 		case 5:
	// 			return <ProjectInformation />;

	// 		case 6:
	// 			return <ProjectRoadmap />;

	// 		case 7:
	// 			return <MissionStatement />;

	// 		case 8:
	// 			return <ProjectLinks />;

	// 		case 9:
	// 			return <Success />;
	// 	}
	// };

	return (
		<div className={styles.applicationWrapper}>
			<Nav step={currentStep} name={'Primer'} />
			<div className={styles.mainComponents}>
				<div className={styles.middleComponent}>
					<Steps step={currentStep} />
				</div>
				<div>
					{/* <FundingStreams /> */}
					{/* <Wishlist /> */}
					{/* <ProjectPhases /> */}
					{/* <PaymentQuantity /> */}
					{/* <PaymentNotes /> */}
					{/* <Applicant /> */}
					{/* <ApplicationRules /> */}
					<PerfectApplication />
				</div>
				<div>{OkButton}</div>
			</div>
			<StacksLogo className={styles.stacksSVG} />
		</div>
	);
};

export default Primer;
