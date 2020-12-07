import React, { Fragment } from 'react';
// Components
import Burger from 'shared/components/burger/burger';
// Styles
import './header.sass';

const Header = ({ burger, menu, content, dropdown }) => {
  return (
    <Fragment>
      <div className="header-gap"></div>
      <div className="header">
        {burger && <div className="header__burger" onClick={burger}><Burger noBorder /></div>}
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
