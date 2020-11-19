import React from 'react';
// Components
import LiveProgramItem from 'components/live-program-item/live-program-item';
import Typography from 'components/typography/typography';
// Styles
import './live-program-content.sass';

const LiveProgramContent = ({ league, data }) => {
  return (
    <div className="live-program-content">
      <Typography component="span" variant="p" className="mb-0 live-program-content__title">{league}</Typography>
      <div className="live-program-content__items">
        {data.map(({ id, team1, team2, time, score }) => (
          <LiveProgramItem className="live-program-content__item" key={id} team1={team1} team2={team2} time={time} score={score} />
        ))}
      </div>
    </div>
  );
};

export default LiveProgramContent;
