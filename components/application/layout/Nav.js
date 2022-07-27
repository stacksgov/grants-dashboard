import styles from "./Nav.module.css";
import CloseIcon from "../../../public/images/close.svg";
import Link from "next/link";

const Nav = (props) => {
  return (
    <div className={styles.layoutWrapper}>
      <div>
        <div className={styles.progressBar}>
          <span
            style={{
              background: "linear-gradient(45deg, #3281cd, #96286f)",
              width: `${props.step * 12.5}%`,
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
