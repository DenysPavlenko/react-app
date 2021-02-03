import React from 'react';
// Components
import Typography from 'shared/components/typography';
import Input from 'shared/components/input';

const tableFirstRow = (groupInputs, handleGroupInput) => {
  return [
    <Typography component="h5" className="text-bold" >Set all values</Typography>,
    '',
    '',
    <Input type="number" name="callCenter" value={groupInputs.callCenter} size="xs" variant="primary" style={{ 'maxWidth': '100px' }} onChange={handleGroupInput} />,
    <Input type="number" name="internet" value={groupInputs.internet} size="xs" variant="primary" style={{ 'maxWidth': '100px' }} onChange={handleGroupInput} />,
    <Input type="number" name="circled" value={groupInputs.circled} size="xs" variant="primary" style={{ 'maxWidth': '100px' }} onChange={handleGroupInput} />,
  ];
};

export default tableFirstRow;
