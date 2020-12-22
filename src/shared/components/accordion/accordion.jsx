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
    className: PropTypes.string,
    expanded: PropTypes.bool,
    onChange: PropTypes.func,
  };

  state = {
    isExpanded: false
  };

  componentDidMount() {
    const { expanded } = this.props;
    if (expanded) {
      this.setState({ isExpanded: expanded })
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.expanded !== this.props.expanded) {
      this.setState({ isExpanded: this.props.expanded })
    }
  };

  toggleAccordion = () => {
    this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }));
    this.props.onChange();
  };

  render() {
    const { children, className } = this.props;
    const { isExpanded } = this.state;

    const classes = classNames({
      'is-expanded': isExpanded,
      [className]: className,
    });

    return (
      <div className={classes}>
        {React.Children.map(children, child => (
          React.cloneElement(child, { toggleAccordion: this.toggleAccordion, isExpanded })
        ))}
      </div>
    );
  }
}

export default Accordion;
