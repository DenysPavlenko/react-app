import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './styles.sass';

const InfoWidget = ({ icon, title, value, color, className, onClick, active }) => {
  const classes = classNames({
    'info-widget': true,
    [`info-widget--${color}`]: color,
    [className]: className
  });

  const widgetTitleClass = classNames({
    'info-widget__title': true,
    'text-danger': parseInt(value) < 0 && active,
    'text-accent': parseInt(value) > 0 && active
  });

  return (
    <div className={classes} onClick={onClick} style={{ cursor: `${onClick ? 'pointer' : ''}` }}>
      <div className="info-widget__left">
        <FontAwesomeIcon className="info-widget__icon" icon={icon} />
        <Typography component="h6" className="info-widget__title">{title}</Typography>
      </div>
      <div className="info-widget__right">
        <Typography component="h1" className={widgetTitleClass}>{value}</Typography>
      </div>
    </div>
  );
};

InfoWidget.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default InfoWidget;
