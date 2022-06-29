import styles from './Application.module.css';
import Nav from '../components/application/layout/Nav';
import Steps from '../components/application/layout/Steps';
import StacksLogo from '../public/images/stacks-logo.svg';
import UseOkButton from '../components/application/layout/OkButton';
import Wishlist from '../components/application/Wishlist';
import FundingStream from '../components/application/FundingStream';
import ProjectTrack from '../components/application/ProjectTrack';
import ProjectTags from '../components/application/ProjectTags';
import ProjectInformation from '../components/application/ProjectInformation';
import ProjectRoadmap from '../components/application/ProjectRoadmap';
import MissionStatement from '../components/application/MissionStatement';
import ProjectLinks from '../components/application/ProjectLinks';
import Success from '../components/application/Success';

const Application = () => {
	const { OkButton, currentStep } = UseOkButton();

	const CurrentStep = () => {
		switch (currentStep) {
			case 1:
				return <Wishlist />;
			case 2:
				return <FundingStream />;
			case 3:
				return <ProjectTrack />;

			case 4:
				return <ProjectTags />;

			case 5:
				return <ProjectInformation />;

			case 6:
				return <ProjectRoadmap />;

			case 7:
				return <MissionStatement />;

			case 8:
				return <ProjectLinks />;

			case 9:
				return <Success />;

			default:
				return <FundingStream />;
		}
	};

	return (
		<div className={styles.applicationWrapper}>
			<Nav step={currentStep} />
			<div className={styles.mainComponents}>
				<div className={styles.middleComponent}>
					<Steps step={currentStep} />
				</div>
				<div>
					<CurrentStep />
				</div>
				<div>{OkButton}</div>
			</div>
			<StacksLogo className={styles.stacksSVG} />
		</div>
	);
};

export default Application;
