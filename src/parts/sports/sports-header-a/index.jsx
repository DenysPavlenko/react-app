import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withBreakpoints } from 'react-breakpoints';
// Redux
import { selectSportsWagers } from 'redux/sports-wagers/selectors';
// Components
import Typography from 'components/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/button';
import { toggleSportsPageWagers } from 'redux/sports-page-wagers/actions';
// Styles
import './styles.sass';

const SportsHeaderA = ({ title, icon, colorScheme, isTablet, sportsWagers, toggleSportsPageWagers }) => {
  const classes = classNames({
    'sports-header-a': true,
    [`theme-${colorScheme}`]: colorScheme,
  });

  return (
    <div className={classes}>
      <Typography component="h2" className="sports-header-a__title">{title}</Typography>
      <div className="sports-header-a__button">
        {(isTablet && sportsWagers.length !== 0) &&
          <Button variant="accent" onClick={toggleSportsPageWagers}>{sportsWagers.length} Bet(s)</Button>
        }
      </div>
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
  isTablet: PropTypes.bool,
  sportsWagers: PropTypes.array,
  toggleSportsPageWagers: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  sportsWagers: selectSportsWagers,
});

const mapDispatchToProps = dispatch => ({
  toggleSportsPageWagers: () => dispatch(toggleSportsPageWagers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withBreakpoints(SportsHeaderA));
