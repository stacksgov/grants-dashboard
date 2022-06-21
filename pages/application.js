import styles from "./Application.module.css";
import Nav from "../components/application/layout/Nav";
import Steps from "../components/application/layout/Steps";
import StacksLogo from "../public/images/stacks-logo.svg";
import OkButton from "../components/application/layout/OkButton";
import Wishlist from "../components/application/Wishlist";

const Application = () => {
  return (
    <div className={styles.applicationWrapper}>
      <Nav />
      <div className={styles.mainComponents}>
        <div>
          <Steps />
        </div>
        <div>
          <Wishlist />
        </div>
        <div>
          <OkButton />
        </div>
      </div>
      <StacksLogo className={styles.stacksSVG} />
    </div>
  );
};

export default Application;
