import React, { useState } from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import PageHeader from 'admin-app/components/page-header/page-header';
import Tabs from 'shared/components/tabs/tabs';
import Tab from 'shared/components/tab/tab';
import TabPanel from 'shared/components/tab-panel/tab-panel';
import PositionToday from 'admin-app/components/position-today/position-today';
import PositionLiveSports from 'admin-app/components/position-live-sports/position-live-sports';
import PositionGames from 'admin-app/components/position-games/position-games';
// Styles
import './position-report.sass';

const tabs = [
  { tab: 'today', component: PositionToday },
  { tab: 'games', component: PositionGames },
  { tab: 'contest', component: '' },
  { tab: 'live sports', component: PositionLiveSports },
];

const PositionReport = () => {
  const [activeTab, setActiveTab] = useState('games');

  const ActiveComponent = tabs.filter(({ tab }) => tab === activeTab)[0].component;

  return (
    <div className="position-report">
      <div className="position-report__header">
        <PageHeader left={<Typography component="h2">Position report</Typography>} />
      </div>
      <div className="position-report__content">
        <Tabs nowrap>
          {tabs.map(({ tab }, idx) => (
            <Tab key={idx} isActive={tab === activeTab} onClick={() => setActiveTab(tab)}>{tab}</Tab>
          ))}
        </Tabs>
        <TabPanel>
          <ActiveComponent />
        </TabPanel>
      </div>
    </div>
  );
};

export default PositionReport;
