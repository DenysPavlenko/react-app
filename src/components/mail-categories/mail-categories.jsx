import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Styles
import './mail-categories.sass';

const categories = [
  { category: 'inbox', title: 'inbox' },
  { category: 'sent', title: 'sent' },
  { category: 'new', title: 'new' },
]

const MailCategories = ({ defaultColorScheme, currentCategory, handleCategorySwitch, className }) => {
  const classes = classNames({
    'mail-categories': true,
    [`mail-categories--${defaultColorScheme}`]: defaultColorScheme,
    className: [className]
  });

  return (
    <div className={classes}>
      {categories.map(({ title, category }) => (
        <div
          key={category}
          className={`mail-categories__category ${category === currentCategory ? 'is-active' : ''}`}
          onClick={() => handleCategorySwitch(category)}>
          {title}
        </div>
      ))}
    </div>
  );
};

MailCategories.propTypes = {
  defaultColorScheme: PropTypes.string,
  className: PropTypes.string,
  currentCategory: PropTypes.string,
  handleCategorySwitch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(MailCategories);
