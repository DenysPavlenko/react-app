import React from 'react';
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SoccerLive from './soccer-live';
import LiveBetSlip from './live-bet-slip';
// Styles
import './styles.sass';
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
