import styles from './Wishlist.module.css';

const Wishlist = () => {
	return (
		<div className={styles.wishlistWrapper}>
			<h1>Funding Streams & Project Types</h1>
			<p className={styles.subtitle}>
				The most common form of support the Stacks Foundation provides is Development Grants.
				However, this is just one form of support. There are several other Types or Levels. Each
				belonging to a Funding Stream.
			</p>
			<ul>
				<li>
					Wishlist Projects are projects the applicant does not intend to take on, but instead, has
					a great idea of sees a need in the community and wants to scope out the project, suggest a
					budget, etc, and add it to the Wishlist.
				</li>
				<li>
					Wishlist Projects are a critical means of serving the needs to the Stacks Community. We
					LOVE Wishlist Projects!
				</li>
				<li>
					We love them so much, that if you write an application for a Wishlist Project and it is
					successfully completed, you are eligible for a reward of 10% of the total project budget
					(paid in $STX) up to a maximum $10k USD!
				</li>
			</ul>
		</div>
	);
};

export default Wishlist;
