import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './image.sass';

const Image = ({ src, alt, icon, bgimage, className, ...otherProps }) => {
  const classes = classNames({
    'image': !icon && !bgimage,
    'bg-image': bgimage,
    [className]: className
  });

  return (
    <>
      {!bgimage ?
        <img src={src} alt={alt} className={classes} {...otherProps} />
        :
        <figure className={classes} style={{ backgroundImage: `url(${bgimage})` }} />
      }
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  bgimage: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.bool
}

export default Image;
