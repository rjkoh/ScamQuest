import React from 'react'
import styles from "./footer.module.css";
import Link from 'next/link';


export default function Footer() {
  return (
    <div className={styles.footerContainer}>
        <Link className={styles.logoContainer} href="/">
            <img className={styles.logoImg} src="./images/logo-footer.png"></img>
        </Link>

        <div className={styles.linksContainer}>
            <Link className={styles.linkContainer} href="/">
                <h4 className={styles.linkText}>Features</h4>
            </Link>
            <Link className={styles.linkContainer} href="/">
                <h4 className={styles.linkText}>Pricing</h4>
            </Link>
            <Link className={styles.linkContainer} href="/">
                <h4 className={styles.linkText}>Contact</h4>
            </Link>
        </div>

        <p className={styles.footerText}>Est. 2024</p>
    </div>
  )
}
