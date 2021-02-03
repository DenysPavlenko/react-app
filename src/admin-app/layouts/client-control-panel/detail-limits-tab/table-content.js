import React from 'react';
// Components
import Typography from 'shared/components/typography';
import Input from 'shared/components/input';

const tableContent = (clientInputs, handleInput) => {
  const setValue = name => clientInputs[name] ? clientInputs[name] : '';
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
      render: ({ callCenter }) => <Input type="number" name={callCenter.name} value={setValue(callCenter.name)} size="xs" variant="primary" style={{ 'maxWidth': '100px' }} onChange={handleInput} />
    },
    {
      title: 'Internet',
      render: ({ internet }) => <Input type="number" name={internet.name} value={setValue(internet.name)} size="xs" variant="primary" style={{ 'maxWidth': '100px' }} onChange={handleInput} />
    },
    {
      title: 'Circled',
      render: ({ circled }) => <Input type="number" name={circled} value={setValue(circled.name)} size="xs" variant="primary" style={{ 'maxWidth': '100px' }} onChange={handleInput} />
    },
  ];
};

export default tableContent;
