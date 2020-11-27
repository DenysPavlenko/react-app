import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './rules-navigation.sass';

const RulesNavigation = ({ categories, currentCategory, handleCategorySwitch }) => {
  return (
    <div className="rules-navigation">
      <div className="rules-navigation__items">
        {categories.map((category, idx) => (
          <div key={idx} className={`rules-navigation__item ${category === currentCategory ? 'is-active' : ''}`} onClick={() => handleCategorySwitch(category)}>{category}</div>
        ))}
      </div>
    </div>
  );
};

RulesNavigation.propTypes = {
  categories: PropTypes.array,
  currentCategory: PropTypes.string,
  handleCategorySwitch: PropTypes.func,
};

export default RulesNavigation;
