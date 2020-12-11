import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// Components
import ClientControlPanel from 'admin-app/components/client-control-panel/client-control-panel';
import ClientBalance from 'admin-app/components/client-balance/client-balance';
// Styles
import './client-control-panel-page.sass'

const ClientControlPanelPage = ({ match }) => {
  const clientId = match.params.clientId;

  return (
    <div className="client-control-panel-page">
      <div className="client-control-panel-page__balance">
        <ClientBalance clientId={clientId} />
      </div>
      <div className="client-control-panel-page__panel">
        <ClientControlPanel clientId={clientId} />
      </div>
    </div>
  );
};

ClientControlPanel.propTypes = {
  match: PropTypes.object,
};

export default withRouter(ClientControlPanelPage);
