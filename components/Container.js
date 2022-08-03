import styles from "./Container.module.css";

const Container = ({ children }) => {
  return <div className={styles.containerWrapper}>{children}</div>;
};

export default Container;
