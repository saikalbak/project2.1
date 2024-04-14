import React, { useState } from 'react';
import './Select.css'

function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['Dubai', 'Moscow', 'Budapest', 'Wiesbaden'];

  const handleCheckboxChange = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="select-container">
      <input type="checkbox" id="select-checkbox" onChange={handleCheckboxChange} />
      <label htmlFor="select-checkbox" className="select-label">{selectedOption ? selectedOption : 'DUBAI'} <img src="./images/arrow-point-to-right 1.svg" alt="" /></label>
      {isOpen && (
        <ul className="select-options">
          {options.map((option, index) => (
            <li key={index} className="title" id='select-option' onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;