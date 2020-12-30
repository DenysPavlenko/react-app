import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'shared/components/typography/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './sports-header-d.sass';

const SportsHeaderD = ({ time, channel }) => {
  return (
    <div className="sports-header-d">
      <div className="sports-header-d__left">
        <Typography component="span" variant="h6" className="text-uppercase">
          <Typography component="span" className="text-accent">{time} </Typography>broadcast {channel}
        </Typography>
      </div>
      <div className="sports-header-d__right">
        <FontAwesomeIcon icon="tv" className="sports-header-d__icon" />
        <Typography component="span" variant="h6" className="text-uppercase">{channel}</Typography>
      </div>
    </div>
  );
};

SportsHeaderD.propTypes = {
  time: PropTypes.string,
  channel: PropTypes.string,
};

export default SportsHeaderD;
