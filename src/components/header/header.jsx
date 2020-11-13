import React from 'react';
import { NavLink } from 'react-router-dom';
// Components
import UserDropdown from 'components/user-dropdown/user-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './header.sass';
// Assets
import { faFootballBall, faClock, faMoneyBill, faHorseHead, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';

const menu = [
  { name: 'Sports', rootName: '/sports', icon: faFootballBall },
  { name: 'Live', rootName: '/live', icon: faClock },
  { name: 'Casino', rootName: '/casino', icon: faMoneyBill },
  { name: 'Horses', rootName: '/horses', icon: faHorseHead },
  { name: 'Scores', rootName: '/scores', icon: faCalendarWeek },
];

const Header = () => {
  return (
    <>
      <div className="header-gap"></div>
      <div className="header">
        <div className="header__menu">
          {menu.map(({ name, rootName, icon }, idx) => (
            <NavLink key={idx} to={rootName} exact={rootName === '/' && true} className="header__menu-item">
              <span className="header__menu-text">{name}</span>
              <FontAwesomeIcon className="header__menu-icon" icon={icon} />
            </NavLink>
          ))}
        </div>
        <div className="header__balance">
          <div className="header__balance-item">
            <span className="header__balance-title">Balance</span>
            <span className="header__balance-total header__balance-total--danger">$-74</span>
          </div>
          <div className="header__balance-item">
            <span className="header__balance-title">Pending</span>
            <span className="header__balance-total">$120</span>
          </div>
          <div className="header__balance-item">
            <span className="header__balance-title">Abailable</span>
            <span className="text-light header__balance-total">$156</span>
          </div>
        </div>
        <div className="header__user">
          <UserDropdown />
        </div>
      </div>
    </>
  );
};

export default Header;
