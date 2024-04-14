import React, { useState } from 'react';
import './Select2.css'

function Select2() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['ENG', 'RU', 'AR', 'KG'];

  const handleCheckboxChange = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="select-container2">
      <input type="checkbox" id="select-checkbox2" onChange={handleCheckboxChange} />
      <label htmlFor="select-checkbox2" className="select-label2">{selectedOption ? selectedOption : 'ENG'} <img src="./images/arrow-point-to-right 1.svg" alt="" /></label>
      {isOpen && (
        <ul className="select-options2">
          {options.map((option, index) => (
            <li key={index} className="title" id='select-option2' onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select2;