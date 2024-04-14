import React from 'react'
import '../Home/Home.css'
import styles from './Cars.module.css'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'

function Cars() {
  return (
    <Layout>
        <div className={styles.margin}></div>
        <section className={styles.section}>
          <div className="title" id={styles.section_title}>Car List in Dubai</div>
          <div className={styles.section_nav}>
            <Link className='link' id={styles.section_nav_link}>All Cars</Link>
            <Link className='link' id={styles.section_nav_link}>SUVs</Link>
            <Link className='link' id={styles.section_nav_link}>Convertibles</Link>
            <Link className='link' id={styles.section_nav_link}>Sports Cars</Link>
            <Link className='link' id={styles.section_nav_link}>Coupe</Link>
            <Link className='link' id={styles.section_nav_link}>Premium</Link>
          </div>
          <div className="section2_cards">
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 13.svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Lamborghini Urus</div>
                            <Button w='108px' h='54px' br='8px' b='2px solid #33B7BC' bgc='transparent'>RENT</Button>
                        </div>
                    </div>
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 14.svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Ferrari Roma</div>
                            <Button w='108px' h='54px' br='8px' b='2px solid #33B7BC' bgc='transparent'>RENT</Button>
                        </div>
                    </div>
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 177.svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Rolls-Royce Ghost</div>
                            <Button w='108px' h='54px' br='8px' b='2px solid #33B7BC' bgc='transparent'>RENT</Button>
                        </div>
                    </div>
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 178.svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Porsche 911 Turbo S</div>
                            <Button w='108px' h='54px' br='8px' b='2px solid #33B7BC' bgc='transparent'>RENT</Button>
                        </div>
                    </div>
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 174.svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Lamborghini Urus</div>
                            <Button w='108px' h='54px' br='8px' b='2px solid #33B7BC' bgc='transparent'>RENT</Button>
                        </div>
                    </div>
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 175.svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Ferrari Roma</div>
                            <Button w='108px' h='54px' br='8px' b='2px solid #33B7BC' bgc='transparent'>RENT</Button>
                        </div>
                    </div>
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 174 (1).svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Lamborghini Urus</div>
                            <Button w='108px' h='54px' br='8px' b='2px solid #33B7BC' bgc='transparent'>RENT</Button>
                        </div>
                    </div>
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 175 (1).svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Ferrari Roma</div>
                            <Button w='108px' h='54px' br='8px' b='2px solid #33B7BC' bgc='transparent'>RENT</Button>
                        </div>
                    </div>
          </div>
        </section>
    </Layout>
  )
}

export default Cars