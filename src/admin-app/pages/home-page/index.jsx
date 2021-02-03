import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
// Redux
import { toggleActivePlayers } from 'admin-app/redux/active-players/actions';
import { toggleAccountsClosed } from 'admin-app/redux/accounts-closed/actions';
// Compoents
import InfoWidgets from 'shared/components/info-widgets';
import RecentLogins from 'admin-app/parts/recent-logins';
import ActivePlayers from 'admin-app/parts/active-players';
import AccountsClosed from 'admin-app/parts/accounts-closed';
import BiggestPendingWagers from 'admin-app/parts/biggest-pending-wagers';
// Styles
import './styles.sass';

const HomePage = ({ toggleActivePlayers, toggleAccountsClosed, history }) => {

  const widgets = [
    { id: '1', title: 'Active Players', value: '3', icon: 'users', color: 'accent-blue', onClick: toggleActivePlayers },
    { id: '2', title: 'Today', value: '1.00', icon: 'dollar-sign', color: 'accent', active: true, onClick: null },
    { id: '3', title: 'Weekly Figures', value: '-140.00', icon: 'dollar-sign', color: 'accent', active: true, onClick: () => history.push('/figures') },
    { id: '4', title: 'Deleted Wagers', value: '0', icon: 'trash-alt', color: 'accent-orange', onClick: () => history.push('/deleted-wagers') },
    { id: '5', title: 'Accounts Closed', value: '3', icon: 'users-slash', color: 'danger', onClick: toggleAccountsClosed },
  ];

  return (
    <Fragment>
      <ActivePlayers />
      <AccountsClosed />
      <div className="home-page">
        <div className="home-page__item">
          <InfoWidgets widgets={widgets} />
        </div>
        <div className="home-page__item">
          <RecentLogins />
        </div>
        <div className="home-page__item">
          <BiggestPendingWagers />
        </div>
      </div>
    </Fragment>
  );
};

HomePage.propTypes = {
  toggleActivePlayers: PropTypes.func,
  toggleAccountsClosed: PropTypes.func,
  history: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  toggleActivePlayers: () => dispatch(toggleActivePlayers()),
  toggleAccountsClosed: () => dispatch(toggleAccountsClosed()),
});

export default connect(null, mapDispatchToProps)(withRouter(HomePage));
