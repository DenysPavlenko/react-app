import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'shared/redux/color-scheme/selectors';
// Components
import Image from 'shared/components/image';
import Typography from 'shared/components/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './styles.sass';

const CasinoCard = ({ image, title, minBet, maxBet, colorScheme }) => {
  const classes = classNames({
    'casino-card': true,
    [`theme-${colorScheme}`]: colorScheme
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
  colorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(CasinoCard);
