import React, { Fragment } from 'react';
// Styles
import './header.sass';

const Header = ({ sideMenu, menu, content, dropdown }) => {
  return (
    <Fragment>
      <div className="header-gap"></div>
      <div className="header">
        <div className="header__menu">
          {menu}
        </div>
        <div className="header__content">
          {content}
        </div>
        <div className="header__user">
          {dropdown}
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
