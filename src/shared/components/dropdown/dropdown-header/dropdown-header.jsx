import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './dropdown-header.sass';

const DropdownHeader = ({ children, className, isActive, onClick }) => {
  const classnames = classNames({
    'dropdown-header': true,
    'is-active': isActive,
    [className]: className,
  });

  return (
    <div className={classnames} onClick={onClick}>
      {children}
    </div>
  )
};

DropdownHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

export default DropdownHeader;
