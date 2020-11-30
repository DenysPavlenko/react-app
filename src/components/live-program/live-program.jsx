import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Redux
import { fetchLiveProgramData } from 'redux/live-program/actions';
import { selectLiveProgram } from 'redux/live-program/selectors';
// Components
import ErrorIndicator from 'components/error-indicator/error-indicator';
import Spinner from 'components/spinner/spinner';
import LiveProgramItem from 'components/live-program-item/live-program-item';
// Styles
import './live-program.sass';

const LiveProgram = ({ liveProgram: { loading, error, data }, fetchLiveProgramData }) => {

  useLayoutEffect(() => {
    fetchLiveProgramData();
  }, [fetchLiveProgramData]);

  return (
    <div className="live-program">
      {error && <ErrorIndicator retry={fetchLiveProgramData} />}
      {(!error && loading) && <Spinner boxed />}
      {(!error && !loading) &&
        <div className="live-program__items">
          {data.map(({ id, icon, title, program }) => (
            <LiveProgramItem key={id} title={title} icon={icon} program={program} />
          ))}
        </div>
      }
    </div>
  );
};

LiveProgram.propTypes = {
  liveProgram: PropTypes.object,
  fetchLiveProgramData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  liveProgram: selectLiveProgram,
});

const mapDispatchToProps = dispatch => ({
  fetchLiveProgramData: () => dispatch(fetchLiveProgramData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveProgram);

