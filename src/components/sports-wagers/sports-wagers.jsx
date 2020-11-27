import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
// Redux
import { selectSportsWages } from 'redux/sports-wagers/selectors';
import { clearSportsWagers } from 'redux/sports-wagers/actions';
// Components
import Simplebar from 'simplebar-react';
import Typography from 'components/typography/typography';
import WagerTypes from 'components/wager-types/wager-types';
import Button from 'components/button/button';
import SportsWager from 'components/sports-wager/sports-wager';
// Styles
import './sports-wagers.sass';

const SportsBettings = ({ sportsWages, clearSportsWagers }) => {
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
        <div className="sports-wagers__wrap">
          <WagerTypes />
          <div className="sports-wagers__list">
            <Simplebar className="custom-scroll">
              {sportsWages.map(({ id, icon, title, value, scheduled, selection, notes }) => (
                <SportsWager key={id} id={id} icon={icon} title={title} value={value} scheduled={scheduled} selection={selection} notes={notes} />
              ))}
            </Simplebar>
          </div>
          <div className="sports-wagers__totals">
            <Typography component="h4" className="sports-wagers__total">Total Wagered: <span>$0.00</span></Typography>
            <Typography component="h4" className="sports-wagers__total">Total Possible Win: <span>$0.00</span></Typography>
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

SportsBettings.propTypes = {
  sportsWages: PropTypes.array,
  clearSportsWagers: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  sportsWages: selectSportsWages
});

const mapDispatchToProps = dispatch => ({
  clearSportsWagers: () => dispatch(clearSportsWagers())
});

export default connect(mapStateToProps, mapDispatchToProps)(SportsBettings);
