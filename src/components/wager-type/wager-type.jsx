import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'components/typography/typography';
// Styles
import './wager-type.sass';

const WagerType = ({ type, title, icon, background, isActive, className, ...otherProps }) => {
  const classes = classNames({
    'wager-type': true,
    'is-active': isActive,
    [`wager-type--${background}`]: background,
    [className]: className
  });

  return (
    <div className={classes} {...otherProps}>
      {icon ?
        <FontAwesomeIcon className="wager-type__icon" icon={icon} />
        :
        <Typography component="span" variant="h3" className="wager-type__letter text-uppercase">{title[0]}</Typography>
      }
      <Typography component="span" variant="h6" className="wager-type__title text-uppercase">{title}</Typography>
    </div>
  );
};

WagerType.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  background: PropTypes.string,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

export default WagerType;
