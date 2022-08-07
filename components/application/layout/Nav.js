import styles from "./Nav.module.css";
import CloseIcon from "../../../public/images/close.svg";
import Link from "next/link";

const Nav = (props) => {
  let { step, totalSteps } = props;
  return (
    <div className={styles.layoutWrapper}>
      <div>
        <div
          className={styles.progressBar}
          style={{ width: `${step == 1 ? "220" : totalSteps * 20}px` }}
        >
          <span
            style={{
              background: "linear-gradient(45deg, #3281cd, #96286f)",
              width: `${step == 1 ? 10 : (step * 100) / totalSteps}%`,
              height: "100%",
              display: "block",
            }}
          ></span>
        </div>
        <p>{props.name}</p>
      </div>
      <Link href="/">
        <div className={styles.close}>
          <a>
            <p>
              <CloseIcon />
              Close
            </p>
          </a>
          <span></span>
        </div>
      </Link>
    </div>
  );
};

export default Nav;
