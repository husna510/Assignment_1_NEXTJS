import React from 'react';
import styles from './videoEditing.module.css';
import Link from 'next/link';



const VideoEditingPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Video Editing</h1>
      <p className={styles.content}>Our video editing services help you create professional, high-quality content for any platform.</p>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About Us</Link></li>
        <li><Link href='/contact'>Contact Us</Link></li>
      </ul>
    </div>
  );
}

export default VideoEditingPage;
