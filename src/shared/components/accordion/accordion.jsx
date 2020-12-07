import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import AccordionToggle from './accordion-toggle/accordion-toggle';
import AccordionContent from './accordion-content/accordion-content';

class Accordion extends Component {
  static Toggle = AccordionToggle;
  static Content = AccordionContent;
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  state = {
    isExpanded: false
  };

  componentDidMount() {
    const { expanded } = this.props;
    if (expanded) {
      this.setState({ isExpanded: true })
    }
  }

  toggleAccordion = () => {
    this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }));
  };

  render() {
    const { children, className, expanded, ...otherProps } = this.props;
    const { isExpanded } = this.state;

    const classes = classNames({
      'is-expanded': isExpanded,
      [className]: className,
    });

    return (
      <div className={classes} {...otherProps}>
        {React.Children.map(children, child => (
          React.cloneElement(child, { toggleAccordion: this.toggleAccordion, isExpanded })
        ))}
      </div>
    );
  }
}

export default Accordion;
