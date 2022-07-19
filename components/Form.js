import styles from "./Form.module.css";
import Checkmark from "../public/images/checkmark.svg";

const Form = (props) => {
  const { title, description, fields, showButton = true } = props;

  function handleSubmit() {}

  return (
    <div className={styles.formWrapper}>
      <div className={styles.titleWrapper}>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
        {showButton && (
          <div className={styles.button}>
            <button onClick={handleSubmit} name="okButton">
              <Checkmark />
              <p>Ok</p>
            </button>
          </div>
        )}
      </div>

      {fields()}
    </div>
  );
};

export default Form;
