import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import Button from 'shared/components/button/button';
// Utils
import setDangerClass from 'shared/utils/set-danger-class';

const tableContent = history => {
  return [
    {
      style: { width: '35%' },
      title: 'Agent ID',
      render: ({ id }) => <Typography component="p">{id}</Typography>
    },
    {
      style: { width: '35%' },
      title: 'Balance',
      render: ({ balance }) => <Typography component="p" className={setDangerClass(balance)}>{balance}</Typography>
    },
    {
      style: { width: '30%' },
      title: 'Select Agent',
      render: () => <Button variant="default" size="xs" onClick={() => history.push('/')}>Got to this agent</Button>
    },
  ];
};

export default tableContent;
