import styles from './PerfectApplication.module.css';

const PerfectApplication = () => {
	return (
		<div className={styles.perfectApplicationWrapper}>
			<h1>The Perfect Application</h1>
			<p className={styles.subtitle}>
				Before submitting your application, we encourage you to ask yourself the following
				questions:
			</p>
			<ul>
				<li>Does the proposed work more us towards a more user-owned internet?</li>
				<li>Does the proposed work accelerate a broader adoption of Stacks technology?</li>
				<li>
					Does the proposed work unlock immidiate and widespread value for the Stacks community?
				</li>
				<li>
					Does the proposed work unlock immidiate and widespread value for the Stacks community?
				</li>
				<li>
					Does the proposed work yield new & novel: code, technology, and/or culture on Stacks?
				</li>
				<li>Does your application have a crystal-clear scope, objective, and audience?</li>
				<li>Does your application have a crystal-clear and measureable definition of success?</li>
				<li>
					Does your application have any red flags? Have you identified any possible risks for us
					and helped us understand how you plan to overcome those risks? The risks could be related
					to team, security, technological dependencies, and/or market readiness.
				</li>
			</ul>
		</div>
	);
};

export default PerfectApplication;
