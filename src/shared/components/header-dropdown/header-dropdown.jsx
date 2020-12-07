import React from 'react';
import PropTypes from 'prop-types';
// Components
import Dropdown from 'shared/components/dropdown/dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
// Styles
import './header-dropdown.sass';

const HeaderDropdown = ({ name, children, closeOnClick }) => {
  return (
    <Dropdown className="header-dropdown" closeOnClick={closeOnClick}>
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

HeaderDropdown.defaultProps = {
  closeOnClick: true,
};

HeaderDropdown.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  closeOnClick: PropTypes.bool,
};

export default HeaderDropdown;
