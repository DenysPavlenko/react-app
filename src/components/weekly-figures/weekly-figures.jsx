import React from 'react';
// Components
import Select from 'components/select/select';
import Typography from 'components/typography/typography';
// Styles
import './weekly-figures.sass';

const items = [
  { title: 'Carry', value: '-226.5' },
  { title: 'Mon(11/30)', value: '0.00' },
  { title: 'Tue(12/1)', value: '0.00' },
  { title: 'Wed(12/2)', value: '0.00' },
  { title: 'Thu(12/3)', value: '0.00' },
  { title: 'Fri(12/4)', value: '0.00' },
  { title: 'Sat(12/5)', value: '0.00' },
  { title: 'Sun(12/6)', value: '0.00' },
  { title: 'Transactions', value: '226.5' },
  { title: 'End Balance', value: '0.00' },
];

const WeeklyFigures = () => {
  return (
    <div className="weekly-figures">
      <Typography component="h2" className="weekly-figures__heading">Weekly figures</Typography>
      <Select
        className="weekly-figures__select"
        onChange={() => { }}
        options={[
          { label: 'This week', value: '0' },
          { label: 'Last Week', value: '1' },
          { label: `2 Week's ago`, value: '2' },
          { label: `3 Week's ago`, value: '3' },
          { label: `4 Week's ago`, value: '4' },
          { label: `5 Week's ago`, value: '5' },
          { label: `6 Week's ago`, value: '6' },
          { label: `7 Week's ago`, value: '7' },
          { label: `8 Week's ago`, value: '8' },
          { label: `9 Week's ago`, value: '9' },
          { label: `10 Week's ago`, value: '10' },
          { label: `11 Week's ago`, value: '11' },
          { label: `12 Week's ago`, value: '12' },
        ]}
      />
      <div className="weekly-figures__items">
        {items.map(({ title, value }, idx) => {
          const textColor = (+value < 0 && 'text-danger') || (+value > 0 && 'text-accent') || '';
          return (
            <div key={idx} className="weekly-figures__item">
              <Typography component="h5">{title}</Typography>
              <Typography component="h5" className={textColor}>${value}</Typography>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default WeeklyFigures;
