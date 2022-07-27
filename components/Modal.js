import styles from './Modal.module.css';
import StacksLogoSuccess from '../public/images/stacksModalLogoSuccess.svg';
import StacksLogoError from '../public/images/stacksModalLogoError.svg';
import Link from 'next/link';
import { useState } from 'react';

const Modal = (props) => {
	const { title, subParagraphOne, subParagraphTwo, link } = props;
	const [hide, setHide] = useState(true);
	return (
		<div className={hide ? styles.modalWrapper : styles.modalWrapperHide}>
			{title.toLowerCase() === 'success' ? (
				<StacksLogoSuccess className={styles.stacksLogo} />
			) : (
				<StacksLogoError className={styles.stacksLogo} />
			)}

			<p className={title.toLowerCase() === 'success' ? styles.titleSuccess : styles.titleError}>
				{title}
			</p>
			<p>{subParagraphOne}</p>
			{subParagraphTwo && <p>{subParagraphTwo}</p>}
			{link && (
				<a href={link}>
					<p>Click below to view on Github</p>
				</a>
			)}
			<Link href="/">
				<a>
					{' '}
					<button
						onClick={() => {
							setHide(false);
						}}
					>
						Confirm
					</button>
				</a>
			</Link>
		</div>
	);
};

export default Modal;
