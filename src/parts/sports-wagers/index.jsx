import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
// Redux
import { selectSportsWagers, selectTotalWagered, selectTotalPossibleWin } from 'redux/sports-wagers/selectors';
import { clearSportsWagers } from 'redux/sports-wagers/actions';
import { hideSportsPageWagers } from 'redux/sports-page-wagers/actions';
// Components
import Simplebar from 'simplebar-react';
import Typography from 'components/typography';
import Button from 'components/button';
import SportsWager from './sports-wager';
// Styles
import './styles.sass';

const SportsWagers = ({ sportsWagers, clearSportsWagers, totalWagered, totalPossibleWin, hideSportsPageWagers }) => {
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
              <Button variant="danger" fluid onClick={() => { clearSportsWagers(); hideSportsPageWagers() }}>Clear all</Button>
            </div>
            <div className="sports-wagers__button">
              <Button variant="accent" fluid>Place Wager(s)</Button>
            </div>
            <div className="sports-wagers__button">
              <Button variant="accent" onClick={hideSportsPageWagers} fluid>Hide wagers</Button>
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
  hideSportsPageWagers: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  sportsWagers: selectSportsWagers,
  totalWagered: selectTotalWagered,
  totalPossibleWin: selectTotalPossibleWin
});

const mapDispatchToProps = dispatch => ({
  clearSportsWagers: () => dispatch(clearSportsWagers()),
  hideSportsPageWagers: () => dispatch(hideSportsPageWagers())
});

export default connect(mapStateToProps, mapDispatchToProps)(SportsWagers);
