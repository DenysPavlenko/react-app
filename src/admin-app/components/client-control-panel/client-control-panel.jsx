import React, { useState } from 'react';
// Styles
import './client-control-panel.sass';
// Components
import Tabs from 'shared/components/tabs/tabs';
import Tab from 'shared/components/tab/tab';
import TabPanel from 'shared/components/tab-panel/tab-panel';
import ClientControlGeneral from 'admin-app/components/client-control-general/client-control-general';

const tabs = ['general', 'accounting', 'limits', 'wagers', 'pending', 'transactions', 'history', 'notifications', 'free play', 'detail imits', 'internet log'];

const ClientControlPanel = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="client-control-panel">
      <Tabs responsive>
        {tabs.map((tab, idx) => (
          <Tab key={idx} isActive={tab === activeTab} onClick={() => setActiveTab(tab)}>{tab}</Tab>
        ))}
      </Tabs>
      {activeTab === 'general' && <TabPanel><ClientControlGeneral /></TabPanel>}
    </div>
  );
};

export default ClientControlPanel;
