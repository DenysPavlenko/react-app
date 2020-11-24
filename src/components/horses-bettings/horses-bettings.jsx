import React from 'react';
// Components
import HorsesFilters from 'components/horses-filters/horses-filters';
// Styles
import './horses-bettings.sass';

const HorseBettings = () => {
  return (
    <div className="horses-bettings">
      <HorsesFilters />
    </div>
  );
};

export default HorseBettings;
