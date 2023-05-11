import React from 'react';
import styles from './InfoCard.module.css';

export default function InfoCard({ title, fee, deadline, description, awardedIn, text, headingSecondary, link }) {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.cardHeading}>{title}  <span className={styles.headingSecondary}>| {headingSecondary}</span></h2>
      <p className={styles.cardText}> AWARDED IN:   <span className={styles.secondcardText}>{awardedIn}</span>   </p>
      <p className={styles.cardText}> APPLICATION DEADLINE: <span className={styles.secondcardText}>{deadline}</span>  </p>
      <p className={styles.cardText}> FEE:  <span className={styles.secondcardText}>{fee}</span>   </p>
      <p className={styles.cardTextLarge}>{description}</p>
      <p className={styles.cardTextItalic}>{text}</p>
      <div className={styles.learnButtonWrapper}>
        <a href={link} target='_blank' rel='noreferrer' className={styles.learnButton}> <span className={styles.learnText}>Learn More</span></a>
      </div>
    </div>
  )
}
