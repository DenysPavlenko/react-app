import React from 'react';
// Components
import HorsesSelect from 'components/horses-select/horses-select';
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
          <div></div>
        </div>
        <div className="horses-preview__right">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HorsesPreview;
