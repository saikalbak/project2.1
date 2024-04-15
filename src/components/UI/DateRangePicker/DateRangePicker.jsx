import React from 'react';
import  { useState } from 'react';
import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import './DateRangePicker.css'

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    // Проверка на то, чтобы endDate было всегда позже startDate
    if (endDate && date.getTime() > endDate.getTime()) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    // Проверка на то, чтобы endDate было всегда позже startDate
    if (startDate && date.getTime() < startDate.getTime()) {
      setStartDate(null);
    }
  };

  return (
    <div className='DatePiker'>
      <div className='DatePiker-input'>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="dd/MM/yyyy"
          placeholderText='00.00.00'
        />
      </div>
      <p className='line'></p>
      <div className='DatePiker-input'>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="dd/MM/yyyy"
          placeholderText='00.00.00'
        />
      </div>
    </div>
  );
};

export default DateRangePicker;