import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Input from 'shared/components/input/input';
// Styles
import './radio-button.sass';

const RadioButton = ({ label, className, onChange, name, checked, ...otherProps }) => {
  const classnames = classNames({
    'radio-button': true,
    [className]: className,
  });

  return (
    <label className={classnames} {...otherProps} onClick={(e) => e.stopPropagation()}>
      <div className="radio-button__box">
        <Input standard={false} className="radio-button__input" onChange={onChange} checked={checked} type="radio" {...otherProps} />
        <span className="radio-button__checkmark"></span>
      </div>
      {label && <span className="radio-button__label">{label}</span>}
    </label>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default RadioButton;
