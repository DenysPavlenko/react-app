import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';

const tableContent = () => {
  return [
    {
      title: 'Game',
      render: ({ game }) => <Typography component="p">{game}</Typography>
    },
    {
      title: 'Risk/Win',
      render: ({ riskWin }) => <Typography component="p">{riskWin}</Typography>
    },
  ]
};

export default tableContent;
