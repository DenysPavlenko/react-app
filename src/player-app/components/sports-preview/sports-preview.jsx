import React from 'react';
// Data
import data from './data';
// Components
import SportsPreviewHeader from 'player-app/components/sports-preview-header/sports-preview-header';
import SportsTable from 'player-app/components/sports-table/sports-table';
// Styles
import './sports-preview.sass';

const SportsPreview = () => {
  return (
    <div className="sports-preview">
      {data.map(({ id, icon, title, schedule }) => (
        <div key={id} className="sports-preview__item">
          <SportsPreviewHeader title={title} icon={icon} />
          <SportsTable schedule={schedule} />
        </div>
      ))}
    </div>
  );
};

export default SportsPreview;