import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Typography from 'shared/components/typography/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './info-widget.sass';

const InfoWidget = ({ icon, title, value, color, className }) => {
  const classes = classNames({
    'info-widget': true,
    [`info-widget--${color}`]: color,
    [className]: className
  });

  return (
    <div className={classes}>
      <div className="info-widget__left">
        <FontAwesomeIcon className="info-widget__icon" icon={icon} />
        <Typography component="h6" className="info-widget__title">{title}</Typography>
      </div>
      <div className="info-widget__right">
        <Typography component="h1" className={`info-widget__title ${parseInt(value) < 0 ? 'text-danger' : ''}`}>{value}</Typography>
      </div>
    </div >
  );
};

InfoWidget.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default InfoWidget;
