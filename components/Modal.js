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
			{title.toLowerCase() === 'success' || title.toLowerCase() === 'important' ? (
				<StacksLogoSuccess className={styles.stacksLogo} />
			) : (
				<StacksLogoError className={styles.stacksLogo} />
			)}
			<p
				className={
					title.toLowerCase() === 'success' || title.toLowerCase() === 'important'
						? styles.titleSuccess
						: styles.titleError
				}
			>
				{title}
			</p>
			<p>{subParagraphOne}</p>
			{subParagraphTwo && <p>{subParagraphTwo}</p>}
			{link && <p>Click below to view on Github</p>}
			{title.toLowerCase() != 'important' ? (
				<a href={link} target="_blank" rel="external noopener noreferrer">
					{' '}
					<button
						onClick={() => {
							setHide(false);
						}}
					>
						{title === 'Important' ? 'Dismiss' : 'Confirm'}
					</button>
				</a>
			) : (
				<button
					onClick={() => {
						setHide(false);
					}}
				>
					{title === 'Important' ? 'Dismiss' : 'Confirm'}
				</button>
			)}
		</div>
	);
};

export default Modal;
