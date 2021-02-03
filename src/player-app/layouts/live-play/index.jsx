import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectLivePlayProgram } from 'player-app/redux/live-play-program/selectors';
// Components
import LiveProgram from 'player-app/parts/live-program';
import LiveMarkets from 'player-app/parts/live-markets';
import LivePreview from 'player-app/parts/live-preview';
import HandleMobile from 'shared/components/handle-mobile';
// Styles
import './styles.sass';

const LivePlay = ({ isProgramShown }) => {
  return (
    <div className="live-play">
      <div className="live-play__left">
        <HandleMobile showOnMobile={isProgramShown}>
          <LiveProgram />
        </HandleMobile>
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
