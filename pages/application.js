import styles from './Application.module.css';
import Nav from '../components/application/layout/Nav';
import Steps from '../components/application/layout/Steps';
import StacksLogo from '../public/images/stacks-logo.svg';
import OkButton from '../components/application/layout/OkButton';
// import Wishlist from '../components/application/Wishlist';
// import FundingStream from '../components/application/FundingStream';
// import ProjectTrack from '../components/application/ProjectTrack';
import ProjectTags from '../components/application/ProjectTags';

const Application = () => {
	return (
		<div className={styles.applicationWrapper}>
			<Nav />
			<div className={styles.mainComponents}>
				<div className={styles.middleComponent}>
					<Steps />
				</div>
				<div>
					{/* <Wishlist /> */}
					{/* <FundingStream /> */}
					{/* <ProjectTrack /> */}
					<ProjectTags />
				</div>
				<div>
					<OkButton />
				</div>
			</div>
			<StacksLogo className={styles.stacksSVG} />
		</div>
	);
};

export default Application;
