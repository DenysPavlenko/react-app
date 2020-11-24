import React from 'react';
// Components
import HorsesPreview from 'components/horses-preview/horses-preview';
// Styles
import './horses-page.sass'

const HorsesPage = () => {
  return (
    <div className="horses-page">
      <HorsesPreview />
    </div>
  );
};

export default HorsesPage;
