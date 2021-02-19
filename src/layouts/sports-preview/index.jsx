import React, { Fragment, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectSportsScheduleEvents } from 'redux/sports-schedule-events/selectors';
import { sportsRequested } from 'redux/sports/actions';
import { selectSports } from 'redux/sports/selectors';
// Components
import Sports from 'parts/sports';
import Spinner from 'components/spinner/spinner';
import ErrorIndicator from 'components/error-indicator';
// Styles
import './styles.sass';

const SportsPreview = ({ sportsScheduleEvents, sportsRequested, sports: { loading, data, error } }) => {

  useLayoutEffect(() => {
    sportsRequested(sportsScheduleEvents);
  }, [sportsScheduleEvents, sportsRequested]);

  return (
    <div className="sports-preview">
      {error && <ErrorIndicator retry={sportsRequested(sportsScheduleEvents)} />}
      {(!error && loading) && <Spinner boxed light />}
      {(!error && !loading) &&
        <Fragment>
          {data.map(data => (
            <Sports key={data.id} data={data} />
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

const mapDispatchToProps = {
  sportsRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(SportsPreview);
