import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
// Redux
import { toggleActivePlayers } from 'admin-app/redux/active-players/actions';
// Compoents
import InfoWidget from 'shared/components/info-widget/info-widget';
import RecentLogins from 'admin-app/components/recent-logins/recent-logins';
import ActivePlayers from 'admin-app/components/active-players/active-players';
// Styles
import './home-page.sass';

const HomePage = ({ toggleActivePlayers, history }) => {

  const widgets = [
    { id: 1, title: 'Active Players', value: '3', icon: 'users', color: 'accent', onClick: toggleActivePlayers },
    { id: 2, title: 'Today', value: '1.00', icon: 'dollar-sign', color: 'danger', onClick: null },
    { id: 3, title: 'Weekly Figures', value: '-140.00', icon: 'dollar-sign', color: 'danger', onClick: () => history.push('/figures') },
    { id: 4, title: 'Deleted Wagers', value: '0', icon: 'trash-alt', color: 'accent-orange', onClick: () => history.push('/deleted-wagers') },
  ];

  return (
    <Fragment>
      <ActivePlayers />
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
  history: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  toggleActivePlayers: () => dispatch(toggleActivePlayers()),
});

export default connect(null, mapDispatchToProps)(withRouter(HomePage));
