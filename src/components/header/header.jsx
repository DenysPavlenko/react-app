import React from 'react';
// Components
import UserDropdown from 'components/user-dropdown/user-dropdown';
import BalanceOverview from 'components/balance-overview/balance-overview';
import HeaderMenu from 'components/header-menu/header-menu';
// Styles
import './header.sass';

const Header = () => {
  return (
    <>
      <div className="header-gap"></div>
      <div className="header">
        <div className="header__menu">
          <HeaderMenu />
        </div>
        <div className="header__balance">
          <BalanceOverview shrinkOnMobile />
        </div>
        <div className="header__user">
          <UserDropdown />
        </div>
      </div>
    </>
  );
};

export default Header;
