import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
// Utils
import setDangerClass from 'shared/utils/set-danger-class';

const columns = [
  {
    title: 'date',
    render: data => <Typography component="p">{data.date}</Typography>
  },
  {
    title: 'Won/Lost',
    render: data => <Typography component="p" className={setDangerClass(data.wonLost)}>{data.wonLost}</Typography>
  },
  {
    title: '# of Wagers',
    render: data => <Typography component="p" className={setDangerClass(data.ofWagers)}>{data.ofWagers}</Typography>
  },
  {
    title: 'Volume',
    render: data => <Typography component="p" className={setDangerClass(data.volume)}>{data.volume}</Typography>
  },
  {
    title: 'Average Bet',
    render: data => <Typography component="p" className={setDangerClass(data.averageBet)}>{data.averageBet}</Typography>
  },
  {
    title: 'Hold %',
    render: data => <Typography component="p" className={setDangerClass(data.hold)}>{data.hold}</Typography>
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
