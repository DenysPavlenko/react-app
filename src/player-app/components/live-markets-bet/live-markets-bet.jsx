import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'shared/redux/color-scheme/selectors';
// Components
import Typography from 'shared/components/typography/typography';
// Styles
import './live-markets-bet.sass';

const LiveMarketsBet = ({ title, className, odd, colorScheme }) => {
  const classes = classNames({
    'live-markets-bet': true,
    [`theme-${colorScheme}`]: colorScheme,
    [className]: className
  });

  return (
    <div className={classes}>
      <Typography component="h5" className="live-markets-bet__title">{title}</Typography>
      <Typography component="h5" className="live-markets-bet__odd">{odd}</Typography>
    </div>
  );
};

LiveMarketsBet.propTypes = {
  colorScheme: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  odd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(LiveMarketsBet);
