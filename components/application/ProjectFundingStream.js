import styles from "./ProjectFundingStream.module.css";
import PersonIcon from "../../public/images/person.svg";
import TagIcon from "../../public/images/payTag.svg";
import DropIcon from "../../public/images/waterDrop.svg";
import ArrowIcon from "../../public/images/arrow.svg";
import { projectTypes } from "../../content";

import Form from "../Form";

const ProjectFundingStream = () => {
  const Fields = () => {
    return (
      <div className={styles.fundingStreamWrapper}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>
                <p>
                  <PersonIcon />
                  Name
                </p>
              </th>
              <th>
                <p>
                  <TagIcon />
                  MAX. $
                  <ArrowIcon />
                </p>
              </th>
              <th>
                <p>
                  <DropIcon />
                  FUNDING STREAM
                  <ArrowIcon />
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {projectTypes.map((type) => {
              return (
                <tr style={{ position: "relative" }} key={type.name}>
                  <td>
                    <input type="radio" name="projectType" value={type.name} />
                  </td>
                  <td>
                    <label>{type.name}</label>
                  </td>
                  <td>
                    <span>{type.funding}</span>
                  </td>
                  <td>
                    <span
                      style={{ backgroundColor: `${type.color}` }}
                      className={styles.stream}
                    >
                      {type.stream}
                    </span>
                  </td>
                  <div className={styles.icon}>{type.icon}</div>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <Form
      title="Project Type"
      description="Select the Project Type below. If you have questions about Project Types."
      fields={Fields}
    />
  );
};

export default ProjectFundingStream;