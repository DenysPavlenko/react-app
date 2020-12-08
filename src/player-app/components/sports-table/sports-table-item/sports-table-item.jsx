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

const SportsTableItem = ({ value, info, infoPosition, infoLeft, isActive, selection, handleItemClick, colorScheme }) => {
  const classes = classNames({
    'sports-table-item': true,
    'is-active': isActive,
    [`theme-${colorScheme}`]: colorScheme,
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
  colorScheme: PropTypes.string,
  infoLeft: PropTypes.bool,
  onClick: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(SportsTableItem);
