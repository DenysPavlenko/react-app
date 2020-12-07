import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './table.sass';

const Table = ({ children, className }) => {
  const classes = classNames({
    'table': true,
    [className]: className,
  });

  return (
    <table className={classes}>
      {children}
    </table>
  );
};

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Table;
