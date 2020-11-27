import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Typography from 'components/typography/typography';
import Image from 'components/image/image';
// Styles
import './scores-item.sass';

const ScoresItem = ({ className, time, channel, team1, team2 }) => {
  const classes = classNames({
    'scores-item': true,
    [className]: className,
  });

  return (
    <div className={classes}>
      <div className="scores-item__header">
        <Typography component="h6" className="scores-item__time">{time}</Typography>
        <Typography component="h6" className="scores-item__channel text-accent">{channel}</Typography>
      </div>
      <div className="scores-item__teams">
        <div className="scores-item__team">
          <Image className="scores-item__team-icon" src={team1.icon} alt="team" icon />
          <Typography component="p" variant="p-sm">{team1.title}</Typography>
        </div>
        <div className="scores-item__team">
          <Image className="scores-item__team-icon" src={team2.icon} alt="team" icon />
          <Typography component="p" variant="p-sm">{team2.title}</Typography>
        </div>
      </div>
    </div>
  );
};

ScoresItem.propTypes = {
  className: PropTypes.string,
  time: PropTypes.string,
  channel: PropTypes.string,
  team1: PropTypes.object,
  team2: PropTypes.object,
};

export default ScoresItem;
