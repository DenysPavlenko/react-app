import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography/typography';
import Search from 'components/search/search';
// Styles
import './casino-navigation.sass';
// Assets
import { ReactComponent as Dice } from 'assets/images/icons/dice.svg';
import { ReactComponent as Roulette } from 'assets/images/icons/roulette.svg';
import { ReactComponent as Slots } from 'assets/images/icons/slots.svg';
import { ReactComponent as Poker } from 'assets/images/icons/poker.svg';
import { ReactComponent as Game } from 'assets/images/icons/game.svg';

const items = [
  { title: 'Lobby', icon: Dice },
  { title: 'Table games', icon: Roulette },
  { title: 'Slots', icon: Slots },
  { title: 'Video poker', icon: Poker },
  { title: 'Speciality gamse', icon: Game },
];

const CasinoNavigation = ({ className }) => {
  const classes = classNames({
    'casino-navigation': true,
    [className]: className,
  });

  return (
    <div className={classes}>
      <div className="casino-navigation__items">
        {items.map(({ title, icon: Icon }, idx) => (
          <div key={idx} className={`casino-navigation__item ${idx === 0 && 'is-active'}`}>
            <Icon className="casino-navigation__icon" />
            <Typography component="h6" className="casino-navigation__text text-uppercase">{title}</Typography>
          </div>
        ))}
      </div>
      <div className="casino-navigation__search">
        <Search radius />
      </div>
    </div>
  );
};

CasinoNavigation.propTypes = {
  className: PropTypes.string,
};

export default CasinoNavigation;
