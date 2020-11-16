import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './personalize-item.sass';

const PersonalizeItem = ({ title, color, className, ...otherProps }) => {
  const classes = classNames({
    'personalize-item': true,
    [className]: className
  });

  return (
    <div className={classes} {...otherProps}>
      <div className="personalize-item__title">{title}</div>
      <div className="personalize-item__color"></div>
    </div>
  );
};

PersonalizeItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
};

export default PersonalizeItem;
