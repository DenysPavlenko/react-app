import React, { useState } from 'react';
// Components
import Typography from 'shared/components/typography';
import Chevron from 'shared/components/chevron';
import ScoresItem from 'player-app/components/scores-item';
// Styles
import './styles.sass';

const ScoresGroup = ({ scores, title }) => {
  const [isOpened, setIsOpened] = useState(true);

  const handleOpen = () => setIsOpened(isOpened => !isOpened);

  return (
    <div className="scores-group">
      <div className="scores-group__header" onClick={handleOpen}>
        <Typography component="h5" className="scores-group__header-title">{title}</Typography>
        <Chevron isActive={isOpened} />
      </div>
      {isOpened &&
        <div className="scores-group__items">
          {scores.map(({ id, time, channel, team1, team2 }) => (
            <ScoresItem key={id} className="scores-group__item" time={time} channel={channel} team1={team1} team2={team2} />
          ))}
        </div>
      }
    </div>
  );
};

export default ScoresGroup;
