import React from 'react';
// Components
import Dropdown from 'components/dropdown/dropdown';
import UserDropdownMenu from 'components/user-dropdown-menu/user-dropdown-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
// Styles
import './user-dropdown.sass';

const UserDropdown = () => {
  return (
    <Dropdown className="user-dropdown">
      <Dropdown.Toggle className="user-dropdown__toggle">
        <FontAwesomeIcon icon={faUser} className="user-dropdown__toggle-icon" />
        <div className="user-dropdown__toggle-name">PA47</div>
        <FontAwesomeIcon icon={faChevronDown} className="user-dropdown__toggle-chevron" />
      </Dropdown.Toggle>
      <Dropdown.Box className="user-dropdown__box">
        <Dropdown.Close >
          <UserDropdownMenu />
        </Dropdown.Close >
      </Dropdown.Box>
    </Dropdown>
  );
};

export default UserDropdown;
