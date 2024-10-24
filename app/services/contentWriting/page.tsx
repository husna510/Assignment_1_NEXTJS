import React from 'react';
import styles from './contentWriting.module.css';
import Link from 'next/link';

const ContentWritingPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Content Writing</h1>
     
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About Us</Link></li>
        <li><Link href='/contact'>Contact Us</Link></li>
        <li><Link href='/services'>Services</Link></li>
      </ul>

      <p className={styles.content}>We provide high-quality content writing services that help your business communicate effectively with its audience.</p>
    </div>
  );
}

export default ContentWritingPage;
