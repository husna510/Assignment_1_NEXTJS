import React from 'react';
import styles from './contact.module.css';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Contact Us</h1>
      <p className={styles.content}>Get in touch with us via email or phone. We are here to assist you with any queries you may have.</p>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About Us</Link></li>
        <li><Link href='/services'>Services</Link></li>
      </ul>
    </div>
  );
}

export default ContactPage;
