import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
// Styles
import './dropdown-box.sass';

const DropdownBox = ({ children, className, isExpanded, toggleDropdown, closeOnClick }) => {
  const boxRef = useRef(null);

  const classnames = classNames({
    'dropdown-box': true,
    [className]: className,
  });

  return (
    <CSSTransition nodeRef={boxRef} in={isExpanded} timeout={300} unmountOnExit classNames="dropdown-box-animation">
      <div ref={boxRef} className={classnames} onClick={() => closeOnClick && toggleDropdown()}>
        {children}
      </div>
    </CSSTransition>
  );
};

DropdownBox.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isExpanded: PropTypes.bool,
  toggleDropdown: PropTypes.func,
  closeOnClick: PropTypes.bool,
};

export default DropdownBox;
