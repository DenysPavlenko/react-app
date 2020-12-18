import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './row-group.sass';

const RowGroup = ({ children, nowrap, size }) => {
  const classes = classNames({
    'row-group': true,
    'row-group--nowrap': nowrap,
    [`row-group--${size}`]: size
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

RowGroup.propTypes = {
  children: PropTypes.node,
  nowrap: PropTypes.bool,
  size: PropTypes.string,
};

export default RowGroup;
