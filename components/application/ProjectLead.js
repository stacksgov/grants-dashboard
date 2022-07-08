import styles from './ProjectLead.module.css';
import GithubIcon from '../../public/images/github.svg';
import DiscordIcon from '../../public/images/discord.svg';
import TwitterIcon from '../../public/images/twitter.svg';

const ProjectLead = ({ props: { formData, handleChange } }) => {
	return (
		<div className={styles.wishlistWrapper}>
			<h1>Project Lead Information</h1>
			<p>
				Please note, the only information that will be visible on the application is the Github User
				Name you logged in with. The remianing information will not be added to Github and is for
				administrative purposes only.
			</p>
			<div className={styles.fields}>
				<div>
					<label for="firstName">First Name *</label>
					<input onChange={handleChange} type="text" name="firstName" placeholder="Type Here..." />
				</div>
				<div>
					<label for="name">Last Name *</label>
					<input onChange={handleChange} type="text" name="lastName" placeholder="Type Here..." />
				</div>
			</div>
			<div className={styles.fields}>
				<div>
					<label>GitHub User Name</label>
					<p>
						This will be pre-populated and uneditable <GithubIcon />
					</p>
				</div>
				<div>
					<label for="email">Email *</label>
					<input onChange={handleChange} type="text" name="email" placeholder="Type Here..." />
				</div>
			</div>
			<div className={styles.fields}>
				<div>
					<label for="discordUsername">Discord User Name</label>
					<input
						onChange={handleChange}
						type="text"
						name="discordUsername"
						placeholder="Type Here..."
					/>
					<DiscordIcon className={styles.svg} />
				</div>
				<div>
					<label for="twitterUserName">Twitter User Name</label>
					<input
						onChange={handleChange}
						type="text"
						name="twitterUserName"
						placeholder="Type Here..."
					/>

					<TwitterIcon className={styles.svg} />
				</div>
			</div>
			<div className={styles.addressMemo}>
				<div>
					<label for="stxAddress">STX Wallet Address*</label>
					<input onChange={handleChange} name="stxAddress" type="text" placeholder="Type Here..." />
				</div>
				<div>
					<label for="stxMemo">STX Wallet Memo*</label>
					<input onChange={handleChange} name="stxMemo" type="text" placeholder="Type Here..." />
				</div>
			</div>
			<div className={styles.noMemoConfirmation}>
				<input onChange={handleChange} type="checkbox" name="noMemoConfirmation" />
				<label for="noMemoConfirmation">
					I confirm no memo is required for the wallet address provided.
				</label>
			</div>
		</div>
	);
};

export default ProjectLead;
