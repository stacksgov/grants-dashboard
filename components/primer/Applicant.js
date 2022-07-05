import styles from './Applicant.module.css';

const Applicant = () => {
	return (
		<div className={styles.applicantWrapper}>
			<h1>Applicant (aka Project Lead)</h1>
			<p className={styles.subtitle}>
				When you submit an application, you are considered the applicant or Project Lead. Before you
				submit, its worth better understanding the responsiblities that come with that role:
			</p>
			<ul>
				<li>
					While a project may have several project team members, a project can only have one project
					lead.
				</li>
				<li>
					The Project Lead will need to verify their identity (using a third party KYC service) and
					sign a contract.
				</li>
				<li>
					The Project Lead will need to provide tax documentation in the form of a completed 1099,
					and/or 8ben, fw8ben depending on their home domicile.
				</li>
				<li>
					The STX wallet address and memo the Project Lead provides when Onboarding will be
					associated with the contract and cannot be changed. Additionally, this address will be the
					sole wallet to receive funds for the project.
				</li>
			</ul>
		</div>
	);
};

export default Applicant;
