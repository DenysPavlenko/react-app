import React from 'react';
import PropTypes from 'prop-types';
// Components
import WagerType from 'components/wager-type/wager-type';
// Styles
import './wager-types.sass';

// Data
const types = [
  { wager: 'straight', title: 'Straight' },
  { wager: 'parlay', title: 'Parlay' },
  { wager: 'teaser', title: 'Teaser' },
  { wager: 'ifBet', title: 'If bet' },
  { wager: 'reverse', title: 'reverse' },
];

const WagerTypes = ({ currentType, handleWagerType }) => {
  return (
    <div className="wager-types">
      {types.map(({ title, wager }, idx) => (
        <WagerType key={idx} className="wager-types__type" title={title} wager={wager} isActive={currentType === wager.toLowerCase()} onClick={() => handleWagerType(wager.toLowerCase())} />
      ))}
    </div>
  );
};

WagerTypes.propTypes = {
  currentType: PropTypes.string,
  handleWagerType: PropTypes.func,
};


export default WagerTypes;
