import styles from './OkButton.module.css';
import { useState } from 'react';

const UseOkButton = () => {
	const [currentStep, setCurrentStep] = useState(1);

	return {
		currentStep,
		OkButton: (
			<div className={styles.button}>
				<button onClick={() => setCurrentStep(currentStep + 1)}>
					<svg
						width="13"
						height="10"
						viewBox="0 0 13 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11.5 0.999542L4.5 8.99954L1.5 5.99954"
							stroke="white"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					Ok {currentStep}
				</button>
			</div>
		)
	};
};

export default UseOkButton;
