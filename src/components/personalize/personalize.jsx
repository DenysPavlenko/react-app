import React from 'react';
// Components
import PersonalizeItem from 'components/personalize-item/personalize-item';
// Styles
import './personalize.sass';

const items = [
  { title: 'Gray', color: 'gray' },
  { title: 'Green', color: 'green' },
  { title: 'Red', color: 'red' },
  { title: 'Orange', color: 'orange' },
];

const Personalize = () => {
  return (
    <div className="personalize">
      <div className="personalize__items">
        {items.map(({ title, color }, idx) => (
          <PersonalizeItem key={idx} title={title} className="personalize__item" />
        ))}
      </div>
    </div>
  );
};

export default Personalize;
