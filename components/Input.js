import styles from "./Input.module.css";
import { validateStacksAddress } from "@stacks/transactions";
import { useEffect, useState } from "react";

const Input = (props) => {
  const {
    name,
    label,
    labelFontSize,
    hint,
    image,
    readonly,
    maxchar,
    description,
    isNumber,
  } = props;

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
  }, []);

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.label}>
        <label style={{ fontSize: labelFontSize }}>{label}</label>
        <p>{hint}</p>
      </div>
      <div className={styles.input}>
        {maxchar && (
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
        )}
        <input
          readOnly={readonly}
          style={{ color: readonly ? "rgba(255, 255, 255, 0.48)" : "white" }}
          type={isNumber ? "number" : "text"}
          placeholder="Type here..."
          name={name}
          value={value}
          onChange={(e) => handleChange(e)}
        />
        <div className={styles.image}>{image}</div>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

// Helper functions

export function isValidURL(string) {
  var res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return res !== null;
}

export function isValidEmail(string) {
  if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(string)) {
    return true;
  }
  return false;
}

export function isValidStxAddress(string) {
  return validateStacksAddress(string);
}

export default Input;
