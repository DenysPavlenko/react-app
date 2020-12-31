import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'shared/redux/color-scheme/selectors';
// Hooks
import useOnClickOutside from 'shared/hooks/useClickOutside'
// Components
import Button from 'shared/components/button/button';
import Simplebar from 'simplebar-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './select.sass';

const Select = ({ options, name, value, placeholder, inline, onChange, fluid, variant, size, className, style, colorScheme }) => {
  const selectDopdownRef = useRef(null);
  const selectRef = useRef(null);
  const selectOptionsRef = useRef(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    if (value) {
      setSelectedValue(value)
    }
  }, [options, value]);

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

  const handleOptionClick = (e, value) => {
    e.stopPropagation();
    setIsExpanded(false);
    setSelectedValue(value);
    onChange({ target: { name, value } })
  };

  const classes = classNames({
    'select': true,
    'select--inline': inline,
    'is-expanded': isExpanded,
    [`select--${variant}`]: variant,
    [`select--${size}`]: size,
    'select--fluid': fluid,
    [`theme-${colorScheme}`]: colorScheme,
    [className]: className
  });

  const getLabel = selectedValue => options.find(({ value }) => (value === selectedValue)).label;

  return (
    <div ref={selectRef} className={classes} onClick={handleSelectClick}>
      <Button className="select__label" standard={false} style={style}>
        {selectedValue !== null ? getLabel(selectedValue) : placeholder}
        <FontAwesomeIcon className="select__label-caret" icon="caret-down" />
      </Button>
      <CSSTransition nodeRef={selectDopdownRef} in={isExpanded} timeout={300} onEnter={handleOnEnter} unmountOnExit classNames="select-box-animation">
        <div ref={selectDopdownRef} className="select__dropdown">
          <Simplebar className="custom-scroll select__dropdown-scroll">
            <div className="select__options" ref={selectOptionsRef}>
              {options.map(({ value, label }) => (
                <div
                  key={value}
                  className={`select__option ${value === selectedValue ? 'is-selected' : ''}`}
                  data-option={value}
                  onClick={(e) => { handleOptionClick(e, value) }}
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
};

Select.defaultProps = {
  placeholder: '',
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  inline: PropTypes.bool,
  fluid: PropTypes.bool,
  variant: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme
});

export default connect(mapStateToProps)(Select);
