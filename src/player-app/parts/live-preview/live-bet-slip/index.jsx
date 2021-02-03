import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Components
import Typography from 'shared/components/typography';
import Button from 'shared/components/button';
import Input from 'shared/components/input';
// Redux
import { selectColorScheme } from 'shared/redux/color-scheme/selectors';
// Styles
import './styles.sass';

const LiveBetSlip = ({ colorScheme }) => {
  const classes = classNames({
    'live-bet-slip': true,
    [`theme-${colorScheme}`]: colorScheme,
  });

  return (
    <div className={classes}>
      <div className="live-bet-slip__header">
        <Typography component="h3" className="live-bet-slip__header-title">Bet Slip</Typography>
        <div className="live-bet-slip__header-buttons">
          <Button type="button" className="live-bet-slip__header-button" variant="white" size="xs">Straight</Button>
          <Button type="button" className="live-bet-slip__header-button" variant="white" size="xs">Parlay</Button>
        </div>
      </div>
      <div className="live-bet-slip__total">
        <Typography component="p">Total odds: 0</Typography>
        <Typography component="p">Total bets: 0</Typography>
      </div>
      <div className="live-bet-slip__bets">
        <div className="live-bet-slip__bet">
          <Typography component="p" variant="p-sm" className="live-bet-slip__bet-title">Stake:</Typography>
          <Input type="number" className="live-bet-slip__bet-input" size="xs" variant="light" />
          <div className="live-bet-slip__bet-variants">
            <Typography component="p" variant="p-sm" className="live-bet-slip__bet-variant">10</Typography>
            <Typography component="p" variant="p-sm" className="live-bet-slip__bet-variant">20</Typography>
            <Typography component="p" variant="p-sm" className="live-bet-slip__bet-variant">50</Typography>
            <Typography component="p" variant="p-sm" className="live-bet-slip__bet-variant">100</Typography>
            <Typography component="p" variant="p-sm" className="live-bet-slip__bet-variant">{`<<`}</Typography>
          </div>
        </div>
        <div className="live-bet-slip__bet">
          <Typography component="p" variant="p-sm" className="live-bet-slip__bet-title">To Win:</Typography>
          <Input type="number" className="live-bet-slip__bet-input" size="xs" variant="light" />
          <div className="live-bet-slip__bet-variants">
            <Typography component="p" variant="p-sm" className="live-bet-slip__bet-variant">10</Typography>
            <Typography component="p" variant="p-sm" className="live-bet-slip__bet-variant">20</Typography>
            <Typography component="p" variant="p-sm" className="live-bet-slip__bet-variant">50</Typography>
            <Typography component="p" variant="p-sm" className="live-bet-slip__bet-variant">100</Typography>
            <Typography component="p" variant="p-sm" className="live-bet-slip__bet-variant">{`<<`}</Typography>
          </div>
        </div>
      </div>
      <div className="live-bet-slip__place">
        <Button type="button" className="live-bet-slip__header-button" variant="white" fluid>Place</Button>
      </div>
    </div>
  );
};

LiveBetSlip.propTypes = {
  colorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(LiveBetSlip);
