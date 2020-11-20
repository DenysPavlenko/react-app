import React from 'react';
import Typography from 'components/typography/typography';
// Styles
import './sports-table-item-button.sass';

const SportsTableItemButton = ({ title }) => {
  return (
    <div className="sports-table-item-button" >
      <Typography component="span" variant="p-sm">{title}</Typography>
    </div>
  )
}

export default SportsTableItemButton;
