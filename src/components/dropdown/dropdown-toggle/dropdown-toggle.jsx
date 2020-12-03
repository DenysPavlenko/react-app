import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Hooks
import useOnClickOutside from 'hooks/useClickOutside'
// Styles
import './dropdown-toggle.sass';

const DropdownToggle = ({ children, className, toggleDropdown, isExpanded }) => {
  const toggleRef = useRef();

  useOnClickOutside(toggleRef, () => toggleDropdown(), isExpanded);

  const classnames = classNames({
    'dropdown-toggle': true,
    'is-active': isExpanded,
    [className]: className,
  });

  return (
    <div ref={toggleRef} className={classnames} onClick={toggleDropdown}>
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
