import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
// Styles
import './recent-logins-title.sass';

const RecentLoginsTitle = () => {
  return (
    <thead className="recent-logins-title">
      <tr>
        <th><Typography component="h3">Recent logins</Typography></th>
        <th></th>
      </tr>
    </thead>
  );
};

export default RecentLoginsTitle;
