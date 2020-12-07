import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './image.sass';

const Image = ({ src, alt, icon, bgImage, className, ...otherProps }) => {
  const classes = classNames({
    'image': !icon && !bgImage,
    'bg-image': bgImage,
    [className]: className
  });

  return (
    <>
      {!bgImage ?
        <img src={src} alt={alt} className={classes} {...otherProps} />
        :
        <figure className={classes} style={{ backgroundImage: `url(${bgImage})` }} />
      }
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  bgImage: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.bool
}

export default Image;
