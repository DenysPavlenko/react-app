import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectLivePlayProgram } from 'redux/live-play-program/selectors';
// Components
import LiveProgram from 'components/live-program/live-program';
import LiveMarkets from 'components/live-markets/live-markets';
import LivePreview from 'components/live-preview/live-preview';
// Styles
import './live-play.sass';

const LivePlay = ({ isProgramShown }) => {
  return (
    <div className="live-play">
      <div className={`live-play__left ${isProgramShown ? 'is-active' : ''}`}>
        <LiveProgram />
      </div>
      <div className="live-play__center">
        <LiveMarkets />
      </div>
      <div className="live-play__right">
        <LivePreview />
      </div>
    </div>
  );
};


LivePlay.propTypes = {
  isProgramShown: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  isProgramShown: selectLivePlayProgram,
});

export default connect(mapStateToProps)(LivePlay);
