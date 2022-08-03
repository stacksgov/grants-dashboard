import { templateA, templateB, templateC } from "./templates";

export const generateTemplate = (flow, formData) => {
  let markdown;

  switch (flow) {
    case "A":
      markdown = templateA(formData);
      break;
    case "B":
      markdown = templateB(formData);
      break;
    case "C":
      markdown = templateC(formData);
      break;
  }

  return markdown;
};
