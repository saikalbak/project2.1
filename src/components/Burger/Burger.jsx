import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Burger.module.css'
import Select from '../UI/Select/Select'
import Select2 from '../UI/Select2/Select2'

function Burger() {
  return (
    <>
      <div className={styles.mobileMenu}>
        <input type="checkbox" id='checkbox' className={styles.mobileMenu__checkbox}></input>
        <label htmlFor='checkbox' className={styles.mobileMenu__btn}>
          <div className={styles.mobileMenu__icon}></div>
        </label>
        <div className={styles.links}>
          <Link className={styles.link}>Car List</Link>
          <Link className={styles.link}>Yacht List</Link>
          <Link className={styles.link}>Chauffeur</Link>
        </div>
        <div className={styles.logo}>
            <img src="./images/Group.svg" alt="" />
            <img src="./images/TRINITYLOGO 2.svg" alt="" />
            <img src="./images/Vector.svg" alt="" />
        </div>
        <div className={styles.logo2}>
            <img src="./images/Group.svg" alt="" id={styles.logo2}/>
        </div>
        <div className={styles.mobileMenu__container}>
          <ul className={styles.mobileMenu__list}>
            <li><Link to='/cars' className='link' id={styles.link}>Car List</Link></li>
            <li><Link to='cars' className='link' id={styles.link}>Yacht list</Link></li>
            <li><Link className='link' id={styles.link}>Chauffeur</Link></li>
            <li><Link to='/conditions' className='link' id={styles.link}>Conditions</Link></li>
            <li><Link className='link' id={styles.link}>Testimonials</Link></li>
            <li><Link className='link' id={styles.link}>Articles</Link></li>
            <li><Link to='/about' className='link' id={styles.link}>About Us</Link></li>
            <li><Link className='link' id={styles.link}>Contact</Link></li>
          </ul>
          <hr className={styles.mobileMenu__hr}/>
          <div className={styles.mobileMenu__info}>
          <div className='text' id={styles.mobileMenu__address}>24 4th St - Al Quoz - Al Quoz Industrial Area 3 - Dubai</div>
          <div className='boldtext' id={styles.mobileMenu__number}>+971 58 590 7875</div>
          </div>
        </div>
        <div className={styles.selects}>
          <div className="boldtext" id={styles.number}>+971 58 590 7875</div>
          <Select></Select>
          <Select2></Select2>
        </div>
        <div className={styles.none}>
        <Select2></Select2>
        </div>
      </div>
    </>
  )
}

export default Burger