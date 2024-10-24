import React from 'react';
import styles from './about.module.css';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About Us</h1>
      <p className={styles.content}>We are a company dedicated to providing top-notch services. Learn more about our mission and values.</p>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/contact'>Contact Us</Link></li>
        <li><Link href='/services'>Services</Link></li>
      </ul>
    </div>
  );
}

export default AboutPage;
