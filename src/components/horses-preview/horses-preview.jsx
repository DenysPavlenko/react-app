import React from 'react';
// Components
import HorsesSelect from 'components/horses-select/horses-select';
import HorsesHeader from 'components/horses-header/horses-header';
import HorseBettings from 'components/horses-bettings/horses-bettings';
import HorsesBetSlip from 'components/horses-bet-slip/horses-bet-slip';
// Styles
import './horses-preview.sass';

const HorsesPreview = () => {
  return (
    <div className="horses-preview">
      <div className="horses-preview__row">
        <div className="horses-preview__left">
          <HorsesSelect />
        </div>
        <div className="horses-preview__center">
          <HorsesHeader />
          <HorseBettings />
        </div>
        <div className="horses-preview__right">
          <HorsesBetSlip />
        </div>
      </div>
    </div>
  );
};

export default HorsesPreview;
