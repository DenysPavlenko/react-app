import React from 'react';
// Components
import LiveProgram from 'components/live-program/live-program';
import LiveMarkets from 'components/live-markets/live-markets';
import LivePreview from 'components/live-preview/live-preview';
// Styles
import './live-in-play.sass';

const LiveInPlay = () => {
  return (
    <div className="live-in-play">
      <div className="live-in-play__left">
        <LiveProgram />
      </div>
      <div className="live-in-play__center">
        <LiveMarkets />
      </div>
      <div className="live-in-play__right">
        <LivePreview />
      </div>
    </div>
  );
};

export default LiveInPlay;
