import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import Input from 'shared/components/input/input';

const tableContent = () => {
  return [
    {
      title: 'Sport',
      render: data => <Typography component="p">{data.sport}</Typography>
    },
    {
      title: 'Period',
      render: data => <Typography component="p">{data.period}</Typography>
    },
    {
      title: 'Wager Target',
      render: data => <Typography component="p">{data.wagerTarget}</Typography>
    },
    {
      title: 'Call Center',
      render: () => <Input type="number" size="xs" variant="primary" style={{ 'maxWidth': '100px' }} onChange={() => { }} />
    },
    {
      title: 'Internet',
      render: () => <Input type="number" size="xs" variant="primary" style={{ 'maxWidth': '100px' }} onChange={() => { }} />
    },
    {
      title: 'Circled',
      render: () => <Input type="number" size="xs" variant="primary" style={{ 'maxWidth': '100px' }} onChange={() => { }} />
    },
  ];
};

export default tableContent;
