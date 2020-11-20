import React from 'react';
import PropTypes from 'prop-types';
// Components
import LiveProgramListItem from 'components/live-program-list-item/live-program-list-item';
import Typography from 'components/typography/typography';
// Styles
import './live-program-list.sass';

const LiveProgramList = ({ league, data }) => {
  return (
    <div className="live-program-list">
      <Typography component="span" variant="p" className="live-program-list__title">{league}</Typography>
      <div className="live-program-list__items">
        {data.map(({ id, team1, team2, time, score }) => (
          <LiveProgramListItem className="live-program-list__item" key={id} team1={team1} team2={team2} time={time} score={score} />
        ))}
      </div>
    </div>
  );
};

LiveProgramList.propTypes = {
  league: PropTypes.string,
  data: PropTypes.array,
};

export default LiveProgramList;
