import React, { useState } from 'react';
// Components
import Typography from 'shared/components/typography';
import PageHeader from 'admin-app/components/page-header';
import Tabs from 'shared/components/tabs';
import Tab from 'shared/components/tab';
import TabPanel from 'shared/components/tab-panel';
import TodayTab from './today-tab/styles';
import GamesTab from './games-tab';
import LiveSportsTab from './live-sports-tab';
import ContestsTab from './contests-tab';
// Styles
import './styles.sass';

const tabs = [
  { tab: 'today', component: TodayTab },
  { tab: 'games', component: GamesTab },
  { tab: 'contests', component: ContestsTab },
  { tab: 'live sports', component: LiveSportsTab },
];

const PositionReport = () => {
  const [activeTab, setActiveTab] = useState('today');

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
