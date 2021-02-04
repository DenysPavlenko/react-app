import React from 'react';
// Components
import Typography from 'components/typography';

const tableContent = () => (
  [
    {
      title: 'Description',
      render: wager => <Typography component="p">{wager.description}</Typography>
    },
    {
      title: 'Risk/Win',
      render: wager => <Typography component="p">{wager.riskWin}</Typography>
    },
  ]
);

export default tableContent;
