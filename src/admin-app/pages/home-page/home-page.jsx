import React from 'react';
// Compoents
import InfoWidget from 'shared/components/info-widget/info-widget';
import RecentLogins from 'admin-app/components/recent-logins/recent-logins';
// Styles
import './home-page.sass';

const widgets = [
  { id: 1, title: 'Active Players', value: '1', icon: 'users', color: 'accent' },
  { id: 2, title: 'Today', value: '1.00', icon: 'dollar-sign', color: 'danger' },
  { id: 3, title: 'Weekly Figures', value: '-140.00', icon: 'dollar-sign', color: 'danger' },
  { id: 4, title: 'Deleted Wagers', value: '0', icon: 'trash-alt', color: 'accent-orange' },
]

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__widgets">
        {widgets.map(({ id, title, value, icon, color }) => (
          <div key={id} className="home-page__widget">
            <InfoWidget title={title} value={value} icon={icon} color={color} />
          </div>
        ))}
      </div>
      <div className="home-page__logins">
        <RecentLogins />
      </div>
    </div>
  );
};

export default HomePage;
