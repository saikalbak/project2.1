import React from 'react'
import styles from './Contact.module.css'
import Layout from '../../components/Layout/Layout'

function Contact() {
  return (
    <Layout>
        <div className={styles.margin}></div>
        <section className={styles.section}>
          <div className="title" id={styles.section_title}>Contact Us</div>
          <div className={styles.section_card}>
            <div className="title" id={styles.section_card_title}>Phone</div>
            <div className="boldtext" id={styles.section_card_text}>+971 58 548 9080</div>
          </div>
          <div className={styles.section_card}>
            <div className="title" id={styles.section_card_title}>Address</div>
            <div className="boldtext" id={styles.section_card_text}>24 4th St - Al Quoz - Al Quoz <br /> Industrial Area 3 - Dubai</div>
          </div>
        </section>
    </Layout>
  )
}

export default Contact