import styles from './ProjectPhases.module.css';

const ProjectPhases = () => {
	return (
		<div className={styles.wishlistWrapper}>
			<h1>Project Phases & Payments</h1>
			<div className={styles.firstSection}>
				<div>
					<p>A. Application Phase</p>
					<p>
						Consists of submitting the project application having an Initial Review, successfully
						revising it (if needed), and having the application approved. Initial Review can take
						2-4 weeks.
					</p>
				</div>
				<div>
					<p>B. Onboarding Phase</p>
					<p>
						Consists of successfully completing the ID Verification (by a third-party KYC service)
						and signing the contract via Docusign. This phase can take 1-2 weeks.
					</p>
				</div>
			</div>
			<div className={styles.containerPink}>
				<p>Initial Payment</p>
				<p>Disbursed at the successful conclusion of the Application and Onboarding Phases.</p>
			</div>
			<div className={styles.bluePhase}>
				<p>C. Milestone Phase</p>
				<p>
					Each iteration through this phase consists of submitting a Milestone Deliverable for
					review. Each review can take 1-2 weeks. Milestone Payments are disbursed upon approval.
				</p>
			</div>
			<div className={styles.containerBlue}>
				<p>Milestone Payment(s)</p>
				<p>
					Disbursed at the successful conclusion of each Milestone Phase. Smaller project have zero
					Milestone Phases, while very large projects may have servaral. A chart is provided on the
					next page to guide you on how many to expect.
				</p>
			</div>
			<div className={styles.lastSection}>
				<div>
					<p>D. Final Phase</p>
					<p>
						Consists of submitting your Final Deliverable for review. This review can take 1-2
						weeks. Final Payments are disbursed up approval.
					</p>
				</div>
			</div>
			<div className={styles.containerPurple}>
				<p>Final Payment</p>
				<p>
					If your project is small enough to not require Milestones, you will jump right from
					Initial Payment to Final Payment. For larger projects, you will start this phase after all
					Milestones have been successfully completed.
				</p>
			</div>
		</div>
	);
};

export default ProjectPhases;
