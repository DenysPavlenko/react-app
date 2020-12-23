import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Typography from 'shared/components/typography/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Utils
import setDangerClass from 'shared/utils/set-danger-class';
// Styles
import './info-widget.sass';

const InfoWidget = ({ icon, title, value, color, className, onClick }) => {
  const classes = classNames({
    'info-widget': true,
    [`info-widget--${color}`]: color,
    [className]: className
  });

  return (
    <div className={classes} onClick={onClick} style={{ cursor: `${onClick ? 'pointer' : ''}` }}>
      <div className="info-widget__left">
        <FontAwesomeIcon className="info-widget__icon" icon={icon} />
        <Typography component="h6" className="info-widget__title">{title}</Typography>
      </div>
      <div className="info-widget__right">
        <Typography component="h1" className={`info-widget__title ${setDangerClass(value)}`}>{value}</Typography>
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
};

export default InfoWidget;
