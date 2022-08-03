import styles from "./Radio.module.css";

const Radio = (props) => {
  const { name, value, id = name } = props;
  return (
    <div className={styles.radioWrapper}>
      <input id={id} type="radio" name={name} value={value} />
      <label>{value}</label>
    </div>
  );
};

export default Radio;
