import styles from './Wishlist.module.css';

const Wishlist = () => {
	return (
		<div className={styles.wishlistWrapper}>
			<h1>Wishlist Project?</h1>
			<p>Is this a direct application or an application for a Wishlist Project?</p>
			<div className={styles.checkboxes}>
				<div>
					<input type="checkbox" id="direct-application" />
					<label for="direct-application">
						This is a direct application, I intend to perform the work myself or as part of a team.
					</label>
				</div>
				<div>
					<input type="checkbox" id="wishlist-project" />
					<label for="wishlist-project">This application is for a Wishlist Project.</label>
				</div>
			</div>
			<p>
				Applications for Wishlist Project are so appreciated that if the project is successfully
				completed, you are eligible for a reward of 10% of the total project budget (paid in $STX)
				up to a maximum $10k USD! Provide the wallet address and memo for the wallet in which you
				wish to receive those funds.
			</p>

			<div className={styles.addressMemo}>
				<div>
					<label>STX Wallet Address*</label>
					<input type="text" placeholder="Type Here..." />
				</div>
				<div>
					<label>STX Wallet Memo*</label>
					<input type="text" placeholder="Type Here..." />
				</div>
			</div>
			<div className={styles.noMemoConfirmation}>
				<input type="checkbox" id="no-memo-confirmation" />
				<label for="no-memo-confirmation">
					I confirm no memo is required for the wallet address provided.
				</label>
			</div>
		</div>
	);
};

export default Wishlist;
