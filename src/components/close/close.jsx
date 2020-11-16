import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Assets
import { ReactComponent as CloseIcon } from 'assets/images/icons/close.svg';
// Styles
import './close.sass';

const Close = ({ className, size, ...otherProps }) => {
  const classnames = classNames({
    'close': true,
    [className]: className,
  });
  const iconSize = size ? size : '20';

  return (
    <CloseIcon className={classnames} width={iconSize} height={iconSize} {...otherProps} />
  );
};

Close.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
};

export default Close;
