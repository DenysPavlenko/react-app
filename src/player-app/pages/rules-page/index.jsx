import React, { useState } from 'react';
// Data
import data from './data';
// Components
import RuleContent from 'player-app/components/rule-content';
import Tabs from 'shared/components/tabs';
import TabPanel from 'shared/components/tab-panel';
import Tab from 'shared/components/tab';
// Styles
import './styles.sass';

const RulesPage = () => {
  const [currentCategory, setCurrentCategory] = useState('general');
  const handleCategorySwitch = category => setCurrentCategory(category);

  const rules = data.find(({ id }) => id === currentCategory).rules;
  const categories = data.map(({ id }) => id);

  return (
    <div className="rules-page">
      <Tabs>
        {categories.map((category, idx) => (
          <Tab key={idx} onClick={() => handleCategorySwitch(category)} isActive={currentCategory === category}>{category}</Tab>
        ))}
      </Tabs>
      <TabPanel>
        <RuleContent rules={rules} />
      </TabPanel>
    </div>
  );
};

export default RulesPage;
