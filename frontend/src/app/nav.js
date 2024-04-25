'use client'

import styles from "./nav.module.css";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


export default function Nav({ userProfile }) {

  const pathname = usePathname();
  const profilePicUrl = userProfile?.pictureUrl || '/images/sample-profile-picture.png';
  const profileAltText = userProfile?.name || 'User Profile';
  const profileName = userProfile?.name || 'John Doe';
  const profileEmail = userProfile?.email || 'johndoe@email.com';

  return (
    <nav className={styles.navbar}>
        <div className={styles.navbarTopContainer}>
            <Link className={styles.logoContainer} href="/">
                <h3 className={styles.logoText}>Logo.</h3>
            </Link>
            <Link className={`${styles.navLinkContainer} ${pathname === '/' ? styles.active : styles.inactive}`} href="/">
                <svg className={styles.navLinkIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>
                Home
            </Link>

            <Link className={`${styles.navLinkContainer} ${pathname === '/calendar' ? styles.active : styles.inactive}`} href="/calendar">
                <svg className={styles.navLinkIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>
                Calendar
            </Link>

            <Link className={`${styles.navLinkContainer} ${pathname === '/analytics' ? styles.active : styles.inactive}`} href="/analytics">
                <svg className={styles.navLinkIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 24h-6v-6h6v6zm8-9h-6v9h6v-9zm8-4h-6v13h6v-13zm0-11l-6 1.221 1.716 1.708-6.85 6.733-3.001-3.002-7.841 7.797 1.41 1.418 6.427-6.39 2.991 2.993 8.28-8.137 1.667 1.66 1.201-6.001z"/></svg>
                Analytics
            </Link>

            <Link className={`${styles.navLinkContainer} ${pathname === '/settings' ? styles.active : styles.inactive}`} href="/settings">
                <svg className={styles.navLinkIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
                Settings
            </Link>
        </div>
        <div className={styles.navbarBottomContainer}>
            <Link className={`${styles.navLinkContainer} ${styles.profileLinkContainer} ${pathname === '/profile' ? styles.active : styles.inactive}`} href="/profile">
                <Image
                    src={profilePicUrl}
                    alt={profileAltText}
                    width={50}
                    height={50}
                    layout="fixed"
                    className={styles.profilePicture}
                />
                <div className={styles.profileSideContainer}>
                    <p className={styles.profileName}>{profileName}</p>
                    <p className={styles.profileEmail}>{profileEmail}</p>
                </div>
            </Link>
        </div>
    </nav>  
  );
}
