import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
// Redux
import { selectSportsWagers, selectTotalWagered, selectTotalPossibleWin } from 'player-app/redux/sports-wagers/selectors';
import { clearSportsWagers } from 'player-app/redux/sports-wagers/actions';
// Components
import Simplebar from 'simplebar-react';
import Typography from 'shared/components/typography/typography';
import WagerTypes from 'player-app/components/wager-types/wager-types';
import Button from 'shared/components/button/button';
import SportsWager from 'player-app/components/sports-wager/sports-wager';
// Styles
import './sports-wagers.sass';

const SportsWagers = ({ sportsWagers, clearSportsWagers, totalWagered, totalPossibleWin }) => {
  const [wagerType, setWagerType] = useState('straight');

  return (
    <div className="sports-wagers">
      <div className="sports-wagers__header">
        <Typography component="h4">Review and confirm</Typography>
        <Typography component="h4">{sportsWagers.length} Selection(s)</Typography>
      </div>
      {sportsWagers.length === 0 ?
        <div className="sports-wagers__empty">
          <Typography component="h4">There are no active wagers</Typography>
        </div>
        :
        <div className="sports-wagers__wrap">
          <WagerTypes currentType={wagerType} handleWagerType={setWagerType} />
          <div className="sports-wagers__list">
            <Simplebar className="custom-scroll">
              {sportsWagers.map(({ id, icon, title, value, scheduled, selection, notes }) => (
                <SportsWager key={id} id={id} icon={icon} title={title} value={value} scheduled={scheduled} selection={selection} notes={notes} />
              ))}
            </Simplebar>
          </div>
          <div className="sports-wagers__totals">
            <Typography component="h4" className="sports-wagers__total">Total Wagered: <span>${totalWagered}</span></Typography>
            <Typography component="h4" className="sports-wagers__total">Total Possible Win: <span>${totalPossibleWin}</span></Typography>
          </div>
          <div className="sports-wagers__buttons">
            <div className="sports-wagers__button">
              <Button variant="danger" fluid onClick={clearSportsWagers}>Clear all</Button>
            </div>
            <div className="sports-wagers__button">
              <Button variant="accent" fluid>Place Wager(s)</Button>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

SportsWagers.propTypes = {
  sportsWagers: PropTypes.array,
  clearSportsWagers: PropTypes.func,
  totalWagered: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  sportsWagers: selectSportsWagers,
  totalWagered: selectTotalWagered,
  totalPossibleWin: selectTotalPossibleWin,
});

const mapDispatchToProps = dispatch => ({
  clearSportsWagers: () => dispatch(clearSportsWagers())
});

export default connect(mapStateToProps, mapDispatchToProps)(SportsWagers);
