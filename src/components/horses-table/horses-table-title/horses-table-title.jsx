import React from 'react';
// Components
import Typography from 'components/typography/typography';
// Styles
import './horses-table-title.sass';

const HorsesTableTitle = ({ title }) => {
  return (
    <div className="horses-table-title">
      <Typography component="h4">{title}</Typography>
    </div>
  );
};

export default HorsesTableTitle;
