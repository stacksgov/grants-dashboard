import { useState } from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const {
    name,
    label,
    labelSize,
    labelColor,
    description,
    maxChar,
    pageWidth,
    placeholder,
    height,
    image,
    paddingBottom,
  } = props;

  console.log("height", height);

  const [value, setValue] = useState("");

  function handleChange(event) {
    const { value } = event.target;

    if (!(value.length > maxChar)) {
      setValue(value);
    }
  }

  let width;

  switch (pageWidth) {
    case "full":
      width = "750px";
      break;
    case "half":
      width = "360px";
      break;
    default:
      width = "750px";
      break;
  }

  return (
    <div style={{ maxWidth: width }} className={styles.fieldWrapper}>
      <div className={styles.title}>
        <label style={{ color: labelColor, fontSize: labelSize }}>
          {label}
        </label>
        {maxChar && (
          <div className={styles.progressWrapper}>
            <p>{maxChar - value.length} characters</p>
            <div className={styles.progressBar}>
              <div
                style={{ width: `${(value.length / maxChar) * 100}%` }}
                className={styles.filler}
              />
            </div>
          </div>
        )}
      </div>

      {height == undefined ? (
        <div style={{ position: "relative", paddingBottom }}>
          <input
            style={{ width, height }}
            onChange={(event) => handleChange(event)}
            className={styles.input}
            placeholder={placeholder ? placeholder : "Type here..."}
            value={value}
          />
          <div className={styles.inputImage}>{image ?? <image />}</div>
        </div>
      ) : (
        <textarea
          style={{ width, height }}
          onChange={(event) => handleChange(event)}
          className={styles.input}
          placeholder={placeholder ? placeholder : "Type here..."}
          value={value}
        />
      )}

      {description && (
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
