import React, { useState, useEffect, forwardRef, useRef } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
// Components
import Spinner from 'shared/components/spinner/spinner';
import Close from 'shared/components/close/close';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
// Styles
import './modal.sass';

const Modal = ({ hidden, closeModal, onExited, children, size, className, loading, error, retry, noClose }) => {
  const modalRef = useRef(null);
  return (
    <CSSTransition nodeRef={modalRef} in={!hidden} timeout={300} unmountOnExit onExited={onExited} classNames="modal-animation">
      <ModalContent
        className={className}
        size={size}
        loading={loading}
        error={error}
        retry={retry}
        noClose={noClose}
        closeModal={closeModal}
        ref={modalRef}
      >
        {children}
      </ModalContent>
    </CSSTransition>
  )
};

const ModalContent = forwardRef(({ children, closeModal, noClose, size, className, loading, error, retry }, ref) => {
  const [container] = useState(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);
    toggleScroll(true);
    return () => {
      document.body.removeChild(container);
      toggleScroll(false);
    }
  }, [container]);

  const toggleScroll = (hide) => {
    const html = document.querySelector('html');
    const header = document.querySelector('.header');
    const documentWidth = document.documentElement.clientWidth;
    const windowWidth = window.innerWidth;
    const scrollBarWidth = windowWidth - documentWidth;
    if (hide) {
      html.style.overflowY = 'hidden';
      html.style.paddingRight = `${scrollBarWidth}px`;
      header.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      html.style.overflowY = 'auto';
      html.style.paddingRight = 0;
      header.style.paddingRight = 0;
    }
  };

  const classes = classNames({
    'modal': true,
    'modal--loading': loading || error,
    [`modal--${size}`]: size,
    [className]: className
  });

  return createPortal(
    <div className={classes} ref={ref}>
      <div className="modal__container">
        <div className="modal__wrapper">
          <div className="modal__overlay" onClick={closeModal}></div>
          <div className="modal__block">
            {children}
            {!noClose && <Close className="modal__close" onClick={closeModal} dark />}
            {error && <div className="modal__status"><ErrorIndicator retry={retry} /></div>}
            {(loading && !error) && <div className="modal__status"><Spinner boxed /></div>}
          </div>
        </div>
      </div>
    </div>,
    container
  )
});

Modal.propTypes = {
  hidden: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  loading: PropTypes.bool,
  noClose: PropTypes.bool,
  className: PropTypes.string,
  onExited: PropTypes.func
};

export default Modal;
