import React from 'react';
// Components
import Typography from 'shared/components/typography/typography';
// Styles
import './rule-content.sass';

const RuleContent = ({ rules }) => {
  return (
    <div className="rule-content">
      {rules.map(({ id, title, items }) => (
        <div key={id} className="rule-content__block">
          <Typography component="h3" className="rule-content__title">{title}</Typography>
          <ol className="rule-content__list">
            {items.map((item, idx) => (
              <li key={idx} className="rule-content__list-item">
                <Typography component="p" className="rule-content__text">{item}</Typography>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default RuleContent;
