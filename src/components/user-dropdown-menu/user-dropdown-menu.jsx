import React from 'react';
// Components
import Image from 'components/image/image';
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
  { icon: faPowerOff, title: 'Sign out' },
];

const UserDropdownMenu = () => {
  return (
    <div className="user-dropdown-menu">
      {menu.map(({ icon, title, flag }, idx) => (
        <div key={idx} className="user-dropdown-menu__item">
          <div className="user-dropdown-menu__icon">
            <FontAwesomeIcon icon={icon} />
          </div>
          <span className="user-dropdown-menu__title">{title}</span>
          {flag && <Image src={flag} className="user-dropdown-menu__flag" alt="usa" icon/>}
        </div>
      ))}
    </div>
  );
};

export default UserDropdownMenu;
