import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { toggleMail } from 'redux/mail/actions';
import { selectMailActive } from 'redux/mail/selectors';
// Components
import MailContent from 'components/mail-content/mail-content';
// Styles
import './mail.sass';

const Mail = ({ isActive, toggleMail }) => {
  return (
    <div className="mail">
      <CSSTransition in={isActive} unmountOnExit timeout={300} classNames="mail-overlay-animation">
        <div className="mail__overlay" onClick={toggleMail}></div>
      </CSSTransition>
      <CSSTransition in={isActive} unmountOnExit timeout={300} classNames="mail-content-animation">
        <MailContent />
      </CSSTransition>
    </div>
  );
};

Mail.propTypes = {
  isActive: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isActive: selectMailActive,
});

const mapDispatchToProps = dispatch => ({
  toggleMail: () => dispatch(toggleMail()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mail);
