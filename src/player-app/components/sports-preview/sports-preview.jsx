import React, { Fragment, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectSportsScheduleEvents } from 'player-app/redux/sports-schedule-events/selectors';
import { fetchSportsData } from 'player-app/redux/sports/actions';
import { selectSports } from 'player-app/redux/sports/selectors';
// Components
// import SportsPreviewHeader from 'player-app/components/sports-preview-header/sports-preview-header';
// import SportsTable from 'player-app/components/sports-table/sports-table';
import Sports from 'player-app/components/sports/sports';
import Spinner from 'shared/components/spinner/spinner';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
// Styles
import './sports-preview.sass';

const SportsPreview = ({ sportsScheduleEvents, fetchSportsData, sports: { loading, data, error } }) => {

  useLayoutEffect(() => {
    fetchSportsData(sportsScheduleEvents);
  }, [sportsScheduleEvents, fetchSportsData]);

  return (
    <div className="sports-preview">
      {error && <ErrorIndicator retry={fetchSportsData(sportsScheduleEvents)} />}
      {(!error && loading) && <Spinner boxed light />}
      {(!error && !loading) &&
        <Fragment>
          {data.map(data => (
            <Sports key={data.id} data={data} />
            // <div key={id} className="sports-preview__item">
            //   <SportsPreviewHeader title={title} icon={icon} />
            //   <SportsTable schedule={schedule} />
            // </div>
          ))}
        </Fragment>
      }
    </div>
  );
};

SportsPreview.propTypes = {
  sportsScheduleEvents: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  sportsScheduleEvents: selectSportsScheduleEvents,
  sports: selectSports
});

const mapDispatchToProps = dispatch => ({
  fetchSportsData: schedule => dispatch(fetchSportsData(schedule))
});

export default connect(mapStateToProps, mapDispatchToProps)(SportsPreview);
