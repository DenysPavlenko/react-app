import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Input from 'components/input/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './checkbox.sass';

const Checkbox = ({ checked, className, label, onChange, ...otherProps }) => {
  const classnames = classNames({
    'checkbox': true,
    [className]: className,
  });

  return (
    <label className={classnames} {...otherProps}>
      <div className="checkbox__box">
        <Input standard={false} className="checkbox__input" type="checkbox" checked={checked} onChange={onChange} />
        <span className="checkbox__checkmark">
          <FontAwesomeIcon className="checkbox__checkmark-icon" icon="check" />
        </span>
      </div>
      {label && <div className="checkbox__label">{label}</div>}
    </label>
  );
};

Checkbox.defaultProps = {
  checked: false,
};

Checkbox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node,
  onChange: PropTypes.func,
};

export default Checkbox;
