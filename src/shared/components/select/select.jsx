import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
// Hooks
import useOnClickOutside from 'shared/hooks/useClickOutside'
// Components
import Button from 'shared/components/button/button';
import Simplebar from 'simplebar-react';
// Styles
import './select.sass';

const Select = ({ options, option, placeholder, inline, onChange, fluid, variant, className }) => {
  const selectDopdownRef = useRef(null);
  const selectRef = useRef(null);
  const selectOptionsRef = useRef(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [data, setData] = useState({
    value: '',
    selectedOption: 0,
  });

  useEffect(() => {
    if (option !== undefined) {
      setData(data => ({ ...data, selectedOption: options.findIndex(({ value }) => (value === option)) }));
    }
  }, [options, option])

  useOnClickOutside(selectRef, () => setIsExpanded(false), isExpanded);

  const handleOnEnter = () => {
    let maxWidth;
    const selectOptions = selectOptionsRef.current;
    const selectDopdown = selectDopdownRef.current;
    const options = selectOptions.querySelectorAll('.select__option');
    for (let i = 0; i < options.length; i++) {
      maxWidth = Math.max(options[i].scrollWidth);
    }
    selectDopdown.style.minWidth = maxWidth + 'px'
  };

  const handleSelectClick = () => setIsExpanded((isExpanded) => !isExpanded);

  const handleOptionClick = (e, idx, value) => {
    e.stopPropagation();
    setIsExpanded(false);
    setData(data => ({ ...data, value, selectedOption: idx }));
    onChange(value);
  };

  const classes = classNames({
    'select': true,
    'select--inline': inline,
    [`select--${variant}`]: variant,
    'select--fluid': fluid,
    [className]: className
  });

  const { selectedOption } = data;

  return (
    <div ref={selectRef} className={classes} onClick={handleSelectClick}>
      <Button className="select__label" standard={false}>
        {selectedOption !== -1 ? options[selectedOption].label : placeholder}
      </Button>

      <CSSTransition nodeRef={selectDopdownRef} in={isExpanded} timeout={300} onEnter={handleOnEnter} unmountOnExit classNames="select-box-animation">
        <div ref={selectDopdownRef} className="select__dropdown">
          <Simplebar className="custom-scroll select__dropdown-scroll">
            <div className="select__options" ref={selectOptionsRef}>
              {options.map(({ value, label }, idx) => (
                <div
                  key={value}
                  className={`select__option ${idx === selectedOption ? 'is-selected' : ''}`}
                  data-option={value}
                  onClick={(e) => { handleOptionClick(e, idx, value) }}
                >
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
  option: PropTypes.string,
  placeholder: PropTypes.string,
  inline: PropTypes.bool,
  textSm: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default Select;