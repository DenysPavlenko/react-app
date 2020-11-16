import React from 'react';
import { NavLink } from 'react-router-dom';
// Components
import UserDropdown from 'components/user-dropdown/user-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BalanceOverview from 'components/balance-overview/balance-overview';
// Styles
import './header.sass';
// Assets
import cup from 'assets/images/icons/cup.png'
import timer from 'assets/images/icons/timer.png'
import cards from 'assets/images/icons/cards.png'
import horse from 'assets/images/icons/horse.png'
import scores from 'assets/images/icons/scores.png'

const menu = [
  { name: 'Sports', rootName: '/sports', icon: cup },
  { name: 'Live', rootName: '/live', icon: timer },
  { name: 'Casino', rootName: '/casino', icon: cards },
  { name: 'Horses', rootName: '/horses', icon: horse },
  { name: 'Scores', rootName: '/scores', icon: scores },
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
              <img src={icon} className="header__menu-icon" alt="nav-icon"/>
            </NavLink>
          ))}
        </div>
        <div className="header__balance">
          <BalanceOverview noFreePlay shrinkOnMobile />
        </div>
        <div className="header__user">
          <UserDropdown />
        </div>
      </div>
    </>
  );
};

export default Header;
