import React from 'react';
import PropTypes from 'prop-types';
// Components
import Typography from 'shared/components/typography';
// Styles
import './styles.sass';

const SportsHeaderC = ({ date, spread, moneyline, total, teamTotal, filters }) => {

  const items = [
    { value: spread, name: 'spread' },
    { value: moneyline, name: 'moneyline' },
    { value: total, name: 'total' },
    { value: teamTotal, name: 'team total' }
  ];

  const filteredItems = filters ? items.filter(({ name }) => filters.includes(name)) : items;

  return (
    <div className="sports-header-c">
      <div className="sports__group-1 sports-header-c__left">
        <Typography component="h6">{date}</Typography>
        <Typography component="h6">MAX:</Typography>
      </div>
      {filteredItems.map(({ value }, idx) => (
        <div key={idx} className={`sports__group-${idx + 2}`}>
          <Typography component="p" variant="h6">${value}</Typography>
        </div>
      ))}
    </div>
  );
};

SportsHeaderC.propTypes = {
  date: PropTypes.string,
  spread: PropTypes.string,
  moneyline: PropTypes.string,
  total: PropTypes.string,
  teamTotal: PropTypes.string,
  filters: PropTypes.array,
  isMobile: PropTypes.bool,
};

export default SportsHeaderC;
