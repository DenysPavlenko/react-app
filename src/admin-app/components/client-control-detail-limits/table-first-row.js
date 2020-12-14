import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import Input from 'shared/components/input/input';

const tableFirstRow = () => {
  return [
    <Typography component="h5" className="text-bold" >Set all values</Typography>,
    '',
    '',
    <Input type="number" size="xs" variant="primary" style={{ 'maxWidth': '100px' }} onChange={() => { }} />,
    <Input type="number" size="xs" variant="primary" style={{ 'maxWidth': '100px' }} onChange={() => { }} />,
    <Input type="number" size="xs" variant="primary" style={{ 'maxWidth': '100px' }} onChange={() => { }} />,
  ];
};

export default tableFirstRow;
