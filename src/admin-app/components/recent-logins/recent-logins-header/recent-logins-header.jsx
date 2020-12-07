import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
// Styles
import './recent-logins-header.sass';

const RecentLoginsHeader = () => {
  return (
    <thead className="recent-logins-header">
      <tr>
        <th>
          <Typography component="h5" className="text-bold">Ip Address</Typography>
        </th>
        <th>
          <Typography component="h5" className="text-bold">Ip Address</Typography>
        </th>
      </tr>
    </thead>
  );
};

export default RecentLoginsHeader;
