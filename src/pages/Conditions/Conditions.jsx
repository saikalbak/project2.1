import React from 'react'
import styles from './Conditions.module.css'
import Layout from '../../components/Layout/Layout'
import Card from '../../components/Card/Card'

function Conditions() {
  return (
    <Layout>
        <div className={styles.margin}></div>
        <section className={styles.section}>
          <div className="title" id={styles.section_title}>Car rental conditions</div>
          <div className="text" id={styles.section_text}>Requirements for Customers</div>
          <div className={styles.section_requirements}>
            <div className={styles.section_requirements1}>
              <div className="text" id={styles.section_requirements_text}>From <span className={styles.section_requirements_number}>19</span> y.o.</div>
              <div className="title" id={styles.section_requirements_title}>Age</div>
            </div>
            <hr className={styles.section_requirements_hr}/>
            <div className={styles.section_requirements2}>
              <div className="text" id={styles.section_requirements_text}>From <span className={styles.section_requirements_number}>1</span> year</div>
              <div className="title" id={styles.section_requirements_title}>Driving</div>
            </div>
          </div>
          <Card/>
        </section>
    </Layout>
  )
}

export default Conditions