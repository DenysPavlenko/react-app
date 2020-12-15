import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './page-header.sass';

const PageHeader = ({ left, right, className }) => {
  const classes = classNames({
    'page-header': true,
    [className]: className,
  });

  return (
    <div className={classes}>
      <div className="page-header__left">
        {left}
      </div>
      <div className="page-header__right">
        {right}
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  className: PropTypes.string,
};

export default PageHeader;
