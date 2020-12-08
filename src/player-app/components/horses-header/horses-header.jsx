import React, { useState } from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HorsesPagination from 'player-app/components/horses-pagination/horses-pagination';
// Styles
import './horses-header.sass';

const raseDetails = [
  { id: '1', title: 'type', info: 'thoroughbred' },
  { id: '2', title: 'distance', info: '1 1/16 Miles' },
  { id: '3', title: 'surface', info: 'dirt' },
  { id: '4', title: 'purse', info: '12000.00' },
  { id: '5', title: 'Location', info: 'Vinson , US' },
  { id: '6', title: 'Time zone', info: 'Central Standard Time' },
]

const HorsesHeader = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleSwitcherClick = () => {
    setShowDetails(showDetails => !showDetails);
  };

  return (
    <div className="horses-header">
      <div className="horses-header__heading">
        <FontAwesomeIcon icon="horse-head" className="horses-header__heading-icon" />
        <Typography component="h3" className="horses-header__heading-title">Delta Downs</Typography>
        <Typography component="span" variant="p" className="horses-header__heading-date">Nov 24</Typography>
      </div>
      <div className="horses-header__pagination">
        <Typography component="h4" className="horses-header__pagination-title">Races:</Typography>
        <HorsesPagination pages={9} />
      </div>
      <div className="horses-header__footer">
        <div className="horses-header__time">
          <Typography component="p">
            Post-Time: {'12:55 PM CST'} - in
            <Typography component="span" className="text-danger"> 08h 34m 20s</Typography>
          </Typography>
        </div>
        <div className="horses-header__switcher">
          <Typography component="p" className="horses-header__switcher-title" onClick={handleSwitcherClick}>
            {`${!showDetails ? 'Show' : 'Hide'} race details`}
            <FontAwesomeIcon icon="chevron-down" className={`horses-header__switcher-icon ${!showDetails ? '' : 'is-reversed'}`} />
          </Typography>
        </div>
      </div>
      {showDetails &&
        <div className="horses-header__race-details">
          {raseDetails.map(({ id, title, info }) => (
            <div key={id} className="horses-header__race-detail">
              <Typography component="h4" className="horses-header__race-title">{title}</Typography>
              <Typography component="p" className="horses-header__race-info">{info}</Typography>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default HorsesHeader;
