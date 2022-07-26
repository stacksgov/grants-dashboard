import styles from "./Form.module.css";

export function getFormData() {
  let formData = localStorage.getItem("formData");
  return JSON.parse(formData);
}

export function getSelectedValue(fieldName) {
  let options = Array.from(document.getElementsByName(fieldName));

  let formData = JSON.parse(localStorage.getItem("formData"));

  let selectedValue =
    typeof formData[fieldName] != "undefined" ? formData[fieldName] : null;

  options.map((option) => {
    if (option.value == selectedValue) {
      option.checked = true;
    }
  });
}

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
