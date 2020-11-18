import React from 'react';
// Components
import SportsPreviewHeader from 'components/sports-preview-header/sports-preview-header';
import SportsTable from 'components/sports-table/sports-table';

const SportsPreview = () => {
  return (
    <div className="sports-preview">
      <SportsPreviewHeader className="sports-preview__header" title="NFL" icon="football-ball" />
      <SportsTable />
    </div>
  );
};

export default SportsPreview;
