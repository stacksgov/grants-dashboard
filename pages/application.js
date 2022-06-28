import styles from './Application.module.css';
import Nav from '../components/application/layout/Nav';
import Steps from '../components/application/layout/Steps';
import StacksLogo from '../public/images/stacks-logo.svg';
import UseOkButton from '../components/application/layout/OkButton';
import Wishlist from '../components/application/Wishlist';
// import FundingStream from '../components/application/FundingStream';
// import ProjectTrack from '../components/application/ProjectTrack';
// import ProjectTags from '../components/application/ProjectTags';
// import ProjectInformation from '../components/application/ProjectInformation';
// import ProjectRoadmap from '../components/application/ProjectRoadmap';
// import MissionStatement from '../components/application/MissionStatement';
// import ProjectLinks from '../components/application/ProjectLinks';
// import Success from '../components/application/Success';

const Application = () => {
	const { OkButton, currentStep } = UseOkButton();
	return (
		<div className={styles.applicationWrapper}>
			<Nav />
			<div className={styles.mainComponents}>
				<div className={styles.middleComponent}>
					<Steps step={currentStep} />
				</div>
				<div>
					<Wishlist />
					{/* <FundingStream /> */}
					{/* <ProjectTrack /> */}
					{/* <ProjectTags /> */}
					{/* <ProjectInformation /> */}
					{/* <ProjectRoadmap /> */}
					{/* <MissionStatement /> */}
					{/* <ProjectLinks /> */}
					{/* <Success /> */}
				</div>
				<div>{OkButton}</div>
			</div>
			<StacksLogo className={styles.stacksSVG} />
		</div>
	);
};

export default Application;
