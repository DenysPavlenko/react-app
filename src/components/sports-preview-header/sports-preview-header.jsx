import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Components
import Typography from 'components/typography/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './sports-preview-header.sass';

const SportsPreviewHeader = ({ title, defaultColorScheme, className }) => {
  const classes = classNames({
    'sports-preview-header': true,
    [`sports-preview-header--${defaultColorScheme}`]: defaultColorScheme,
    [className]: className
  });

  return (
    <div className={classes}>
      <Typography component="h2" className="mb-0 sports-preview-header__title">{title}</Typography>
      <div className="sports-preview-header__icon-wrap">
        <FontAwesomeIcon className="sports-preview-header__icon" icon="football-ball" />
      </div>
    </div>
  );
};

SportsPreviewHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.bool,
  defaultColorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme
});

export default connect(mapStateToProps)(SportsPreviewHeader);
