import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
// Utils
import tableDangerClass from 'shared/utils/table-danger-class';

const columns = [
  {
    title: 'date',
    render: data => <Typography component="p">{data.date}</Typography>
  },
  {
    title: 'Won/Lost',
    render: data => <Typography component="p" className={tableDangerClass(data.wonLost)}>{data.wonLost}</Typography>
  },
  {
    title: '# of Wagers',
    render: data => <Typography component="p" className={tableDangerClass(data.ofWagers)}>{data.ofWagers}</Typography>
  },
  {
    title: 'Volume',
    render: data => <Typography component="p" className={tableDangerClass(data.volume)}>{data.volume}</Typography>
  },
  {
    title: 'Average Bet',
    render: data => <Typography component="p" className={tableDangerClass(data.averageBet)}>{data.averageBet}</Typography>
  },
  {
    title: 'Hold %',
    render: data => <Typography component="p" className={tableDangerClass(data.hold)}>{data.hold}</Typography>
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
