import React from 'react';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './styles.sass';

const items = [
  { title: 'spread', value: 'spread', toggleValue: ['moneyline', 'total'] },
  { title: 'moneyline', value: 'moneyline', toggleValue: ['spread', 'total'] },
  { title: 'total', value: 'total', toggleValue: ['team total'] },
  { title: 'team total', value: 'team total', toggleValue: ['spread', 'total'] },
];

const SportsHeaderB = ({ filters, setFilters, isMobile }) => {

  const filteredItems = filters ? items.filter(({ value }) => filters.includes(value)) : items

  return (
    <div className="sports-header-b">
      <div className="sports__group-1"></div>
      {filteredItems.map(({ title, toggleValue }, idx) => (
        <div key={idx} className={`sports__group-${idx + 2} sports-header-b__item`} onClick={() => isMobile && setFilters(toggleValue)}>
          <Typography component="h5">{title}</Typography>
          {isMobile && <FontAwesomeIcon className="sports-header-b__icon" icon="sort" />}
        </div>
      ))}
    </div>
  );
};

SportsHeaderB.propTypes = {
  filters: PropTypes.array,
  setFilters: PropTypes.func,
  isMobile: PropTypes.bool,
};

export default SportsHeaderB;
