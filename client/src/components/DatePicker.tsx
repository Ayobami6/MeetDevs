import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// DatePickerComponent is a functional component that returns a DatePicker
const DatePickerComponent: React.FC = () => {
  // State for selected date
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Return DatePicker with necessary props
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date: Date) => setSelectedDate(date)}
      dateFormat="dd/MM/yyyy"
      isClearable
      placeholderText="Select a date"
    />
  );
};

export default DatePickerComponent;
