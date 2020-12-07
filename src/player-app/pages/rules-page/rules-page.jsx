import React, { useState } from 'react';
// Data
import data from './data';
// Components
import RulesNavigation from 'player-app/components/rules-navigation/rules-navigation';
import RuleContent from 'player-app/components/rule-content/rule-content';
// Styles
import './rules-page.sass';

const RulesPage = () => {
  const [currentCategory, setCurrentCategory] = useState('general');
  const handleCategorySwitch = category => setCurrentCategory(category);

  const rules = data.find(({ id }) => id === currentCategory).rules;
  const categories = data.map(({ id }) => id);

  return (
    <div className="rules-page">
      <RulesNavigation categories={categories} currentCategory={currentCategory} handleCategorySwitch={handleCategorySwitch} />
      <RuleContent rules={rules} />
    </div>
  );
};

export default RulesPage;
