import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
// Redux
import { selectSportsWages } from 'redux/sports-wagers/selectors';
// Components
import Typography from 'components/typography/typography';
import WagerTypes from 'components/wager-types/wager-types';
import Button from 'components/button/button';
import SportsWager from 'components/sports-wager/sports-wager';
// Styles
import './sports-wagers.sass';

const SportsBettings = ({ sportsWages }) => {
  return (
    <div className="sports-wagers">
      <div className="sports-wagers__header">
        <Typography component="h4">Review and confirm</Typography>
        <Typography component="h4">{sportsWages.length} Selection(s)</Typography>
      </div>
      {sportsWages.length === 0 ?
        <div className="sports-wagers__empty">
          <Typography component="h4">There are no active wagers</Typography>
        </div>
        :
        <>
          <WagerTypes />
          <div className="sports-wagers__list">
            {sportsWages.map(({ id, icon, title, value, scheduled, selection, notes }) => (
              <SportsWager key={id} id={id} icon={icon} title={title} value={value} scheduled={scheduled} selection={selection} notes={notes} />
            ))}
          </div>
          <div className="sports-wagers__totals">
            <Typography component="h4" className="sports-wagers__total">Total Wagered: <span>$0.00</span></Typography>
            <Typography component="h4" className="sports-wagers__total">Total Possible Win: <span>$0.00</span></Typography>
          </div>
          <div className="sports-wagers__buttons">
            <div className="sports-wagers__button">
              <Button variant="danger" fluid>Clear all</Button>
            </div>
            <div className="sports-wagers__button">
              <Button variant="accent" fluid>Place Wager(s)</Button>
            </div>
          </div>
        </>
      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sportsWages: selectSportsWages
});

export default connect(mapStateToProps)(SportsBettings);
