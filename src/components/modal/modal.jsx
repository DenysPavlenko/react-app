import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
// Components
import Spinner from 'components/spinner/spinner';
import Close from 'components/close/close';
// Styles
import './modal.sass';

class Modal extends Component {
  modalParent = document.createElement('div');
  modalRef = createRef();

  static defaultProps = {
    loading: false,
  }

  static propTypes = {
    hidden: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    size: PropTypes.string,
    loading: PropTypes.bool,
    noClose: PropTypes.bool,
    className: PropTypes.string
  }

  componentDidMount() {
    const { hidden } = this.props;
    document.body.appendChild(this.modalParent);
    this.toggleScroll(hidden)
  }
  componentDidUpdate(prevProps) {
    const { hidden: oldHidden } = prevProps;
    const { hidden } = this.props;
    if (oldHidden !== hidden) {
      this.toggleScroll(hidden);
    }
  }
  componentWillUnmount() {
    this.toggleScroll();
    document.body.removeChild(this.modalParent);
  }

  toggleScroll = (hidden = true) => {
    const html = document.querySelector('html');
    const documentWidth = document.documentElement.clientWidth;
    const windowWidth = window.innerWidth;
    const scrollBarWidth = windowWidth - documentWidth;
    if (!hidden) {
      html.style.overflowY = 'hidden';
      html.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      html.style.overflowY = 'auto';
      html.style.paddingRight = 0;
    }
  }

  render() {
    const { hidden, closeModal, children, size, className, onExited, loading, noClose } = this.props;
    const classes = classNames({
      'modal': true,
      [`modal--${size}`]: size,
      [className]: className
    });

    return ReactDOM.createPortal(
      <CSSTransition nodeRef={this.modalRef} in={!hidden} onExited={onExited} timeout={300} unmountOnExit classNames="modal-animation">
        <div className={classes} ref={this.modalRef}>
          <div className="modal__container">
            <div className="modal__wrapper">
              <div className="modal__overlay" onClick={closeModal}></div>
              <div className="modal__block">
                {!noClose && <Close className="modal__close" onClick={closeModal} dark />}
                {children}
                {loading && <div className="modal__loading"><Spinner lg accent /></div>}
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>,
      this.modalParent
    );
  }
}

export default Modal;
