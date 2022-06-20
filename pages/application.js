import styles from './Application.module.css';
import Nav from '../components/application/Nav';
import Image from 'next/image';
import StacksLogo from '../public/images/stacks-logo.svg';

const Application = () => {
	return (
		<div className={styles.applicationWrapper}>
			<Nav />
			<div className={styles.mainComponents}>
				<div>Sidebar</div>
				<div>Component</div>
				<div>Sidebar</div>
			</div>
			<StacksLogo className={styles.stacksSVG} />
		</div>
	);
};

export default Application;
