import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withBreakpoints } from 'react-breakpoints';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectSportsPageSchedule } from 'redux/sports-page-schedule/selectors';
// Components
import Search from 'components/search/search';
import SportsSchedule from 'components/sports-schedule/sports-schedule';
import WagerTypes from 'components/wager-types/wager-types';
import SportsPreview from 'components/sports-preview/sports-preview';
// Styles
import './sports-page.sass';

const SportsPage = ({ isScheduleShown, breakpoints, currentBreakpoint }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (breakpoints[currentBreakpoint] < breakpoints.lg) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [breakpoints, currentBreakpoint]);

  return (
    <div className="sports-page">
      <div className="sports-page__row">
        <div className={`sports-page__left ${isScheduleShown ? 'is-active' : ''}`}>
          {!isMobile && <Search />}
          <SportsSchedule />
        </div>
        <div className="sports-page__right">
          <WagerTypes />
          {isMobile && <Search className="sports-page__search" />}
          <SportsPreview />
        </div>
      </div>
    </div>
  );
};

SportsPage.propTypes = {
  isScheduleShown: PropTypes.bool,
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  isScheduleShown: selectSportsPageSchedule
});

export default connect(mapStateToProps)(withBreakpoints(SportsPage));
