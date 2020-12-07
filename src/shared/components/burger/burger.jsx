import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './burger.sass';

const Burger = ({ className, noBorder, ...otherProps }) => {
  const classnames = classNames({
    'burger': true,
    'burger--no-border': noBorder,
    [className]: className,
  });

  return (
    <div className={classnames} {...otherProps}>
      <span></span>
    </div>
  );
};

Burger.propTypes = {
  className: PropTypes.string
};

export default Burger;
