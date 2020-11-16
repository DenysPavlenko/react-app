import React from 'react';
// Components
import SportsScheduleTab from 'components/sports-schedule-tab/sports-schedule-tab';
// Styles
import './sports-schedule.sass';
// Assets
import { faFootballBall } from '@fortawesome/free-solid-svg-icons';

const items = [
  {
    title: 'football', icon: faFootballBall, content: [
      { title: 'NFL' },
      { title: '1st Half', withArrow: true },
      { title: '1st Quarter', withArrow: true },
      {
        title: 'NFL WINNING MARGIN', content: [
          { title: 'OT Included', withDot: true }
        ]
      },
    ]
  }
];

const SportsSchedule = () => {
  return (
    <div className="sports-schedule">
      <span className="sports-schedule__heading">Sports Schedule</span>
      <div className="sports-schedule__items">
        {items.map((data, idx) => {
          const { title, icon, content } = data;
          return (
            <SportsScheduleTab key={idx} title={title} icon={icon} content={content} />
          )
        })}
      </div>
    </div>
  );
};

export default SportsSchedule;
