import React from 'react';
// Components
import Typography from 'shared/components/typography';
import Button from 'shared/components/button';
// Utils
import handleStatusClass from 'shared/utils/handle-status-class';

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
      render: ({ balance }) => <Typography component="p" className={handleStatusClass(balance)}>{balance}</Typography>
    },
    {
      style: { width: '30%' },
      title: 'Select Agent',
      render: () => <Button variant="default" size="xs" onClick={() => history.push('/')}>Go to This Agent</Button>
    },
  ];
};

export default tableContent;
