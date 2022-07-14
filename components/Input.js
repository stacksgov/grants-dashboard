import styles from "./Input.module.css";

export function isValid() {
  let fields = Array.from(document.querySelectorAll("input, textarea"));
  console.log(fields);

  let inputValid = true;

  let optionGroupsChecked = [];
  let optionGroupsValid = [];

  fields = fields.map((field) => {
    console.log("FIELD TYPE", field);
    if (field.value == undefined || field.value == "") {
      field.style.outlineColor = "red";
      field.style.borderColor = "red";
      inputValid = false;
    } else if (field.style.borderColor == "red") {
      inputValid = false;
    } else if (field.type == "radio") {
      if (!optionGroupsChecked.includes(field.name)) {
        optionGroupsChecked.push(field.name);
      }
      if (!optionGroupsValid.includes(field.name)) {
        if (field.checked) {
          optionGroupsValid.push(field.name);
        }
      }
    }
  });
  let optionsValid = optionGroupsChecked.length == optionGroupsValid.length;
  let valid = inputValid && optionsValid;
  return valid;
}

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
