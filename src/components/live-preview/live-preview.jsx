import React from 'react';
// Styles
import './live-preview.sass';
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SoccerLive from 'components/live-media/soccer-live/soccer-live';
import BetSlip from 'components/bet-slip/bet-slip';
// Assets
import { ReactComponent as Field } from 'assets/images/icons/soccer-field.svg';

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
        <BetSlip />
      </div>
    </div >
  );
};

export default LivePreview;