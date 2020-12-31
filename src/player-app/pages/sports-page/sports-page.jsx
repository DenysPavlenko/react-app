import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectSportsPageSchedule } from 'player-app/redux/sports-page-schedule/selectors';
import { selectSportsPageWagers } from 'player-app/redux/sports-page-wagers/selectors';
// Components
import SportsSchedule from 'player-app/components/sports-schedule/sports-schedule';
import Search from 'shared/components/search/search';
import SportsPreview from 'player-app/components/sports-preview/sports-preview';
import SportsWagers from 'player-app/components/sports-wagers/sports-wagers';
import HandleMobile from 'shared/components/handle-mobile/handle-mobile';
// Styles
import './sports-page.sass';

const SportsPage = ({ showSportsSchedule, showSportsWagers }) => {
  return (
    <div className="sports-page">
      <div className="sports-page__row">
        <div className="sports-page__left">
          <HandleMobile showOnMobile={showSportsSchedule} >
            <SportsSchedule />
          </HandleMobile>
        </div>
        <div className="sports-page__center">
          <Search className="sports-page__search" variant="primary" />
          <SportsPreview />
        </div>
        <div className="sports-page__right">
          <HandleMobile showOnMobile={showSportsWagers} >
            <SportsWagers />
          </HandleMobile>
        </div>
      </div>
    </div>
  );
};

SportsPage.propTypes = {
  showSportsSchedule: PropTypes.bool,
  showSportsWagers: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  showSportsSchedule: selectSportsPageSchedule,
  showSportsWagers: selectSportsPageWagers,
});

export default connect(mapStateToProps)(SportsPage);
