import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectSportsPageSchedule } from 'player-app/redux/sports-page-schedule/selectors';
// Components
import SportsSchedule from 'player-app/components/sports-schedule/sports-schedule';
import Search from 'shared/components/search/search';
import SportsPreview from 'player-app/components/sports-preview/sports-preview';
import SportsWagers from 'player-app/components/sports-wagers/sports-wagers';
// Styles
import './sports-page.sass';

const SportsPage = ({ isScheduleShown }) => {
  return (
    <div className="sports-page">
      <div className="sports-page__row">
        <div className={`sports-page__left ${isScheduleShown ? 'is-active' : ''}`}>
          <SportsSchedule />
        </div>
        <div className="sports-page__center">
          <Search className="sports-page__search" />
          <SportsPreview />
        </div>
        <div className="sports-page__right">
          <SportsWagers />
        </div>
      </div>
    </div>
  );
};

SportsPage.propTypes = {
  isScheduleShown: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isScheduleShown: selectSportsPageSchedule
});

export default connect(mapStateToProps)(SportsPage);
