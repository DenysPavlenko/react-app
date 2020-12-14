import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';

const columns = [
  {
    title: 'date',
    render: data => {
      return <Typography component="p">{data.date}</Typography>
    },
  },
  {
    title: 'Won/Lost',
    render: data => {
      return <Typography component="p">{data.wonLost}</Typography>
    },
  },
  {
    title: '# of Wagers',
    render: data => {
      return <Typography component="p">{data.ofWagers}</Typography>
    },
  },
  {
    title: 'Volume',
    render: data => {
      return <Typography component="p">{data.volume}</Typography>
    },
  },
  {
    title: 'Average Bet',
    render: data => {
      return <Typography component="p">{data.averageBet}</Typography>
    },
  },
  {
    title: 'Hold %',
    render: data => {
      return <Typography component="p">{data.hold}</Typography>
    },
  },
];

const tableContent = category => {
  return columns.filter(({ title }) => {
    if (category === 'football') {
      return title !== 'Hold %'
    } else {
      return title !== 'Volume'
    }
  });
};

export default tableContent;
