import { useSession, signIn, signOut } from "next-auth/react";
import Blob from "../public/images/blob.svg";
import styles from "./Index.module.css";
import { AiFillGithub } from "react-icons/ai";

const Home = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.indexBackground}>
      <div className={styles.indexWrapper}>
        <div className={styles.leftWrapper}>
          <p>Stacks Foundation</p>
          <h1>Project Launchpad</h1>
          <p>
            Committed to helping developers, designers, community leaders,
            artists, entrepreneurs, and more build a more...
          </p>
          <p>
            User-owned & open-source internet powered by the Stacks blockchain,
            Clarity smart contracts, and secured by Bitcoin.
          </p>
        </div>
        <div className={styles.rightWrapper}>
          <Blob className={styles.blob} />

          <div className={styles.funding}>
            <p>Funding available from:</p>
            <p>One-thousand to two-hundred and fifty thuosand dollars.</p>
            <button>Submit Your Application</button>
            <p>GitHub Account Required</p>
          </div>
          <div className={styles.basics}>
            <p>Want to learn the basics?</p>
            <p>Check out our educational Project Launchpad Primer.</p>
            <button>Project Launchpad Primer</button>
          </div>

          <div className={styles.basics}>
            <p>Want to explore the details?</p>
            <p>Vist the Project Launchpad GitHub Repository.</p>
            <button>
              <div> Project Launchpad Repository</div>
              <div>
                <AiFillGithub size="25" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
