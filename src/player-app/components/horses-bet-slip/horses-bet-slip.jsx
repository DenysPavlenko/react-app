import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'shared/redux/color-scheme/selectors';
import { selectHorsesBets, selectTotalHorsesBets, selectTotalHorsesSlips } from 'player-app/redux/horses-bets/selectors';
import { removeHorsesBet, clearHorsesBet } from 'player-app/redux/horses-bets/actions';
// Components
import Typography from 'shared/components/typography/typography';
import Button from 'shared/components/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HorsesBetSlipItem from './horses-bet-slip-item/horses-bet-slip-item';
// Styles
import './horses-bet-slip.sass';

const HorsesBetSlip = ({ defaultColorScheme, horsesBets, removeHorsesBet, clearHorsesBet, totalHorsesBets, totalHorsesSlips }) => {
  const classes = classNames({
    'horses-bet-slip': true,
    [`theme-${defaultColorScheme}`]: defaultColorScheme
  });

  return (
    <div className={classes}>
      <div className="horses-bet-slip__header">
        <FontAwesomeIcon icon="shopping-cart" className="horses-bet-slip__header-icon" />
        <Typography component="h4" className="horses-bet-slip__header-title">Bet slip</Typography>
        <Typography component="span" variant="h5" className="horses-bet-slip__header-counter">{horsesBets.length}</Typography>
      </div>
      {horsesBets.length === 0 &&
        <Typography component="p" className="horses-bet-slip__empty">There are no racing bets in your bet slip. To place a bet choose the racetrack, race and runners and send them to your bet slip.</Typography>
      }
      <div className="horses-bet-slip__items">
        {horsesBets.map(({ id, ...otherProps }) => (
          <HorsesBetSlipItem key={id} className="horses-bet-slip__item" id={id} removeHorsesBet={removeHorsesBet} {...otherProps} />
        ))}
      </div>
      {horsesBets.length > 0 &&
        <div className="horses-bet-slip__footer">
          <Typography component="h4" className="horses-bet-slip__total">
            2 tickets with {totalHorsesBets} bets <br />
            Bet slip total USD {totalHorsesSlips}
          </Typography>
          <div className="horses-bet-slip__buttons">
            <div className="horses-bet-slip__button">
              <Button fluid variant="danger" size="sm" onClick={clearHorsesBet}>Remove all bets</Button>
            </div>
            <div className="horses-bet-slip__button">
              <Button fluid variant="accent" size="sm">Submit all bets</Button>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

HorsesBetSlip.propTypes = {
  defaultColorScheme: PropTypes.string,
  horsesBets: PropTypes.array,
  removeHorsesBet: PropTypes.func,
  clearHorsesBet: PropTypes.func,
  totalHorsesBets: PropTypes.number,
  totalHorsesSlips: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
  totalHorsesBets: selectTotalHorsesBets,
  totalHorsesSlips: selectTotalHorsesSlips,
  horsesBets: selectHorsesBets,
});

const mapDipsatchToProps = dispatch => ({
  removeHorsesBet: (id) => dispatch(removeHorsesBet(id)),
  clearHorsesBet: () => dispatch(clearHorsesBet()),
});

export default connect(mapStateToProps, mapDipsatchToProps)(HorsesBetSlip);
