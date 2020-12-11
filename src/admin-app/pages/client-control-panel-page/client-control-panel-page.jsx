import React, { Fragment } from 'react';
// Components
import ClientControlPanel from 'admin-app/components/client-control-panel/client-control-panel';
import ClientBalance from 'admin-app/components/client-balance/client-balance';
// Styles
import './client-control-panel-page.sass'

const ClientControlPanelPage = () => {
  return (
    <div className="client-control-panel-page">
      <div className="client-control-panel-page__balance">
        <ClientBalance />
      </div>
      <div className="client-control-panel-page__panel">
        <ClientControlPanel />
      </div>
    </div>
  );
};

export default ClientControlPanelPage;
