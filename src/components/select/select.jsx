import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
// Hooks
import useOnClickOutside from 'hooks/useClickOutside'
// Components
import Button from 'components/button/button';
import Simplebar from 'simplebar-react';
// Styles
import './select.sass';

const Select = ({ options, placeholder, inline, textSm, onChange, className }) => {
  const selectDopdownRef = useRef(null);
  const selectRef = useRef(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [data, setData] = useState({
    value: '',
    selectedOption: 0,
  });

  useOnClickOutside(selectRef, () => setIsExpanded(false), isExpanded);

  const handleSelectClick = () => setIsExpanded((isExpanded) => !isExpanded);

  const handleOptionClick = (e, idx, value) => {
    e.stopPropagation();
    setIsExpanded(false);
    setData((data) => ({ ...data, value, selectedOption: idx }));
    onChange(value);
  };

  const classes = classNames({
    'select': true,
    'select--inline': inline,
    'select--text-sm': textSm,
    [className]: className
  });

  const { selectedOption } = data;

  return (
    <div ref={selectRef} className={classes} onClick={handleSelectClick}>
      <Button className="select__label" standard={false}>
        {placeholder || options[selectedOption].label}
      </Button>

      <CSSTransition nodeRef={selectDopdownRef} in={isExpanded} timeout={300} unmountOnExit classNames="select-box-animation">
        <div ref={selectDopdownRef} className="select__dropdown">
          <Simplebar className="custom-scroll select__dropdown-scroll">
            <div className="select__options">
              {options.map(({ value, label }, idx) => (
                <div
                  key={value}
                  className={`select__option ${idx === selectedOption && 'is-selected'}`}
                  data-option={value}
                  onClick={(e) => { handleOptionClick(e, idx, value) }}>
                  {label}
                </div>
              ))}
            </div>
          </Simplebar>
        </div>
      </CSSTransition>
    </div>
  )
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  inline: PropTypes.bool,
  textSm: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default Select;
