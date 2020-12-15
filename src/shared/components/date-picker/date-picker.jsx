import React from 'react';
// Components
import Flatpickr from 'react-flatpickr';
import Input from 'shared/components/input/input';

const DatePicker = ({ date, setDate, ...otherPorps }) => {
  return (
    <Flatpickr
      value={date}
      onChange={(date, shortDate) => setDate(date, shortDate)}
      render={
        ({ defaultValue }, ref) => {
          return <Input value={defaultValue} ref={ref} {...otherPorps} />
        }
      }
    />
  );
};

export default DatePicker;
