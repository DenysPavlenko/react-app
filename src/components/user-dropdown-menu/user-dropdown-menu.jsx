import React from 'react';
import { withRouter } from 'react-router-dom';
// Components
import Image from 'components/image/image';
import BalanceOverview from 'components/balance-overview/balance-overview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './user-dropdown-menu.sass';
// Assets
import usaFlag from 'assets/images/flags/usa.svg';
import { faGlobe, faSortNumericDown, faRandom, faFileAlt, faEnvelope, faCog, faPaintBrush, faPowerOff } from '@fortawesome/free-solid-svg-icons';

const menu = [
  { icon: faGlobe, title: 'Language', flag: usaFlag },
  { icon: faSortNumericDown, title: 'Odds display' },
  { icon: faRandom, title: 'Betting style' },
  { icon: faFileAlt, title: 'Rules' },
  { icon: faEnvelope, title: 'Mail' },
  { icon: faCog, title: 'Settings' },
  { icon: faPaintBrush, title: 'Personalize it' },
  { icon: faPowerOff, title: 'Sign out', rootName: '/sign-in' },
];

const UserDropdownMenu = ({ history }) => {
  return (
    <div className="user-dropdown-menu">
      {menu.map(({ icon, title, flag, rootName }, idx) => (
        <div key={idx} className="user-dropdown-menu__item" onClick={() => rootName && history.push(`${rootName}`)}>
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

export default withRouter(UserDropdownMenu);
