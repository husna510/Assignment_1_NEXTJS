import React from 'react';
import styles from './home.module.css';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Welcome to Our Website</h1>
     
      <ul>
        <li><Link href='/about'>About Us</Link></li>
        <li><Link href='/contact'>Contact Us</Link></li>
        <li><Link href='/services'>Services</Link></li>
        <li><Link href='./services/contentWriting'>Content Writing</Link></li>
        <li><Link href='./services/videoEditing'>Video Editing</Link></li>
      </ul>

      <p className={styles.content}>Explore our range of services and learn more about what we can do for you. Your journey starts here!</p>

    </div>
  );
}

export default HomePage;
