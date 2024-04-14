import React, { useEffect, useState } from 'react';
import styles from './Select.module.css';

function Select44({option1, option2, option3, option4}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('ENG');

  useEffect(() => {
    const animalSelect = new CustomSelect({
      elem: document.getElementById('city-select'),
      setSelectedOption,
    });

    return () => {};
  }, []);

  function CustomSelect(options) {
    const elem = options.elem;
    const setSelectedOption = options.setSelectedOption;

    elem.onclick = function (event) {
      if (event.target.className === styles.title || event.target.className === styles.arrow) {
        toggle();
      } else if (event.target.tagName === 'LI') {
        setValue(event.target.innerHTML, event.target.dataset.value);
        close();
      }
    };

    let isOpen = false;

    function onDocumentClick(event) {
      if (!elem.contains(event.target)) close();
    }

    function setValue(title, value) {
      setSelectedOption(title);

      const widgetEvent = new CustomEvent('select', {
        bubbles: true,
        detail: {
          title: title,
          value: value,
        },
      });

      elem.dispatchEvent(widgetEvent);
    }

    function toggle() {
      if (isOpen) close();
      else open();
    }

    function open() {
      elem.classList.add(styles.open);
      document.addEventListener('click', onDocumentClick);
      isOpen = true;
    }

    function close() {
      elem.classList.remove(styles.open);
      document.removeEventListener('click', onDocumentClick);
      isOpen = false;
    }
  }

  return (
    <div id="city-select" className={styles.customselect}>
      <button className={styles.title}>
        {selectedOption}
        <img className={styles.arrow} src="./images/arrow-point-to-right 1.svg" alt="" />
      </button>
      <ul>
        <li data-value="bird">{option1}</li>
        <hr className={styles.hr}/>
        <li data-value="fish">{option2}</li>
        <hr className={styles.hr}/>
        <li data-value="animal">{option3}</li>
        <hr className={styles.hr}/>
        <li data-value="dino">{option4}</li>
      </ul>
    </div>
  );
}

export default Select44;
