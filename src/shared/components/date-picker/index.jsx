import React from 'react';
// Components
import Flatpickr from 'react-flatpickr';
import Input from 'shared/components/input';

const DatePicker = ({ name, value, onChange, options, ...otherPorps }) => {
  return (
    <Flatpickr
      options={{ disableMobile: "true", ...options }}
      value={value}
      onChange={(fullDate, shortDate) => onChange({ target: { name, value: shortDate } })}
      render={(data, ref) => <Input ref={ref} {...otherPorps} />}
    />
  );
};

export default DatePicker;
