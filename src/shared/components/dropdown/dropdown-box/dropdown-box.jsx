import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
// Styles
import './dropdown-box.sass';

const DropdownBox = ({ children, className, isActive, onClick }) => {
  const boxRef = useRef(null);

  const classnames = classNames({
    'dropdown-box': true,
    [className]: className,
  });

  return (
    <CSSTransition nodeRef={boxRef} in={isActive} timeout={300} unmountOnExit classNames="dropdown-box-animation">
      <div ref={boxRef} className={classnames} onClick={onClick}>
        {children}
      </div>
    </CSSTransition>
  );
};

DropdownBox.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

export default DropdownBox;
