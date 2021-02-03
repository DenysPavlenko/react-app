import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Components
import Tabs from 'shared/components/tabs';
import Tab from 'shared/components/tab';
import TabPanel from 'shared/components/tab-panel';
import GeneralTab from './general-tab';
import AccountingTab from './accounting-tab';
import LimitsTab from './limits-tab';
import WagersTab from './wagers-tab';
import PendingTab from './pending-tab';
import TransactionsTab from './transactions-tab';
import HistoryTab from './history-tab';
import NotificationsTab from './notifications-tab';
import FreePlayTab from './free-play-tab';
import DetailLimitsTab from './detail-limits-tab';
import InternetLogTab from './internet-log-tab';

const tabs = [
  { tab: 'general', component: GeneralTab },
  { tab: 'accounting', component: AccountingTab },
  { tab: 'limits', component: LimitsTab },
  { tab: 'wagers', component: WagersTab },
  { tab: 'pending', component: PendingTab },
  { tab: 'transactions', component: TransactionsTab },
  { tab: 'history', component: HistoryTab },
  { tab: 'notifications', component: NotificationsTab },
  { tab: 'free play', component: FreePlayTab },
  { tab: 'detail limits', component: DetailLimitsTab },
  { tab: 'internet log', component: InternetLogTab },
];

const ClientControlPanel = ({ clientId }) => {
  const [activeTab, setActiveTab] = useState('general');

  const ActiveComponent = tabs.filter(({ tab }) => tab === activeTab)[0].component;

  return (
    <div className="client-control-panel">
      <Tabs nowrap>
        {tabs.map(({ tab }, idx) => (
          <Tab key={idx} isActive={tab === activeTab} onClick={() => setActiveTab(tab)}>{tab}</Tab>
        ))}
      </Tabs>
      <TabPanel>
        <ActiveComponent clientId={clientId} />
      </TabPanel>
    </div>
  );
};

ClientControlPanel.propTypes = {
  clientId: PropTypes.string,
};

export default ClientControlPanel;
