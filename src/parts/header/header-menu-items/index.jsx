import React from 'react';
import PropTypes from 'prop-types';
// Components
import HeaderMenuItem from '../header-menu-item';
// Styles
import './styles.sass';

const HeaderMenuItems = ({ menu }) => {
  return (
    <div className="header-menu-items">
      {menu.map(({ rootName, name, icon }, idx) => (
        <HeaderMenuItem key={idx} rootName={rootName} name={name} icon={icon} />
      ))}
    </div>
  );
};

HeaderMenuItems.propTypes = {
  menu: PropTypes.array,
};

export default HeaderMenuItems;
