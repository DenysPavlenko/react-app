import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// Redux
import { togglePersonalize } from 'redux/personalize/actions';
// Components
import Image from 'components/image/image';
import BalanceOverview from 'components/balance-overview/balance-overview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './user-dropdown-menu.sass';

const UserDropdownMenu = ({ history, togglePersonalize }) => {
  const menu = [
    { icon: 'random', title: 'Betting style' },
    { icon: 'calendar', title: 'Scores' },
    { icon: 'file-alt', title: 'Rules' },
    { icon: 'envelope', title: 'Mail' },
    { icon: 'cog', title: 'Settings' },
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
    </div>
  );
};

UserDropdownMenu.propTypes = {
  togglePersonalize: PropTypes.func,
  history: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  togglePersonalize: () => dispatch(togglePersonalize()),
});

export default connect(null, mapDispatchToProps)(withRouter(UserDropdownMenu));
