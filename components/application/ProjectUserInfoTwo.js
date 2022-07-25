import styles from './ProjectUserInfoTwo.module.css';
import Input from '../Input';
import Form from '../Form';

const ProjectUserInfoTwo = () => {
	let style = { display: 'flex', gap: '20px' };

	const Fields = () => {
		return (
			<div>
				<div style={style}>
					<Input
						name="stxAddress"
						label="Stacks Wallet Address *"
						pageWidth="half"
						labelSize="12px"
						paddingBottom="50px"
					/>
					<div className={styles.memo}>
						<Input
							name="stxMemo"
							label="Stacks Wallet Memo *"
							pageWidth="half"
							labelSize="12px"
							paddingBottom="50px"
						/>
						<div
							style={{ color: 'rgba(255, 255, 255, 0.24)', top: '80px' }}
							className={styles.checkboxWrapper}
						>
							<input type="checkbox"></input>
							<label>I confirm no memo is required for the wallet address provided</label>
						</div>
					</div>
				</div>
				<div className={styles.previousGrants}>
					<p>PREVIOUS GRANTS</p>
					<div className={styles.checkboxWrapper}>
						<input type="checkbox"></input>
						<label>
							I have previously completed - or - I am currently working on another Stacks Foundation
							funded grant, residency, etc.
						</label>
					</div>
					<Input
						name="previousGrantGithub"
						label="GitHub Issue"
						labelSize="12px"
						labelColor="rgba(255, 255, 255, 0.24)"
						paddingBottom="50px"
					/>
				</div>
				<div className={styles.previousGrants}>
					<p>OTHER ECOSYSTEM PROGRAMS</p>
					<div className={styles.checkboxWrapper}>
						<input type="checkbox"></input>
						<label>
							I have previously completed - or - I am currently enrolled in - or - I am accepted
							into: Stacks Web3 Startup Lab and/or Stacks Accelerator.
						</label>
					</div>
				</div>
				<Input
					name="previousGrantGithub"
					label="Explain below which program and tell us about your project."
					labelSize="12px"
					labelColor="rgba(255, 255, 255, 0.24)"
					maxChar={300}
					height="100px"
				/>
			</div>
		);
	};
	return (
		<Form
			title="User Information (2 of 2)"
			description="Tell us a bit about yourself."
			fields={Fields}
		/>
	);
};

export default ProjectUserInfoTwo;
