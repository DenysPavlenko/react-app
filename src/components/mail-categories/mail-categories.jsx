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

const MailCategories = ({ defaultColorScheme, currentCategory, handleCategorySwitch }) => {
  const classes = classNames({
    'mail-categories': true,
    [`mail-categories--${defaultColorScheme}`]: defaultColorScheme
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
  defaultColorScheme: PropTypes.string
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(MailCategories);
