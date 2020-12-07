import React from 'react';
// Components
import Dropdown from 'shared/components/dropdown/dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
// Styles
import './header-dropdown.sass';

const HeaderDropdown = ({ name, children }) => {
  return (
    <Dropdown className="header-dropdown" closeOnClick>
      <Dropdown.Toggle className="header-dropdown__toggle">
        <FontAwesomeIcon icon={faUser} className="header-dropdown__toggle-icon" />
        <div className="header-dropdown__toggle-name">{name}</div>
        <FontAwesomeIcon icon={faChevronDown} className="header-dropdown__toggle-chevron" />
      </Dropdown.Toggle>
      <Dropdown.Box className="header-dropdown__box">
        {children}
      </Dropdown.Box>
    </Dropdown>
  );
};

export default HeaderDropdown;
