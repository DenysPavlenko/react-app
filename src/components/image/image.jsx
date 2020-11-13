import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './image.sass';

const Image = ({ src, alt, icon, className, ...otherProps }) => {
  const classes = classNames({
    'image': !icon,
    [className]: className
  });

  return (
    <img src={src} alt={alt} className={classes} {...otherProps} />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  icon: PropTypes.bool
}

export default Image;
