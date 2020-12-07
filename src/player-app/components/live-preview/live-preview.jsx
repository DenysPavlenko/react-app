import React from 'react';
// Styles
import './live-preview.sass';
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SoccerLive from 'player-app/components/live-media/soccer-live/soccer-live';
import LiveBetSlip from 'player-app/components/live-bet-slip/live-bet-slip';
// Assets
import { ReactComponent as Field } from 'shared/assets/images/icons/soccer-field.svg';

const LivePreview = () => {
  return (
    <div className="live-preview">
      <div className="live-preview__control">
        <FontAwesomeIcon icon="volume-up" className="live-preview__control-volume" />
        <Field className="live-preview__control-field" />
      </div>
      <div className="live-preview__content">
        <SoccerLive />
      </div>
      <div className="live-preview__bet-slip">
        <LiveBetSlip />
      </div>
    </div>
  );
};

export default LivePreview;
