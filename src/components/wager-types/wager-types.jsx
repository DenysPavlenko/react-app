import React, { useState } from 'react';
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

const WagerTypes = () => {
  const [activeWager, setActiveWager] = useState('straight');

  return (
    <div className="wager-types">
      {types.map(({ title, wager }, idx) => (
        <WagerType key={idx} className="wager-types__type" title={title} wager={wager} isActive={activeWager === wager} setActiveWager={() => setActiveWager(wager)} />
      ))}
    </div>
  );
};

export default WagerTypes;
