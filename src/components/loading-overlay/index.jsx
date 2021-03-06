import React, { useRef } from 'react';
// Components
import Spinner from 'components/spinner/spinner';
import ErrorIndicator from 'components/error-indicator';
import { CSSTransition } from 'react-transition-group';
// Styles
import './styles.sass';

const LoadingOverlay = ({ loading, error, retry }) => {
  const overlayRef = useRef(null);

  return (
    <CSSTransition nodeRef={overlayRef} in={loading || (error === true)} timeout={300} unmountOnExit classNames="loadig-overlay-animation">
      <div className="loading-overlay">
        {error && <ErrorIndicator light retry={retry} />}
        {(!error && loading) && <Spinner boxed light />}
      </div>
    </CSSTransition>
  );
};

export default LoadingOverlay;
