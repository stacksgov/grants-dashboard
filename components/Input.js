import styles from "./Input.module.css";

function Input({
  label,
  name,
  form: { formData, handleChange },
  type = "text",
  placeholder = "Type here...",
  icon,
  value,
  checked,
}) {
  let input;
  switch (type) {
    case "text":
      input = (
        <div className={styles.inputWrapper}>
          <label>{label}</label>
          <input
            key={name}
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={placeholder}
          />

          {icon ?? <icon class="input" id="svg" />}
        </div>
      );
      break;
    case "area":
      input = (
        <textarea
          key={name}
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          placeholder={placeholder}
        />
      );
      break;
    case "radio":
      input = (
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          checked={checked}
        />
      );
      break;
    case "number":
      input = (
        <div className={styles.inputWrapper}>
          <label>{label}</label>
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={placeholder}
            onWheel={(e) => e.target.blur()}
          />
        </div>
      );
  }
  return input;
}

export default Input;
