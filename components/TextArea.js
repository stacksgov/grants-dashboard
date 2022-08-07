import styles from "./TextArea.module.css";
import { useEffect, useState } from "react";

const TextArea = (props) => {
  const {
    name,
    label,
    hint,
    image,
    readonly,
    maxchar,
    height,
    labelColor,
    labelFontSize,
  } = props;

  const [value, setValue] = useState("");

  function setColor(textarea, color) {
    textarea.style.outlineColor = color;
    textarea.style.borderColor = color;
  }

  function handleChange(e) {
    let textarea = e.target;
    const { name, value } = textarea;

    let formData = JSON.parse(localStorage.getItem("formData"));
    formData[name] = value;
    localStorage.setItem("formData", JSON.stringify(formData));

    if (!(value.length > maxchar)) {
      setValue(value.substring(0, maxchar));
    }

    switch (name) {
      case "discordUsername":

      case "twitterUsername":
      case "projectTeam":
        break;
      default:
        if (value.length == undefined || value.length == "") {
          setColor(textarea, "red");
        } else {
          switch (name) {
            default:
              setColor(textarea, "#3182ce");
              break;
          }
        }
        break;
    }
  }

  useEffect(() => {
    let formData = JSON.parse(localStorage.getItem("formData"));
    if (formData) setValue(formData[name]);
  }, []);

  return (
    <div className={styles.textareaWrapper}>
      <div
        style={labelFontSize ? { fontSize: labelFontSize } : {}}
        className={styles.label}
      >
        <label style={labelColor ? { color: labelColor } : {}}>{label}</label>
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
          <p>
            {(value ? maxchar - value.length : maxchar) < 0
              ? 0
              : value
              ? maxchar - value.length
              : maxchar}{" "}
            characters
          </p>
          <div className={styles.progressBar}>
            <div
              style={{
                width: `${
                  (value ? value.length / maxchar : 0) * 100 > 100
                    ? 100
                    : (value ? value.length / maxchar : 0) * 100
                }%`,
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
