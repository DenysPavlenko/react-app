import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Componenst
import Typography from 'shared/components/typography/typography';
// Styles
import './soccer-live-stat.sass';

const SoccerLiveStat = ({ title, team1, team2, className, type }) => {
  const classes = classNames({
    'soccer-live-stat': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <Typography component="p" variant="p-sm" className="soccer-live-stat__title">{title}</Typography>
      <div className="soccer-live-stat__wrap">
        <Typography component="p" variant="p-sm" className="soccer-live-stat__score">{team1}</Typography>
        {type === 'line' ?
          <div className="soccer-live-stat__line"></div>
          :
          <div className="soccer-live-stat__circle"></div>
        }
        <Typography component="p" variant="p-sm" className="soccer-live-stat__score">{team2}</Typography>
      </div>
    </div>
  );
};

SoccerLiveStat.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  team1: PropTypes.string,
  team2: PropTypes.string,
  type: PropTypes.string,
};

export default SoccerLiveStat;
