import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
// Styles
import './customer-list-top.sass';

const CustomerListTop = ({ titles }) => {
  return (
    <thead className="customer-list-top">
      <tr>
        {titles.map((culumn, idx) => (
          <th key={idx}>
            <Typography component="h5">{culumn}</Typography>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default CustomerListTop;
