import React from 'react';
// Components
import Table from 'shared/components/table/table';
import RecentLoginsTitle from './recent-logins-title/recent-logins-title';
import RecentLoginsHeader from './recent-logins-header/recent-logins-header';
import RecentLoginsItem from './recent-logins-item/recent-logins-item';
// Styles
import './recent-logins.sass';

const data = [
  { "id": "1", "date": "December 06 05:22:46 AM", "ip": "95.175.199.69" },
  { "id": "2", "date": "December 07 02:51:18 AM", "ip": "94.175.194.69" },
  { "id": "3", "date": "December 08 10:51:18 AM", "ip": "91.180.197.69" },
  { "id": "4", "date": "December 09 13:51:18 AM", "ip": "96.176.195.69" },
  { "id": "5", "date": "December 10 15:51:18 AM", "ip": "97.177.195.69" },
];

const RecentLogins = () => {
  return (
    <div className="recent-logins">
      <Table>
        <RecentLoginsTitle />
        <RecentLoginsHeader />
        <tbody>
          {data.map(({ id, date, ip }) => (
            <RecentLoginsItem className="recent-logins__item" key={id} date={date} ip={ip} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RecentLogins;
