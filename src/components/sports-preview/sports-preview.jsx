import React from 'react';
// Components
import SportsPreviewHeader from 'components/sports-preview-header/sports-preview-header';

const SportsPreview = () => {
  return (
    <div className="sports-preview">
      <SportsPreviewHeader className="sports-preview__header" title="NFL" />
    </div>
  );
};

export default SportsPreview;
