import React from 'react';
// Components
import Accordion from 'components/accordion/accordion';
// Styles
import './sports-schedule-item.sass';

const SportsScheduleItem = ({ title, withArrow, content, className, ...otherProps }) => {
  return (
    <Accordion className={`sports-schedule-item ${className}`} {...otherProps}>
      <Accordion.Toggle className="sports-schedule-item__heading">
        {!content && <input type="checkbox" className="sports-schedule-item__checkbox" />}
        {withArrow && <div className="sports-schedule-item__arrow">{`►`}</div>}
        {content && <span>{`▼`}</span>}
        <div className="sports-schedule-item__title">{title}</div>
      </Accordion.Toggle>
      <Accordion.Content>
        {content &&
          <div className="sports-schedule-item__content">
            {content.map(({ title, withDot }, idx) => (
              <span key={idx}>{title}</span>
            ))}
          </div>
        }
      </Accordion.Content>
    </Accordion>
  )
};

export default SportsScheduleItem;
