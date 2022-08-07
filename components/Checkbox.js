import styles from "./Checkbox.module.css";

const Checkbox = (props) => {
  const { name, value, id, labelColor } = props;

  switch (id) {
    case "guideline1":
      // value = <p></p>I have read and understood the application guidelines and the terms and conditions.'
      break;
    case "guideline2":
      break;
    case "guideline2":
      break;
  }
  return (
    <div
      style={labelColor ? { color: labelColor } : {}}
      className={styles.checkboxWrapper}
    >
      <input id={id} name={name} type="checkbox"></input>
      <label>{value}</label>
    </div>
  );
};

export default Checkbox;
