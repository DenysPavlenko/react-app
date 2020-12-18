import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Hooks
import useToggleScroll from 'shared/hooks/useToggleScroll'
// Styles
import './handle-mobile.sass';

const HandleMobile = ({ className, showOnMobile, children }) => {

  useToggleScroll(showOnMobile);

  const classes = classNames({
    'handle-mobile': true,
    'is-active': showOnMobile,
    [className]: className,
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

HandleMobile.propTypes = {
  className: PropTypes.string,
  showOnMobile: PropTypes.bool,
  children: PropTypes.node,
};

export default HandleMobile;
