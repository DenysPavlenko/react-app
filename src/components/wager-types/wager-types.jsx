import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
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

const WagerTypes = ({ defaultColorScheme }) => {
  const [activeWager, setActiveWager] = useState('straight');

  return (
    <div className="wager-types">
      {types.map(({ title, wager }, idx) => (
        <WagerType key={idx} className="wager-types__type" title={title} wager={wager} background={defaultColorScheme} isActive={activeWager === wager} onClick={() => setActiveWager(wager)} />
      ))}
      <WagerType className="wager-types__type" title="refresh" wager="refresh" background="accent-blue" icon="redo" />
      <WagerType className="wager-types__type" title="continue" wager="continue" background="accent-green" icon="chevron-right" />
    </div>
  );
};

WagerTypes.propTypes = {
  defaultColorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme
});

export default connect(mapStateToProps)(WagerTypes);
