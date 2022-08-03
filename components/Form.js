import styles from "./Form.module.css";
import { motion } from "framer-motion";

export function getSelectedValue(fieldName) {
  let options = Array.from(document.getElementsByName(fieldName));

  let formData = JSON.parse(localStorage.getItem("formData"));
  let selectedValue = null;

  if (formData) {
    selectedValue =
      typeof formData[fieldName] != "undefined" ? formData[fieldName] : null;
  }

  options.map((option) => {
    if (option.value == selectedValue) {
      option.checked = true;
    }
  });
}

const Form = (props) => {
  const { title, description, fields } = props;

  return (
    <motion.div
      key="form"
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      exit={{ y: -1000 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.formWrapper}>
        <div className={styles.titleWrapper}>
          <div>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
          </div>
        </div>

        {fields()}
      </div>
    </motion.div>
  );
};

export default Form;
