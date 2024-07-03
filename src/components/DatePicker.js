import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ selected, onChange, minDate, maxDate }) => (
  <DatePicker
    selected={selected}
    onChange={onChange}
    minDate={minDate}
    maxDate={maxDate}
    dateFormat="yyyy/MM/dd"
  />
);

export default CustomDatePicker;
