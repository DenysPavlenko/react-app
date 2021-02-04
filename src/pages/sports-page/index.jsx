import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectSportsPageSchedule } from 'redux/sports-page-schedule/selectors';
import { selectSportsPageWagers } from 'redux/sports-page-wagers/selectors';
// Components
import HandleMobile from 'components/handle-mobile';
import SportsSchedule from 'parts/sports-schedule';
import SportsPreview from 'layouts/sports-preview';
import SportsWagers from 'parts/sports-wagers';
// Styles
import './styles.sass';

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
