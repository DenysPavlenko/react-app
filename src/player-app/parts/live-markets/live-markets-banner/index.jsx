import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Image from 'shared/components/image';
// Styles
import './styles.sass';

const LiveMarketsBanner = ({ className, image }) => {
  const classes = classNames({
    'live-markets-banner': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <Image className="live-banner__image" bgImage={image} />
    </div>
  );
};

LiveMarketsBanner.propTypes = {
  className: PropTypes.string,
};

export default LiveMarketsBanner;
