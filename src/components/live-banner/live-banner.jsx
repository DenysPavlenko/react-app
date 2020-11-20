import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Image from 'components/image/image';
// Assets
import soccerBanner from 'assets/images/live-banners/soccer-banner.jpg';
// Styles
import './live-banner.sass';

const LiveBanner = ({ className }) => {
  const classes = classNames({
    'live-banner': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <Image className="live-banner__image" bgimage={soccerBanner} />
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
};

export default LiveBanner;
