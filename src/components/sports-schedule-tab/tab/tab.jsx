import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'components/typography/typography';

const Tab = ({ title, icon, event, handleEvent, isActive, defaultColorScheme, ...otherProps }) => {
  const classes = classNames({
    'sports-schedule-tab': true,
    [`sports-schedule-tab--${defaultColorScheme}`]: defaultColorScheme,
    'is-active': isActive,
  });

  return (
    <div className={classes} onClick={() => { handleEvent(event) }} {...otherProps} >
      <div className="sports-schedule-tab__heading">
        <FontAwesomeIcon icon={icon} className={`sports-schedule-tab__icon ${isActive ? 'text-light' : 'text-dark'}`} />
        <Typography component="h3" className={`mb-0 text-uppercase ${isActive ? 'text-light' : 'text-dark'}`}>{title}</Typography>
      </div>
    </div>
  )
};

Tab.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  event: PropTypes.string,
  handleEvent: PropTypes.func,
  isActive: PropTypes.bool,
  colorScheme: PropTypes.string,
  defaultColorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme
});

export default connect(mapStateToProps)(Tab);
