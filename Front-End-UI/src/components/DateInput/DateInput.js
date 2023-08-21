import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import './DateInput.css';
import 'react-datepicker/dist/react-datepicker.css';
// import CalendarIcon from './CalendarIcon'; // You need to create this icon component

const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsDatePickerOpen(false);
  };

  return (
    <div className="date-input-container">
      <div className="input-wrapper">
        <input
          type="text"
          value={selectedDate ? selectedDate.toDateString() : ''}
          onClick={() => setIsDatePickerOpen(true)}
          readOnly
        />
        {/* <CalendarIcon onClick={() => setIsDatePickerOpen(true)} /> */}
      </div>
      {isDatePickerOpen && (
        <div className="date-picker-container">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            showPopperArrow={false}
            onClickOutside={() => setIsDatePickerOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default DateInput;
