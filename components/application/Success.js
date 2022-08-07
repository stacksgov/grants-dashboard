import styles from "./Success.module.css";
import GithubIcon from "../../public/images/github.svg";

const Home = () => {
  return (
    <div className={styles.indexWrapper}>
      <div className={styles.rightWrapper}>
        <div>
          <p>Your Grant application has been submitted for review:</p>
          <p> Please allow 2-4 weeks for your Initial Review. </p>
          <p>
            All comments, feedback, and notifications moving forward will be
            handled via GitHub
          </p>
          <button>
            View Application on Github
            {/* <AiFillGithub size="25" /> */}
            <GithubIcon className={styles.svg} />
          </button>
        </div>
        <div>
          <p>Want to explore the details?</p>
          <p>Vist the Grant Launchpad GitHub Repository.</p>
          <button>
            Grant Launchpad Repository <GithubIcon className={styles.svg} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
