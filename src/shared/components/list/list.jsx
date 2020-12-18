import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import ListItem from './list-item/list-item';
// Styles
import './list.sass';

class List extends Component {
  static Item = ListItem;

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  render() {
    const { children, className } = this.props;
    const classes = classNames({
      'list': true,
      [className]: className,
    });

    return (
      <div className={classes}>
        {React.Children.map(children, child => (
          React.cloneElement(child, {})
        ))}
      </div>
    );
  }
}

export default List;
