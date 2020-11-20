import React from 'react';
// Componenst
import Typography from 'components/typography/typography';
import Image from 'components/image/image';
import SoccerLiveStat from './soccer-live-stat/soccer-live-stat';
// Styles
import './soccer-live.sass';
// Assets
import soccerPreview from 'assets/images/soccer-live/soccer-preview.png'

const stats = [
  { id: '1', title: 'Attacks', team1: '21', team2: '22' },
  { id: '2', title: 'Dangerous Attacks', team1: '14', team2: '9' },
  { id: '3', title: 'Possession %', team1: '43', team2: '57' },
];
const targets = [
  { id: '1', title: 'On Target', team1: '1', team2: '2' },
  { id: '2', title: 'Off Target', team1: '1', team2: '1' },
];

const SoccerLive = () => {
  return (
    <div className="soccer-live">
      <div className="soccer-live__header">
        <div className="soccer-live__header-team">
          <Typography component="h5" className="soccer-live__header-name">AC Milan (Stig) Esports</Typography>
          <Typography component="h4" className="soccer-live__header-score">2</Typography>
        </div>
        <div className="soccer-live__header-team">
          <Typography component="h4" className="soccer-live__header-score">2</Typography>
          <Typography component="h5" className="soccer-live__header-name">Napoli (Veep) Esports</Typography>
        </div>
      </div>
      <div className="soccer-live__preview">
        <Image src={soccerPreview} alt="soccer-preview" />
      </div>
      <div className="soccer-live__stats-header">
        <Typography component="h4" className="soccer-live__stats-header-title">Stats</Typography>
      </div>
      <div className="soccer-live__stats-wrap">
        <div className="soccer-live__stats">
          {stats.map(({ id, title, team1, team2 }) => (
            <SoccerLiveStat key={id} className="soccer-live__stats-stat" title={title} team1={team1} team2={team2} />
          ))}
        </div>
        <div className="soccer-live__stats">
          {targets.map(({ id, title, team1, team2 }) => (
            <SoccerLiveStat key={id} className="soccer-live__stats-stat" title={title} team1={team1} team2={team2} type="line" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoccerLive;
