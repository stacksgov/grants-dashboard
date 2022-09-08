import styles from "./Input.module.css";
import { useEffect, useState } from "react";

const Input = (props) => {
  const {
    name,
    label,
    labelColor,
    labelFontSize,
    hint,
    image,
    readonly,
    maxchar,
    description,
    isNumber,
    isDate
  } = props;

  const [value, setValue] = useState("");

  function setColor(input, color) {
    input.style.outlineColor = color;
    input.style.borderColor = color;
  }

  function handleChange(e) {
    let input = e.target;
    const { name, value } = input;

    let formData = JSON.parse(localStorage.getItem("formData"));
    if(!formData) {
      localStorage.setItem("formData", JSON.stringify({}));
    }
    formData[name] = value;
    localStorage.setItem("formData", JSON.stringify(formData));

    if (!(value.length > maxchar)) {
      setValue(value.substring(0, maxchar));
    }

    switch (name) {
      case "discordUsername":
      case "twitterUsername":
      case "projectTeam":
      case "email":
        break;
      default:
        if (value.length == undefined || value.length == "") {
          setColor(input, "red");
        } else {
          switch (name) {
            case "wishlistGithub":
            case "referenceLink":
              if (isValidURL(value)) {
                setColor(input, "#3182ce");
              } else {
                setColor(input, "red");
              }
              break;
            default:
              setColor(input, "#3182ce");
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
    <div className={styles.inputWrapper}>
      <div
        style={labelColor ? { color: labelColor } : {}}
        className={styles.label}
      >
        <label style={labelFontSize ? { fontSize: labelFontSize } : {}}>
          {label}
        </label>
        <p>{hint}</p>
      </div>
      <div className={styles.input}>
        {maxchar && (
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
        )}
        <input
          readOnly={readonly}
          style={{ color: readonly ? "rgba(255, 255, 255, 0.48)" : "white" }}
          //type={isNumber ? "number" : "text"}
          
          type={isNumber ? "number" : isDate ? "date" : "text"}
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

export default Input;
