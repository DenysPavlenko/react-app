import React from 'react';
import classNames from 'classnames';
// Components
import Typography from 'shared/components/typography/typography';
import Close from 'shared/components/close/close';
// Styles
import './horses-bet-slip-item.sass';

const HorsesBetSlipItem = ({ id, type, info, details, bets, amount, total, className, removeHorsesBet }) => {
  const classes = classNames({
    'horses-bet-slip-item': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <div className="horses-bet-slip-item__header">
        <Typography component="h4" className="horses-bet-slip-item__title">{type}</Typography>
        <Close className="horses-bet-slip-item__close" onClick={() => removeHorsesBet(id)} />
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
