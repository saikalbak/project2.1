import React, { useState } from 'react';
import styles from './Card.module.css';

function Card() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsVisible1(!isVisible1);
  };

  const handleCheckboxChange2 = () => {
    setIsVisible2(!isVisible2);
  };

  const handleCheckboxChange3 = () => {
    setIsVisible3(!isVisible3);
  };

  const handleCheckboxChange4 = () => {
    setIsVisible4(!isVisible4);
  };

  const handleCheckboxChange5 = () => {
    setIsVisible5(!isVisible5);
  };

  const handleCheckboxChange6 = () => {
    setIsVisible6(!isVisible6);
  };
  
  const handleCheckboxChange7 = () => {
    setIsVisible7(!isVisible7);
  };

  return (
    <div className={styles.cards}>
      <div className={styles.sectionCard}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={isVisible1}
            onChange={handleCheckboxChange1}
            className={styles.checkboxInput}
          />
          <span className={styles.checkboxCustom}></span>
          <span className='title' id={styles.checkboxText}>Requirements for Customers</span>
        </label>
        {isVisible1 && (
          <p className='text' id={styles.Text}>
            For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.
          </p>
        )}
      </div>
      <div className={styles.sectionCard}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={isVisible2}
            onChange={handleCheckboxChange2}
            className={styles.checkboxInput}
          />
          <span className={styles.checkboxCustom}></span>
          <span className='title' id={styles.checkboxText}>How can I add another driver?</span>
        </label>
        {isVisible2 && (
          <p className='text' id={styles.Text}>
            For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.
          </p>
        )}
      </div>
      <div className={styles.sectionCard}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={isVisible2}
            onChange={handleCheckboxChange3}
            className={styles.checkboxInput}
          />
          <span className={styles.checkboxCustom}></span>
          <span className='title' id={styles.checkboxText}>Can I order delivery or return of a car?</span>
        </label>
        {isVisible3 && (
          <p className='text' id={styles.Text}>
            For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.
          </p>
        )}
      </div>
      <div className={styles.sectionCard}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={isVisible2}
            onChange={handleCheckboxChange4}
            className={styles.checkboxInput}
          />
          <span className={styles.checkboxCustom}></span>
          <span className='title' id={styles.checkboxText}>Where can I use a rented car?</span>
        </label>
        {isVisible4 && (
          <p className='text' id={styles.Text}>
            For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.
          </p>
        )}
      </div>
      <div className={styles.sectionCard}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={isVisible2}
            onChange={handleCheckboxChange5}
            className={styles.checkboxInput}
          />
          <span className={styles.checkboxCustom}></span>
          <span className='title' id={styles.checkboxText}>Are there any extra charges?</span>
        </label>
        {isVisible5 && (
          <p className='text' id={styles.Text}>
            For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.
          </p>
        )}
      </div>
      <div className={styles.sectionCard}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={isVisible2}
            onChange={handleCheckboxChange6}
            className={styles.checkboxInput}
          />
          <span className={styles.checkboxCustom}></span>
          <span className='title' id={styles.checkboxText}>How can I book a car?</span>
        </label>
        {isVisible6 && (
          <p className='text' id={styles.Text}>
            For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.
          </p>
        )}
      </div>
      <div className={styles.sectionCard}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={isVisible2}
            onChange={handleCheckboxChange7}
            className={styles.checkboxInput}
          />
          <span className={styles.checkboxCustom}></span>
          <span className='title' id={styles.checkboxText}>What is not allowed when renting a car?</span>
        </label>
        {isVisible7 && (
          <p className='text' id={styles.Text}>
            For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
