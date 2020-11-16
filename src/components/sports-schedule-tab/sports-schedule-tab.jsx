import React from 'react';
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './sports-schedule-tab.sass';

const SportsScheduleTab = ({ title, icon, content, ...otherProps }) => {
  return (
    <div className="sports-schedule-tab" {...otherProps}>
      <div className="sports-schedule-tab__heading">
        <FontAwesomeIcon icon={icon} className="sports-schedule-tab__icon" />
        <span className="sports-schedule-tab__title">{title}</span>
      </div>
      <div className="sports-schedule-tab__content">
        {content.map(({ title, withArrow, content }, idx) => {
          return (
            <SportsScheduleItem key={idx} title={title} className="sports-schedule-tab__item" withArrow={withArrow} content={content} />
          )
        })}
      </div>
    </div>
  );
};

export default SportsScheduleTab;

const SportsScheduleItem = ({ title, withArrow, content, className, ...otherProps }) => {
  return (
    <div className={`sports-schedule-item ${className}`} {...otherProps}>
      <div className="sports-schedule-item__heading">
        {!content && <input type="checkbox" className="sports-schedule-item__checkbox" />}
        {withArrow && <div className="sports-schedule-item__arrow">{`►`}</div>}
        {content && <span>{`▼`}</span>}
        <div className="sports-schedule-item__title">{title}</div>
      </div>
      {content &&
        <div className="sports-schedule-item__content">
          {content.map(({ title, withDot }, idx) => (
            <span key={idx}>{title}</span>
          ))}
        </div>
      }
    </div>
  )
};
