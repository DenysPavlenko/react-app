import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
// Redux
import { toggleActivePlayers } from 'admin-app/redux/active-players/actions';
import { toggleAccountsClosed } from 'admin-app/redux/accounts-closed/actions';
// Compoents
import InfoWidget from 'shared/components/info-widget/info-widget';
import RecentLogins from 'admin-app/components/recent-logins/recent-logins';
import ActivePlayers from 'admin-app/components/active-players/active-players';
import AccountsClosed from 'admin-app/components/accounts-closed/accounts-closed';
// Styles
import './home-page.sass';

const HomePage = ({ toggleActivePlayers, toggleAccountsClosed, history }) => {

  const widgets = [
    { id: '1', title: 'Active Players', value: '3', icon: 'users', color: 'accent', onClick: toggleActivePlayers },
    { id: '2', title: 'Today', value: '1.00', icon: 'dollar-sign', color: 'danger', onClick: null },
    { id: '3', title: 'Weekly Figures', value: '-140.00', icon: 'dollar-sign', color: 'danger', onClick: () => history.push('/figures') },
    { id: '4', title: 'Deleted Wagers', value: '0', icon: 'trash-alt', color: 'accent-orange', onClick: () => history.push('/deleted-wagers') },
    { id: '5', title: 'Accounts Closed', value: '3', icon: 'users-slash', color: 'danger', onClick: toggleAccountsClosed },
  ];

  return (
    <Fragment>
      <ActivePlayers />
      <AccountsClosed />
      <div className="home-page">
        <div className="home-page__widgets">
          {widgets.map(({ id, title, value, icon, color, onClick }) => (
            <div key={id} className="home-page__widget">
              <InfoWidget title={title} value={value} icon={icon} color={color} onClick={onClick} />
            </div>
          ))}
        </div>
        <div className="home-page__logins">
          <RecentLogins />
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
