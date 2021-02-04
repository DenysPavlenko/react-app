import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Styles
import './styles.sass';

const categories = [
  { category: 'inbox', title: 'inbox' },
  { category: 'sent', title: 'sent' },
  { category: 'new', title: 'new' },
];

const MailCategories = ({ colorScheme, currentCategory, handleCategorySwitch, className }) => {
  const classes = classNames({
    'mail-categories': true,
    [`theme-${colorScheme}`]: colorScheme,
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
  colorScheme: PropTypes.string,
  className: PropTypes.string,
  currentCategory: PropTypes.string,
  handleCategorySwitch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(MailCategories);
