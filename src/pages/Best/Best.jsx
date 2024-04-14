import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Best.module.css'
import Layout from '../../components/Layout/Layout'
import Button from '../../components/UI/Button/Button'

function Best() {
  return (
    <Layout>
        <div className={styles.margin}></div>
        <section className={styles.section}>
          <div className='title' id={styles.section_title}>Best Things to Do in Dubai</div>
          <div className={styles.section_nav}>
            <Link className='link' id={styles.section_nav_link}>Content for stories</Link>
            <Link className='link' id={styles.section_nav_link}>Things to Do</Link>
            <Link className='link' id={styles.section_nav_link}>Beaches</Link>
            <Link className='link' id={styles.section_nav_link}>Extreme</Link>
            <Link className='link' id={styles.section_nav_link}>Food</Link>
          </div>
          <div className={styles.section_cards}>
            <div className={styles.sectionCard}>
              <img src="./images/Rectangle 1334tyui (1).svg" alt="" className={styles.img}/>
            </div>
            <div className={styles.sectionCard}>
              <img src="./images/Rectangle 1334tyui (2).svg" alt="" className={styles.img}/>
            </div>
            <div className={styles.sectionCard}>
              <img src="./images/Rectangle 1334tyui (3).svg" alt="" className={styles.img}/>
            </div>
            <div className={styles.sectionCard}>
              <img src="./images/Rectangle 1334tyui (4).svg" alt="" className={styles.img}/>
            </div>
            <div className={styles.sectionCard}>
              <img src="./images/Rectangle 1334tyui (5).svg" alt="" className={styles.img}/>
            </div>
            <div className={styles.sectionCard}>
              <img src="./images/Rectangle 1334tyui (6).svg" alt="" className={styles.img}/>
            </div>
            <div className={styles.sectionCard}>
              <img src="./images/Rectangle 1334tyui (7).svg" alt="" className={styles.img}/>
            </div>
            <div className={styles.sectionCard}>
              <img src="./images/Rectangle 1334tyui (8).svg" alt="" className={styles.img}/>
            </div>
            <div className={styles.sectionCard}>
              <img src="./images/Rectangle 1334tyui (9).svg" alt="" className={styles.img}/>
            </div>
          </div>
          <div className={styles.section_btn}>
            <Button w='350px' h='72px' bgc='#33B7BC' b='none' br='10px'>VIEW ALL</Button>
          </div>
        </section>
    </Layout>
  )
}

export default Best