import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Components
import Image from 'components/image/image';
import Typography from 'components/typography/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './casino-card.sass';

const CasinoCard = ({ image, title, minBet, maxBet, defaultColorScheme }) => {
  const classes = classNames({
    'casino-card': true,
    [`casino-card--${defaultColorScheme}`]: defaultColorScheme
  });

  return (
    <div className={classes}>
      <div className="casino-card__body">
        <Image className="casino-card__image" bgImage={image} />
        <div className="casino-card__play">
          <FontAwesomeIcon className="casino-card__play-icon" icon="play" />
        </div>
      </div>
      <div className="casino-card__footer">
        <Typography component="h5" className="casino-card__title">{title}</Typography>
        <Typography component="p" variant="p-sm" className="casino-card__bet">{`Min. Bet: ${minBet}, Max. Bet: ${maxBet}`}</Typography>
      </div>
    </div>
  );
};

CasinoCard.propTypes = {
  defaultColorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(CasinoCard);
