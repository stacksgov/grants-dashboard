import styles from './MissionStatement.module.css';
import { useState } from 'react';
const MissionStatement = ({ updateIssue }) => {
	const [inputText, setInputText] = useState('');
	const characterCount = inputText.length;
	const handleChange = (event) => {
		setInputText(event.target.value);
	};
	return (
		<div className={styles.missionStatementWrapper}>
			<h1>Project Mission Statement</h1>
			<p className={styles.subtitle}>
				What is the mission of your project and why should the Stacks Community support it?
			</p>
			<div className={styles.sectionWrapper}>
				<div>
					<textarea type="text" id="mission" placeholder="Type Here..." onChange={handleChange} />
					<div className={styles.progressBarWrapper}>
						<p>{characterCount} Characters</p>
						<div className={styles.progressBar}>
							<span
								style={{
									background: '#718096',
									width: `${characterCount * 1}%`,
									height: '100%',
									display: 'block'
								}}
							></span>
						</div>
					</div>
				</div>
				<div>
					<h2>Questions worth considering:</h2>
					<ul>
						<li>What is the key problem you are hoping to address with your Project?</li>
						<li>How will you measure the success of your Project?</li>
						<li>
							How will your Project provide an immediate and widespread benefit to the broader
							Stacks Ecosystem?
						</li>
						<li>
							How will your Project advance the mission of a user-owned internet powered by Stacks
							and secured by Bitcoin?
						</li>
						<li>
							What are the risks associate with your project and how do you intend to overcome them?
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MissionStatement;
