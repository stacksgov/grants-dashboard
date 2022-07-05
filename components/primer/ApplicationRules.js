import styles from './ApplicationRules.module.css';

const ApplicationRules = () => {
	return (
		<div className={styles.applicationRulesWrapper}>
			<h1>Application Do’s & Do Not’s</h1>
			<p className={styles.subtitle}>
				Following these rules of thumb can help streamline your review process and increase your
				odds of approval.
			</p>
			<h2>Do</h2>
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
			</ul>
			<h2>Do Not</h2>
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
			</ul>
		</div>
	);
};

export default ApplicationRules;
