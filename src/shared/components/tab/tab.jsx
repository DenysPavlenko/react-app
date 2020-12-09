import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'shared/redux/color-scheme/selectors';
// Components
import Button from 'shared/components/button/button';
// Styles
import './tab.sass';

const Tab = ({ isActive, children, onClick, className, colorScheme }) => {
  const classes = classNames({
    'tab': true,
    'is-active': isActive,
    [`theme-${colorScheme}`]: colorScheme,
    [className]: className
  });

  return (
    <Button className={classes} standard={false} onClick={onClick}>{children}</Button>
  );
};

Tab.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  colorScheme: PropTypes.string,
  className: PropTypes.string,
}

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(Tab);