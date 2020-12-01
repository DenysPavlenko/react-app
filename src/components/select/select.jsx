import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Input from 'components/input/input';
import Button from 'components/button/button';
import Simplebar from 'simplebar-react';
// Styles
import './select.sass';

class Select extends Component {
  selectRef = React.createRef();

  static propTypes = {
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
    inline: PropTypes.bool,
    textSm: PropTypes.bool,
    className: PropTypes.string,
  }

  state = {
    value: '',
    selectedOption: 0,
    search: '',
    isExpanded: false
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
    const { selectedOption, options } = this.props;
    if (selectedOption) {
      const idx = options.findIndex(({ value }) => value === selectedOption);
      this.setState({ selectedOption: idx });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    const select = this.selectRef.current;
    if (!select.contains(e.target)) {
      select.classList.remove('is-expanded');
      this.setState({ isExpanded: false });
    }
  }

  handleSelectClick = () => {
    const select = this.selectRef.current;
    select.classList.toggle('is-expanded');
    this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }))
  }

  handleOptionClick = (e, idx, value) => {
    e.stopPropagation();
    const { onChange } = this.props;
    const select = this.selectRef.current;
    select.classList.remove('is-expanded');
    this.setState({ value, selectedOption: idx, isExpanded: false });
    onChange(value);
  }

  render() {
    const { options, placeholder, inline, textSm, className } = this.props;
    const { value, selectedOption, isExpanded } = this.state;
    const classes = classNames({
      'select': true,
      'select--inline': inline,
      'select--text-sm': textSm,
      [className]: className
    });

    return (
      <div ref={this.selectRef} className={classes} onClick={this.handleSelectClick}>
        <Button className="select__label" standard={false}>
          {placeholder || options[selectedOption].label}
        </Button>

        {isExpanded &&
          <div className="select__dropdown">
            <Simplebar className="custom-scroll select__dropdown-scroll">
              <div className="select__options">
                {options.map(({ value, label }, idx) => (
                  <div key={value} className={`select__option ${idx === selectedOption && 'is-selected'}`} data-option={value} onClick={(e) => { this.handleOptionClick(e, idx, value) }}>
                    {label}
                  </div>
                ))}
              </div>
            </Simplebar>
          </div>
        }
        <Input onChange={() => { }} value={value} type="hidden" disabled hidden standard={false} />
      </div>
    );
  }
}

export default Select;
