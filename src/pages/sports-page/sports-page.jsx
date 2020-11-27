import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectSportsPageSchedule } from 'redux/sports-page-schedule/selectors';
// Components
import Search from 'components/search/search';
import SportsSchedule from 'components/sports-schedule/sports-schedule';
import SportsPreview from 'components/sports-preview/sports-preview';
import SportsWagers from 'components/sports-wagers/sports-wagers';
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
