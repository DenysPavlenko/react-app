import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Components
import Tabs from 'shared/components/tabs/tabs';
import Tab from 'shared/components/tab/tab';
import TabPanel from 'shared/components/tab-panel/tab-panel';
import ClientControlGeneral from 'admin-app/components/client-control-general/client-control-general';
import ClientControlAccounting from 'admin-app/components/client-control-accounting/client-control-accounting';
import ClientControlLimits from 'admin-app/components/client-control-limits/client-control-limits';
import ClientControlWagers from 'admin-app/components/client-control-wagers/client-control-wagers';
import ClientControlPending from 'admin-app/components/client-control-pending/client-control-pending';
import ClientControlTransactions from 'admin-app/components/client-control-transactions/client-control-transactions';
import ClientControlHistory from 'admin-app/components/client-control-history/client-control-history';
import ClientControlNotifications from 'admin-app/components/client-control-notifications/client-control-notifications';
import ClientControlFreePlay from 'admin-app/components/client-control-free-play/client-control-free-play';
import ClientControlDetailLimits from 'admin-app/components/client-control-detail-limits/client-control-detail-limits';
import ClientControlInternetLog from 'admin-app/components/client-control-internet-log/client-control-internet-log';

const tabs = [
  { tab: 'general', component: ClientControlGeneral },
  { tab: 'accounting', component: ClientControlAccounting },
  { tab: 'limits', component: ClientControlLimits },
  { tab: 'wagers', component: ClientControlWagers },
  { tab: 'pending', component: ClientControlPending },
  { tab: 'transactions', component: ClientControlTransactions },
  { tab: 'history', component: ClientControlHistory },
  { tab: 'notifications', component: ClientControlNotifications },
  { tab: 'free play', component: ClientControlFreePlay },
  { tab: 'detail limits', component: ClientControlDetailLimits },
  { tab: 'internet log', component: ClientControlInternetLog },
];

const ClientControlPanel = ({ clientId }) => {
  const [activeTab, setActiveTab] = useState('general');

  const ActiveComponent = tabs.filter(({ tab }) => tab === activeTab)[0].component;

  return (
    <div className="client-control-panel">
      <Tabs responsive>
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
