import styles from "./ProjectTrack.module.css";
import Form from "../Form";
import Container from "../Container";
import { useEffect } from "react";
import { getSelectedValue } from "../Form";

const ProjectTrack = () => {
  useEffect(() => {
    getSelectedValue("projectTrack");
  });

  const style = { display: "flex", gap: "100px" };
  return (
    <Form
      title="Project Track"
      description="Select the Project Track that best aligns with your project from the list below."
    >
      <div style={style}>
        <div>
          <div className={styles.track}>
            <div className={styles.radio}>
              <input type="radio" name="projectTrack" value="Stacks Protocol" />
              <label>Stacks Protocol</label>
            </div>
            <ul className={styles.list}>
              <li>
                Blockchain Improvements, AppChains, HyperChains, Nodes, Mining,
                etc
              </li>
            </ul>
          </div>

          <div>
            <div className={styles.track}>
              <div className={styles.radio}>
                <input
                  type="radio"
                  name="projectTrack"
                  value="Stacks dApps & Clarity"
                />
                <label>Stacks dApps & Clarity</label>
              </div>

              <ul className={styles.list}>
                <li>
                  Clarity Improvements, SIP Development, Smart Contract
                  Templates, dApps, etc.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.track}>
            <div className={styles.radio}>
              <input
                type="radio"
                name="projectTrack"
                value="Stacks Developer Experience"
              />
              <label>Stacks Developer Experience</label>
            </div>
            <ul className={styles.list}>
              <li>
                Tooling, Software Development Kits, Libraries, Faucets,
                Sandboxes, etc.
              </li>
            </ul>
          </div>
          <div className={styles.track}>
            <div className={styles.radio}>
              <input
                type="radio"
                name="projectTrack"
                value="Cross-Chain & Off-Chain"
              />
              <label>Cross-Chain & Off-Chain</label>
            </div>
            <ul className={styles.list}>
              <li>
                Decentralized Storage Integrations, Oracles & Bridges, EVM
                Integrations, etc.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.track}>
            <div className={styles.radio}>
              <input
                type="radio"
                name="projectTrack"
                value="Stacks Interface"
              />
              <label>Stacks Interface</label>
            </div>
            <ul className={styles.list}>
              <li>
                APIs, Indexers, Decentralized Identification, Wallets,
                Explorers, etc.
              </li>
            </ul>
          </div>
          <div className={styles.track}>
            <div className={styles.radio}>
              <input
                type="radio"
                name="projectTrack"
                value="Stacks Education & Community"
              />
              <label>Stacks Education & Community</label>
            </div>
            <ul className={styles.list}>
              <li>
                Documentation, Tutorials, Workshops, Governance, Education,
                Content Creation, etc.
              </li>
            </ul>
          </div>
          <div className={styles.track}>
            <div className={styles.radio}>
              <input
                type="radio"
                name="projectTrack"
                value="Stacks User Experience"
              />
              <label>Stacks User Experience</label>
            </div>
            <ul className={styles.list}>
              <li>
                UX/UI Research, Speculative Design Studies, Prototypes,
                Component Libraries, etc
              </li>
            </ul>
          </div>
          <div className={styles.track}>
            <div className={styles.radio}>
              <input
                type="radio"
                name="projectTrack"
                value="Bitcoin Utility via Stacks"
              />
              <label>Bitcoin Utility via Stacks</label>
            </div>
            <ul className={styles.list}>
              <li>DLC-Clarity Explorations, BTC-STX Wallets</li>
              <li>BTC-Native DeFi (using Stacks), etc.</li>
            </ul>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default ProjectTrack;
