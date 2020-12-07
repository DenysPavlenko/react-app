import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'shared/redux/color-scheme/selectors';
// Components
import Typography from 'shared/components/typography/typography';
// Styles
import './sports-table-item.sass'

const SportsTableItem = ({ value, info, infoPosition, infoLeft, isActive, selection, handleItemClick, defaultColorScheme }) => {
  const classes = classNames({
    'sports-table-item': true,
    'is-active': isActive,
    [`theme-${defaultColorScheme}`]: defaultColorScheme,
  });

  const infoClasses = classNames({
    'sports-table-item__info': true,
    'sports-table-item__info--left': infoLeft,
    [`sports-table-item__info--${infoPosition}`]: infoPosition,
  });

  return (
    <div className={classes} onClick={() => handleItemClick(value, selection)}>
      <Typography component="span" variant="p-sm">{value}</Typography>
      <Typography className={infoClasses}>{info}</Typography>
    </div>
  );
};

SportsTableItem.propTypes = {
  value: PropTypes.string,
  info: PropTypes.string,
  infoPosition: PropTypes.string,
  defaultColorScheme: PropTypes.string,
  infoLeft: PropTypes.bool,
  onClick: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(SportsTableItem);
