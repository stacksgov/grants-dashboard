import styles from "./ProjectLead.module.css";
import GithubIcon from "../../public/images/github.svg";
import DiscordIcon from "../../public/images/discord.svg";
import TwitterIcon from "../../public/images/twitter.svg";
import Input from "../Input";

const ProjectLead = ({ form }) => {
  return (
    <div className={styles.wishlistWrapper}>
      <h1>Project Lead Information</h1>
      <p>
        Please note, the only information that will be visible on the
        application is the Github User Name you logged in with. The remianing
        information will not be added to Github and is for administrative
        purposes only.
      </p>
      <div className={styles.fields}>
        <Input label="First Name" name="firstName" form={form} />
        <Input label="Last Name" name="lastName" form={form} />
      </div>
      <div className={styles.fields}>
        <Input
          label="GitHub User Name"
          name="github"
          form={form}
          icon={<GithubIcon class="input" />}
        />
        <Input label="Email *" name="email" form={form} />
      </div>
      <div className={styles.fields}>
        <Input
          label="Discord User Name"
          name="discordUsername"
          icon={<DiscordIcon class="input" />}
          form={form}
        />
        <Input
          label="Twitter User Name"
          name="twitterUsername"
          icon={<TwitterIcon class="input" />}
          form={form}
        />
      </div>

      <div className={styles.addressMemo}>
        <Input label="STX Wallet Address*" name="stxAddress" form={form} />
        <Input label="STX Wallet Memo*" name="stxMemo" form={form} />
      </div>
      <div className={styles.noMemoConfirmation}>
        <input type="checkbox" name="noMemoConfirmation" />
        <label for="noMemoConfirmation">
          I confirm no memo is required for the wallet address provided.
        </label>
      </div>
    </div>
  );
};

export default ProjectLead;
