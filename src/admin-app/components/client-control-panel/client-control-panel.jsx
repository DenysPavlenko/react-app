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

const tabs = ['general', 'accounting', 'limits', 'wagers', 'pending', 'transactions', 'history', 'notifications', 'free play', 'detail imits', 'internet log'];

const ClientControlPanel = ({ clientId }) => {
  const [activeTab, setActiveTab] = useState('transactions');

  return (
    <div className="client-control-panel">
      <Tabs responsive>
        {tabs.map((tab, idx) => (
          <Tab key={idx} isActive={tab === activeTab} onClick={() => setActiveTab(tab)}>{tab}</Tab>
        ))}
      </Tabs>
      {activeTab === 'general' && <TabPanel><ClientControlGeneral clientId={clientId} /></TabPanel>}
      {activeTab === 'accounting' && <TabPanel><ClientControlAccounting clientId={clientId} /></TabPanel>}
      {activeTab === 'limits' && <TabPanel><ClientControlLimits clientId={clientId} /></TabPanel>}
      {activeTab === 'wagers' && <TabPanel><ClientControlWagers clientId={clientId} /></TabPanel>}
      {activeTab === 'pending' && <TabPanel><ClientControlPending clientId={clientId} /></TabPanel>}
      {activeTab === 'transactions' && <TabPanel><ClientControlTransactions clientId={clientId} /></TabPanel>}
    </div>
  );
};

ClientControlPanel.propTypes = {
  clientId: PropTypes.string,
};

export default ClientControlPanel;
