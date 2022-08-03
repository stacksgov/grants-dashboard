import styles from "./TextArea.module.css";
import { useEffect, useState } from "react";

const TextArea = (props) => {
  const { name, label, hint, image, readonly, maxchar, height } = props;

  const [value, setValue] = useState("");

  function handleChange(e) {
    let input = e.target;
    const { name, value } = input;

    let formData = JSON.parse(localStorage.getItem("formData"));
    formData[name] = value;
    localStorage.setItem("formData", JSON.stringify(formData));

    if (!(value.length > maxchar)) {
      setValue(value.substring(0, maxchar));
      if (maxchar - value.length <= 0) {
        maxchar = value.length + 1;
      }
    }
  }

  useEffect(() => {
    let formData = JSON.parse(localStorage.getItem("formData"));
    if (formData) setValue(formData[name]);
    if (maxchar - value.length <= 0) {
      maxchar = value.length + 1;
    }
  }, []);

  return (
    <div className={styles.textareaWrapper}>
      <div className={styles.label}>
        <label>{label}</label>
        <p>{hint}</p>
      </div>
      <div className={styles.textarea}>
        <textarea
          style={{ height }}
          placeholder="Type here..."
          name={name}
          value={value}
          onChange={(e) => handleChange(e)}
        />
        <div className={styles.progressWrapper}>
          <p>{value ? maxchar - value.length : maxchar} characters</p>
          <div className={styles.progressBar}>
            <div
              style={{
                width: `${(value ? value.length / maxchar : 0) * 100}%`,
              }}
              className={styles.filler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
