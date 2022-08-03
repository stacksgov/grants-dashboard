import styles from "./Checkbox.module.css";

const Checkbox = (props) => {
  const { name, value, id } = props;
  return (
    <div className={styles.checkboxWrapper}>
      <input id={id} name={name} type="checkbox"></input>
      <label>{value}</label>
    </div>
  );
};

export default Checkbox;
