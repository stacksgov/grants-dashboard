import styles from "./Form.module.css";

const Form = (props) => {
  const { title, description, fields } = props;


  return (
    <div className={styles.formWrapper}>
      <div className={styles.titleWrapper}>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      {fields()}
    </div>
  );
};

export default Form;
