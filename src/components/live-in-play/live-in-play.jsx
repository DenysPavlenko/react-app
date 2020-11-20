import React from 'react';
// Components
import LiveProgram from 'components/live-program/live-program';
import LiveBanner from 'components/live-banner/live-banner';
// Styles
import './live-in-play.sass';

const LiveInPlay = () => {
  return (
    <div className="live-in-play">
      <div className="live-in-play__left">
        <LiveProgram />
      </div>
      <div className="live-in-play__center">
        <LiveBanner className="live-in-play__banner" />
      </div>
      <div className="live-in-play__right">
        <div></div>
      </div>
    </div>
  );
};

export default LiveInPlay;
