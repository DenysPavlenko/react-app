import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './styles.sass';

const ListItem = ({ children, className }) => {
  const classes = classNames({
    'list-item': true,
    [className]: className,
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ListItem;
