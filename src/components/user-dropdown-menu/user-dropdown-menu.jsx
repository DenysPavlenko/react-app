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
// Assets
import { faSortNumericDown, faRandom, faFileAlt, faEnvelope, faCog, faPaintBrush, faPowerOff } from '@fortawesome/free-solid-svg-icons';


const UserDropdownMenu = ({ history, togglePersonalize }) => {
  const menu = [
    { icon: faSortNumericDown, title: 'Odds display' },
    { icon: faRandom, title: 'Betting style' },
    { icon: faFileAlt, title: 'Rules' },
    { icon: faEnvelope, title: 'Mail' },
    { icon: faCog, title: 'Settings' },
    { icon: faPaintBrush, title: 'Personalize it', handler: togglePersonalize },
    { icon: faPowerOff, title: 'Sign out', rootName: '/sign-in' },
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
};

const mapDispatchToProps = dispatch => ({
  togglePersonalize: () => dispatch(togglePersonalize()),
});

export default connect(null, mapDispatchToProps)(withRouter(UserDropdownMenu));
