import React from 'react';
// Components
import Typography from 'components/typography/typography';
import WagerTypes from 'components/wager-types/wager-types';
import Button from 'components/button/button';
// Styles
import './sports-bettings.sass';

const SportsBettings = () => {
  return (
    <div className="sports-bettings">
      <div className="sports-bettings__header">
        <Typography component="h3">Review and confirm</Typography>
        <Typography component="h3">0 Selection(s)</Typography>
      </div>
      <WagerTypes />
      <div className="sports-bettings__body"></div>
      <div className="sports-bettings__totals">
        <Typography component="h4" className="sports-bettings__total"> Total Wagered: <span>$0.00</span></Typography>
        <Typography component="h4" className="sports-bettings__total">Total Possible Win: <span>$0.00</span></Typography>
      </div>
      <div className="sports-bettings__buttons">
        <div className="sports-bettings__button">
          <Button variant="danger" fluid>Clear all</Button>
        </div>
        <div className="sports-bettings__button">
          <Button variant="accent" fluid>Place Wager(s)</Button>
        </div>
      </div>
    </div>
  );
};

export default SportsBettings;
