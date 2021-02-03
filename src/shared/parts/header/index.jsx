import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// Styles
import './styles.sass';

const Header = ({ menu, content, dropdown }) => {
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

Header.propTypes = {
  menu: PropTypes.node,
  content: PropTypes.node,
  dropdown: PropTypes.node,
};

export default Header;
