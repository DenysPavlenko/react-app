import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Typography from 'shared/components/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './styles.sass';

const SportsHeaderA = ({ title, icon, colorScheme }) => {
  const classes = classNames({
    'sports-header-a': true,
    [`theme-${colorScheme}`]: colorScheme,
  });

  return (
    <div className={classes}>
      <Typography component="h2" className="sports-header-a__title">{title}</Typography>
      <div className="sports-header-a__icon">
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
};

SportsHeaderA.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  colorScheme: PropTypes.string,
};

export default SportsHeaderA;
