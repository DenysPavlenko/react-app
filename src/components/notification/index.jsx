import React, { useRef, forwardRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
// Componets
import Typography from 'components/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Close from 'components/close';
// Styles
import './styles.sass';

const Notification = ({ show, title, message, close }) => {
  const notificationRef = useRef(null);

  return (
    <CSSTransition nodeRef={notificationRef} in={show} timeout={300} unmountOnExit classNames="notification-animation">
      <NotificationContent
        title={title}
        message={message}
        close={close}
        ref={notificationRef}
      />
    </CSSTransition>
  )
};

const NotificationContent = forwardRef(({ title, message, close }, ref) => {
  const [container] = useState(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);
    return () => document.body.removeChild(container)
  }, [container]);

  useEffect(() => {
    const timer = setTimeout(() => close(), 3000);
    return () => clearTimeout(timer);
  }, [close]);

  return createPortal(
    <div ref={ref} className="notification" onClick={close}>
      <Close className="notification__close" size="sm" />
      <div className="notification__left">
        <div className="notification__icon">
          <FontAwesomeIcon icon="exclamation" />
        </div>
      </div>
      <div className="notification__right">
        <Typography component="h3" className="notification__title">{title || 'Warning!'}</Typography>
        <Typography component="p">{message}</Typography>
      </div>
      <div className="notification__indicator"></div>
    </div>,
    container
  )
});

Notification.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  close: PropTypes.func
};

export default Notification;
