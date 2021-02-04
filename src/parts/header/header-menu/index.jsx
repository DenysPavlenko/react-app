import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Burger from 'components/burger';
import HeaderMenuItem from '../header-menu-item';
// Styles
import './styles.sass';

const HeaderMenu = ({ burger, menu, className }) => {
  const classes = classNames({
    'header-menu': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <div className="header-menu__toggler" onClick={burger}>
        <Burger />
      </div>
      <div className="header-menu__items">
        {menu.map(({ rootName, name, icon }, idx) => (
          <HeaderMenuItem key={idx} rootName={rootName} name={name} icon={icon} />
        ))}
      </div>
    </div>
  );
};

HeaderMenu.propTypes = {
  burger: PropTypes.func,
  menu: PropTypes.array,
  className: PropTypes.string,
};

export default HeaderMenu;
