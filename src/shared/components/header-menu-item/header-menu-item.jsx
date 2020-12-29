import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'shared/redux/color-scheme/selectors';
// Components
import Image from 'shared/components/image/image';
// Styles
import './header-menu-item.sass';

const HeaderMenuItem = ({ rootName, name, icon, colorScheme }) => {
  const classes = classNames({
    'header-menu-item': true,
    [`theme-${colorScheme}`]: colorScheme
  });

  return (
    <NavLink to={rootName} exact={rootName === '/' && true} className={classes}>
      <span className="header-menu-item__text">{name}</span>
      <Image src={icon} className="header-menu-item__icon" alt="nav-icon" icon />
    </NavLink>
  );
};

HeaderMenuItem.propTypes = {
  rootName: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  colorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(HeaderMenuItem);
