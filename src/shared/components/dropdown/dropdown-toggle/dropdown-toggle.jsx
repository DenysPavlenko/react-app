import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './dropdown-toggle.sass';

const DropdownToggle = ({ children, className, toggleDropdown, isExpanded }) => {
  const classnames = classNames({
    'dropdown-toggle': true,
    'is-active': isExpanded,
    [className]: className,
  });

  return (
    <div className={classnames} onClick={toggleDropdown}>
      {children}
    </div>
  )
};

DropdownToggle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isExpanded: PropTypes.bool,
  toggleDropdown: PropTypes.func,
};

export default DropdownToggle;
