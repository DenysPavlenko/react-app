import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography/typography';
import Button from 'components/button/button';
import Input from 'components/input/input';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Styles
import './bet-slip.sass';

const BetSlip = ({ defaultColorScheme }) => {
  const classes = classNames({
    'bet-slip': true,
    [`bet-slip--${defaultColorScheme}`]: defaultColorScheme,
  });

  return (
    <div className={classes}>
      <div className="bet-slip__header">
        <Typography component="h3" className="bet-slip__header-title">Bet Slip</Typography>
        <div className="bet-slip__header-buttons">
          <Button type="button" className="bet-slip__header-button" variant="white" size="xs">Straight</Button>
          <Button type="button" className="bet-slip__header-button" variant="white" size="xs">Parlay</Button>
        </div>
      </div>
      <div className="bet-slip__total">
        <Typography component="p">Total odds: 0</Typography>
        <Typography component="p">Total bets: 0</Typography>
      </div>
      <div className="bet-slip__bets">
        <div className="bet-slip__bet">
          <Typography component="p" variant="p-sm" className="bet-slip__bet-title">Stake:</Typography>
          <Input type="number" className="bet-slip__bet-input" size="xs" />
          <div className="bet-slip__bet-variants">
            <Typography component="p" variant="p-sm" className="bet-slip__bet-variant">10</Typography>
            <Typography component="p" variant="p-sm" className="bet-slip__bet-variant">20</Typography>
            <Typography component="p" variant="p-sm" className="bet-slip__bet-variant">50</Typography>
            <Typography component="p" variant="p-sm" className="bet-slip__bet-variant">100</Typography>
            <Typography component="p" variant="p-sm" className="bet-slip__bet-variant">{`<<`}</Typography>
          </div>
        </div>
        <div className="bet-slip__bet">
          <Typography component="p" variant="p-sm" className="bet-slip__bet-title">To Win:</Typography>
          <Input type="number" className="bet-slip__bet-input" size="xs" />
          <div className="bet-slip__bet-variants">
            <Typography component="p" variant="p-sm" className="bet-slip__bet-variant">10</Typography>
            <Typography component="p" variant="p-sm" className="bet-slip__bet-variant">20</Typography>
            <Typography component="p" variant="p-sm" className="bet-slip__bet-variant">50</Typography>
            <Typography component="p" variant="p-sm" className="bet-slip__bet-variant">100</Typography>
            <Typography component="p" variant="p-sm" className="bet-slip__bet-variant">{`<<`}</Typography>
          </div>
        </div>
      </div>
      <div className="bet-slip__place">
        <Button type="button" className="bet-slip__header-button" variant="white" fluid>Place</Button>
      </div>
    </div>
  );
};

BetSlip.propTypes = {
  defaultColorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(BetSlip);