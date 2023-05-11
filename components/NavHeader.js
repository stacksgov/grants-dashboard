import React, { useState } from 'react';
import styles from './NavHeader.module.css';
import Logo from '../public/images/StackFoundationLogo.svg'

export default function NavHeader() {
  const [mobNavActive, setMobNavActive] = useState(false);
  return (
    <div className={styles.navWrapper}>
      <a href={'https://stacks.org/'} target='_blank' rel='noreferrer'> <Logo /></a>

      <ul className={`${styles.navList} ${mobNavActive ? styles.active : ''}`}>
        {/* <li onClick={()=>setMobNavActive(!mobNavActive)} className={styles.navListItem}>Apply for Grant</li>
            <li onClick={()=>setMobNavActive(!mobNavActive)} className={styles.navListItem}>Manage Grant</li> */}
        {/* <li onClick={()=>setMobNavActive(!mobNavActive)} className={styles.navListItem}>Grants Repo</li> */}
      </ul>
      {/* <div className={styles.mobNav} onClick={()=>setMobNavActive(!mobNavActive)}>
            <span ></span>
            <span ></span>
            <span ></span>
        </div> */}
    </div>
  )
}
