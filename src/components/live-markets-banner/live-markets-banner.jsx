import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Image from 'components/image/image';
// Styles
import './live-markets-banner.sass';

const LiveMarketsBanner = ({ className, image }) => {
  const classes = classNames({
    'live-markets-banner': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <Image className="live-banner__image" bgimage={image} />
    </div>
  );
};

LiveMarketsBanner.propTypes = {
  className: PropTypes.string,
};

export default LiveMarketsBanner;
