import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// Components and Layouts
import ClientControlPanel from 'layouts/client-control-panel';
import ClientBalance from 'parts/client-balance';
// Styles
import './styles.sass';

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
