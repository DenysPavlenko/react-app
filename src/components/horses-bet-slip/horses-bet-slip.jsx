import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Data
import data from './data';
// Components
import Typography from 'components/typography/typography';
import Button from 'components/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HorsesBetSlipItem from './horses-bet-slip-item/horses-bet-slip-item';
// Styles
import './horses-bet-slip.sass';

const HorsesBetSlip = ({ defaultColorScheme }) => {
  const classes = classNames({
    'horses-bet-slip': true,
    [`horses-bet-slip--${defaultColorScheme}`]: defaultColorScheme
  });

  const totalBets = data.reduce((acc, item) => acc + parseInt(item.bets), 0);
  const slipTotal = data.reduce((acc, item) => acc + parseInt(item.bets) * parseInt(item.amount), 0);

  return (
    <div className={classes}>
      <div className="horses-bet-slip__header">
        <FontAwesomeIcon icon="shopping-cart" className="horses-bet-slip__header-icon" />
        <Typography component="h4" className="horses-bet-slip__header-title">Bet slip</Typography>
        <Typography component="span" variant="h5" className="horses-bet-slip__header-counter">1</Typography>
      </div>
      <div className="horses-bet-slip__items">
        {data.map(({ id, ...otherProps }) => (
          <HorsesBetSlipItem key={id} id={id} {...otherProps} className="horses-bet-slip__item" />
        ))}
      </div>
      <div className="horses-bet-slip__footer">
        <Typography component="h4" className="horses-bet-slip__total">
          2 tickets with {totalBets} bets <br />
            Bet slip total USD {slipTotal}
        </Typography>
        <div className="horses-bet-slip__buttons">
          <div className="horses-bet-slip__button">
            <Button fluid variant="danger" size="sm">Remove all bets</Button>
          </div>
          <div className="horses-bet-slip__button">
            <Button fluid variant="accent" size="sm">Submit all bets</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

HorsesBetSlip.propTypes = {
  defaultColorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(HorsesBetSlip);
