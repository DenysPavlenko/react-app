import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography/typography';
// Styles
import './live-program-list-item.sass';

const LiveProgramListItem = ({ team1, team2, time, score, className }) => {
  const classes = classNames({
    'live-program-list-item': true,
    [className]: className,
  });

  return (
    <div className={classes}>
      <div className="live-program-list-item__teams">
        <Typography component="span" variant="p" className="live-program-list-item__team">{team1}</Typography>
        <Typography component="span" variant="p" className="live-program-list-item__team">{team2}</Typography>
      </div>
      <div className="live-program-list-item__details">
        <Typography component="span" variant="p" className="live-program-list-item__detail">{score}</Typography>
        <Typography component="span" variant="p" className="live-program-list-item__detail">{time}</Typography>
      </div>
    </div >
  );
};

LiveProgramListItem.propTypes = {
  team1: PropTypes.string,
  team2: PropTypes.string,
  time: PropTypes.string,
  score: PropTypes.string,
  className: PropTypes.string,
};

export default LiveProgramListItem;
