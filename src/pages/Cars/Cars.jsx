import React from 'react'
import { useEffect, useState } from 'react'
import '../Home/Home.css'
import './Cars.css'
import Modal from 'react-modal'
import styles from './Cars.module.css'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import DateRangePicker from '../../components/UI/DateRangePicker/DateRangePicker'

function Cars() {
    const [currentIndex, setCurrentIndex] = useState(0)
  
  
    const swiperData = [
      {
        image: './images/Rectangle 13.svg',
        text: 'Lamborghini Urus',
      },
      {
        image: './images/Rectangle 14.svg',
        text: 'Ferrari Roma',
      },
      {
        image: './images/Rectangle 177.svg',
        text: 'Rolls-Royce Ghost',
      },
      {
        image: './images/Rectangle 178.svg',
        text: 'Porsche 911 Turbo S',
      },
      {
        image: './images/Rectangle 174.svg',
        text: 'BMW',
      },
      {
        image: './images/Rectangle 175.svg',
        text: 'Mercedes',
      },
      {
        image: './images/Rectangle 174-1.svg',
        text: 'Range Rover',
      },
      {
        image: './images/Rectangle175-1.svg',
        text: 'Mercedes',
      },
    ];
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === swiperData.length - 1 ? 0 : prevIndex + 1));
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? swiperData.length - 1 : prevIndex - 1));
    };

  // Modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = (
    <div className='modal'>
     <div className='Rent'>
      <button onClick={closeModal} className='modal_close_btn'><img src="Image/menu.png" alt="" /></button>
      <h1 className='modal_title'>Rent <span>{swiperData[currentIndex].text}</span> in Dubai <img src="Image/1.png" alt="" /></h1>
      <div className='Rental-info'>
       <div className='Rental-info-flipped'>
       <p className='modal_text'>Rental date</p>
       <div className='Rental-info-input'>
        <DateRangePicker/>
       </div>
       <p className='modal_text'>Where to bring the car ?</p>
       <div className='Rental-info-input'>
        <input type="text" className='info-input-text' placeholder='From the salon'/>
        <button className='Map-btn'><img src="Image/map (1) 1.png" alt="" className='Map-img'/></button>
       </div>
        <div className='Rental-rate'>
         <h1 className='Rate-title'>Rental rate</h1>
         <div className='Price'>
          <p className='Rate-smalltext'>1-7 day</p>
          <div className='Price-div'>
           <p className='Rate-text'>3.900 AED/1060$</p>
           <p className='Rate-smalltext2'>price for one day</p>
          </div>
         </div>
         <div className='Price'>
          <p className='Rate-smalltext'>7-14 day</p>
          <div className='Price-div'>
           <p className='Rate-text'>3.900 AED/1060$</p>
           <p className='Rate-smalltext2'>price for one day</p>
          </div>
         </div>
         <div className='Price'>
          <p className='Rate-smalltext'>14-30 day</p>
          <div className='Price-div'>
           <p className='Rate-text'>3.900 AED/1060$</p>
           <p className='Rate-smalltext2'>price for one day</p>
          </div>
         </div>
         <div className='Price'>
          <p className='Rate-smalltext'>from 30 days</p>
          <div className='Price-div'>
           <p className='Rate-text'>3.900 AED/1060$</p>
           <p className='Rate-smalltext2'>price for one day</p>
          </div>
         </div>
        </div> 
        <h1 className='Rate-title'>Additionally</h1>
        <div className='Price'>
          <p className='Rate-smalltext'>Security Deposit</p>
          <div className='Price-div'>
           <p className='Rate-text'>3.900 AED/1060$</p>
          </div>
         </div>
         <div className='Price'>
          <p className='Rate-smalltext'>Personal Driver</p>
          <div className='Price-div'>
           <p className='Rate-text'>Avaliable</p>
          </div>
         </div>
        </div>
      </div>
       <div className='Rent-btn'>
        <p className='Rent-btn-text'>Request for a rent</p>
        <button className='Rent-btn2'>15 000 AED / 3 800$</button>
       </div>
     </div>
      <div className='Swiper'>
       <img src={swiperData[currentIndex].image} alt="Swiper Image" className='Swiper-img'/>
       <div className='Swiper-Button'>
       <div className='Swiper-btn'>
        <button onClick={handlePrev} ><img src="Image/Vector (3).png" alt="" className='Swiper-click'/></button>
        <div id='line'></div>
        <button onClick={handleNext}><img src="Image/Vector (3)1.png" alt="" className='Swiper-click'/></button>
        </div>
       </div>
      </div>
    </div>
  );


  return (
    <Layout>
        <Modal className='Modal' isOpen={modalIsOpen} onRequestClose={closeModal}>
      {modalContent}
    </Modal>
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
                            <button onClick={openModal} className='Card_btn'>Rent</button>
                        </div>
                    </div>
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 14.svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Ferrari Roma</div>
                            <button onClick={openModal} className='Card_btn'>Rent</button>
                        </div>
                    </div>
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 177.svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Rolls-Royce Ghost</div>
                            <button onClick={openModal} className='Card_btn'>Rent</button>
                        </div>
                    </div>
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 178.svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Porsche 911 Turbo S</div>
                            <button onClick={openModal} className='Card_btn'>Rent</button>
                        </div>
                    </div>
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 174.svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Lamborghini Urus</div>
                            <button onClick={openModal} className='Card_btn'>Rent</button>
                        </div>
                    </div>
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 175.svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Ferrari Roma</div>
                            <button onClick={openModal} className='Card_btn'>Rent</button>
                        </div>
                    </div>
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 174 (1).svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Lamborghini Urus</div>
                            <button onClick={openModal} className='Card_btn'>Rent</button>
                        </div>
                    </div>
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 175 (1).svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Ferrari Roma</div>
                            <button onClick={openModal} className='Card_btn'>Rent</button>
                        </div>
                    </div>
          </div>
        </section>
    </Layout>
  )
}

export default Cars