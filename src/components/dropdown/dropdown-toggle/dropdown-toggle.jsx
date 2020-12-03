import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './dropdown-toggle.sass';

const DropdownToggle = ({ children, className, toggleDropdown, isExpanded }) => {
  const toggleRef = useRef();

  const handleClickOutside = useCallback(({ target }) => {
    const toggle = toggleRef.current;
    const dropdown = toggle.closest('.dropdown');
    if (!dropdown.contains(target)) {
      toggleDropdown();
    }
  }, [toggleDropdown]);

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isExpanded, handleClickOutside]);

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
