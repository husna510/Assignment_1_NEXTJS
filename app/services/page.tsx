import Link from 'next/link'
import React from 'react'
import styles from '../services/services.module.css'




const ServicesPage = () => {
  return (
    <div className={styles.container}>

      <h1 className={styles.header}>Our Services</h1>

        <ul className={styles.list}>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='about'>About Us</Link></li>
          <li><Link href='contact'>Contact Us</Link></li>
          <li><Link href="../services/contentWriting">Content Writing</Link></li>
          <li><Link href="../services/videoEditing">Video Editing</Link></li>
        </ul>
        
        <p className={styles.content}>We offer a wide range of services to meet your needs, from web development to content writingn and more.</p>
    
    </div>
  )
}

export default ServicesPage