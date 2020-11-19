import React from 'react';
import classNames from 'classnames';
// Components
import Typography from 'components/typography/typography';
// Styles
import './live-program-item.sass';

const LiveProgramItem = ({ team1, team2, time, score, className }) => {
  const classes = classNames({
    'live-program-item': true,
    [className]: className,
  });

  return (
    <div className={classes}>
      <div className="live-program-item__teams">
        <Typography component="span" variant="p" className="mb-0 live-program-item__team">{team1}</Typography>
        <Typography component="span" variant="p" className="mb-0 live-program-item__team">{team2}</Typography>
      </div>
      <div className="mb-0 live-program-item__details">
        <Typography component="span" variant="p" className="mb-0 live-program-item__detail">{score}</Typography>
        <Typography component="span" variant="p" className="mb-0 live-program-item__detail">{time}</Typography>
      </div>
    </div >
  );
};

export default LiveProgramItem;
