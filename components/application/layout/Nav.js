import styles from './Nav.module.css';
import { IoIosClose } from 'react-icons/io';

const Nav = (props) => {
	return (
		<div className={styles.layoutWrapper}>
			<div>
				<div className={styles.progressBar}>
					<span
						style={{
							background: 'linear-gradient(45deg, #3281cd, #96286f)',
							width: `${props.step * 12.5}%`,
							height: '100%',
							display: 'block'
						}}
					></span>
				</div>
				<p>Application</p>
			</div>

			<div>
				<p>
					<IoIosClose size="25" />
					Close
				</p>
				<span></span>
			</div>
		</div>
	);
};

export default Nav;
