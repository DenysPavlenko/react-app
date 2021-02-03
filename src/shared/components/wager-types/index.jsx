import React from 'react';
import PropTypes from 'prop-types';
// Components
import WagerType from 'shared/components/wager-type';
// Styles
import './styles.sass';

const WagerTypes = ({ currentType, handleWagerType, types }) => {
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
  types: PropTypes.array,
  handleWagerType: PropTypes.func,
};

export default WagerTypes;
