import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
// Redux
import { selectUserName } from 'shared/redux/user/selectors';
// Components
import Dropdown from 'shared/components/dropdown/dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
// Styles
import './header-dropdown.sass';

const HeaderDropdown = ({ userName, children, closeOnClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleDropdown = () => setIsActive(isActive => !isActive);

  return (
    <Dropdown className="header-dropdown" isActive={isActive} onClickOutside={handleDropdown}>
      <Dropdown.Header className="header-dropdown__toggle" onClick={handleDropdown}>
        <FontAwesomeIcon icon={faUser} className="header-dropdown__toggle-icon" />
        <div className="header-dropdown__toggle-name">{userName}</div>
        <FontAwesomeIcon icon={faChevronDown} className="header-dropdown__toggle-chevron" />
      </Dropdown.Header>
      <Dropdown.Box className="header-dropdown__box" onClick={() => closeOnClick && handleDropdown()}>
        {children}
      </Dropdown.Box>
    </Dropdown>
  );
};

HeaderDropdown.defaultProps = {
  closeOnClick: true,
};

HeaderDropdown.propTypes = {
  children: PropTypes.node,
  closeOnClick: PropTypes.bool,
  userName: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  userName: selectUserName,
});

export default connect(mapStateToProps)(HeaderDropdown);
