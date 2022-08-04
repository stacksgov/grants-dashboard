import styles from "./Utilities.module.css";
import CloseIcon from "../public/images/close.svg";
import Link from "next/link";

const Utilities = () => {
  return (
    <div>
      <Link href="/">
        <a>
          <div className={styles.close}>
            <p>
              <CloseIcon />
              Close
            </p>
            <span></span>
          </div>
        </a>
      </Link>
      <div className={styles.utilitiesWrapper}>
        <h1>Utilities</h1>
        <p className={styles.descriptor}>
          A couple of tools that might be helpful.
        </p>

        <div className={styles.buttonWrapper}>
          <div>
            <p>A. Calculate and Verify Payment Amounts</p>
            <Link href="/stacks-payment-converter">
              <a>
                <button>STX Payment Converter</button>
              </a>
            </Link>
          </div>
          <div>
            <p>B. Export Project Data from Github</p>
            <Link href="/project-data-exporter">
              <a>
                <button>Project Data Exporter (requires login)</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utilities;
