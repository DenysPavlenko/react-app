import React from 'react';
import classNames from 'classnames';
// Components
import Typography from 'components/typography/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './horses-bet-slip-item.sass';

const HorsesBetSlipItem = ({ id, type, info, details, bets, amount, total, className }) => {
  const classes = classNames({
    'horses-bet-slip-item': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <div className="horses-bet-slip-item__header">
        <Typography component="h4" className="horses-bet-slip-item__title">{type}</Typography>
        <div className="horses-bet-slip-item__close">
          <FontAwesomeIcon icon="times" />
        </div>
      </div>
      <Typography component="p" className="horses-bet-slip-item__info">{info}</Typography>
      <Typography component="p" className="horses-bet-slip-item__details">{details}</Typography>
      <div className="horses-bet-slip-item__footer">
        <Typography component="p" className="horses-bet-slip-item__combination">View combination</Typography>
        <div className="horses-bet-slip-item__total">
          <Typography component="p">{bets} bets @ <span className="horses-bet-slip-item__amount">{amount}</span></Typography>
          <Typography component="h3">Ticket total {total}</Typography>
        </div>
      </div>
    </div>
  );
};

export default HorsesBetSlipItem;
