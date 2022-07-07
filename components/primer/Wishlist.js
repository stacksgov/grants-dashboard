import styles from './Wishlist.module.css';

const Wishlist = () => {
	return (
		<div className={styles.wishlistWrapper}>
			<h1>Wishlist Projects</h1>
			<p className={styles.subtitle}>
				As noted on the last page, every application can be submitted as a direct application for a
				project you wish to pursue or as a Wishlist Project. OK, so what are Wishlist Projects?:
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
