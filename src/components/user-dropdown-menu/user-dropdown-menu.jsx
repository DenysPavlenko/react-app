import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// Redux
import { togglePersonalize } from 'redux/personalize/actions';
import { toggleScores } from 'redux/scores/actions';
import { toggleMail } from 'redux/mail/actions';
// Components
import Image from 'components/image/image';
import BalanceOverview from 'components/balance-overview/balance-overview';
import SettingsModal from 'components/settings-modal/settings-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './user-dropdown-menu.sass';

const UserDropdownMenu = ({ history, togglePersonalize, toggleScores, toggleMail }) => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => setShowSettings(settings => !settings);

  const menu = [
    { icon: 'calendar', title: 'Scores', handler: toggleScores },
    { icon: 'file-alt', title: 'Rules', rootName: '/rules' },
    { icon: 'envelope', title: 'Mail', handler: toggleMail },
    { icon: 'cog', title: 'Settings', handler: toggleSettings },
    { icon: 'paint-brush', title: 'Personalize it', handler: togglePersonalize },
    { icon: 'power-off', title: 'Sign out', rootName: '/sign-in' },
  ];

  const handleItemClick = (rootName, handler) => {
    if (rootName) { history.push(`${rootName}`); }
    if (handler) {
      handler();
    }
  };

  return (
    <div className="user-dropdown-menu">
      {menu.map(({ icon, title, flag, rootName, handler }, idx) => (
        <div key={idx} className="user-dropdown-menu__item" onClick={() => handleItemClick(rootName, handler)}>
          <div className="user-dropdown-menu__icon">
            <FontAwesomeIcon icon={icon} />
          </div>
          <span className="user-dropdown-menu__title">{title}</span>
          {flag && <Image src={flag} className="user-dropdown-menu__flag" alt="usa" icon />}
        </div>
      ))}
      <div className="user-dropdown-menu__balance">
        <BalanceOverview vertical noBalance />
      </div>

      <SettingsModal isHidden={!showSettings} close={toggleSettings} />

    </div>
  );
};

UserDropdownMenu.propTypes = {
  togglePersonalize: PropTypes.func,
  toggleScores: PropTypes.func,
  toggleMail: PropTypes.func,
  history: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  togglePersonalize: () => dispatch(togglePersonalize()),
  toggleScores: () => dispatch(toggleScores()),
  toggleMail: () => dispatch(toggleMail()),
});

export default connect(null, mapDispatchToProps)(withRouter(UserDropdownMenu));
