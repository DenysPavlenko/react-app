import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import DropdownToggle from './dropdown-toggle/dropdown-toggle';
import DropdownBox from './dropdown-box/dropdown-box';
// Styles
import './dropdown.sass';

class Dropdown extends Component {
  dropdownRef = createRef(null);

  static Toggle = DropdownToggle;
  static Box = DropdownBox;

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    closeOnClick: PropTypes.bool,
  };

  componentDidMount() {
    document.addEventListener('click', this.clickOutside);
  };
  componentWillUnmount() {
    document.removeEventListener('click', this.clickOutside);
  };

  clickOutside = e => {
    const { isExpanded } = this.state;
    if (isExpanded) {
      if (!this.dropdownRef.current || this.dropdownRef.current.contains(e.target)) {
        return; }
      this.toggleDropdown();
    }
  };

  state = {
    isExpanded: false
  };

  toggleDropdown = () => {
    this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }));
  };

  render() {
    const { children, className, closeOnClick } = this.props;
    const { isExpanded } = this.state;
    const classnames = classNames({
      'dropdown': true,
      [className]: className,
    });

    return (
      <div className={classnames} ref={this.dropdownRef}>
        {React.Children.map(children, child => (
          React.cloneElement(child, { closeOnClick, isExpanded, toggleDropdown: this.toggleDropdown })
        ))}
      </div>
    );
  }
}

export default Dropdown;
