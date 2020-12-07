import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Typography from 'shared/components/typography/typography';
import Search from 'shared/components/search/search';
// Styles
import './casino-navigation.sass';
// Assets
import { ReactComponent as Dice } from 'shared/assets/images/icons/dice.svg';
import { ReactComponent as Roulette } from 'shared/assets/images/icons/roulette.svg';
import { ReactComponent as Slots } from 'shared/assets/images/icons/slots.svg';
import { ReactComponent as Poker } from 'shared/assets/images/icons/poker.svg';
import { ReactComponent as Game } from 'shared/assets/images/icons/game.svg';

const items = [
  { title: 'Lobby', category: '', icon: Dice },
  { title: 'Table games', category: 'tableGames', icon: Roulette },
  { title: 'Slots', category: 'slots', icon: Slots },
  { title: 'Video poker', category: 'videoPocker', icon: Poker },
  { title: 'Speciality gamse', category: 'specialityGames', icon: Game },
];

const CasinoNavigation = ({ className, activeCategory, handleNavigation, handleSearch }) => {
  const classes = classNames({
    'casino-navigation': true,
    [className]: className,
  });

  return (
    <div className={classes}>
      <div className="casino-navigation__items">
        {items.map(({ title, icon: Icon, category }, idx) => (
          <div key={idx} className={`casino-navigation__item ${activeCategory === category ? 'is-active' : ''}`} onClick={() => handleNavigation(category)}>
            <Icon className="casino-navigation__icon" />
            <Typography component="h6" className="casino-navigation__title text-uppercase">{title}</Typography>
          </div>
        ))}
      </div>
      <div className="casino-navigation__search">
        <Search radius handleSearchInput={handleSearch} />
      </div>
    </div>
  );
};

CasinoNavigation.propTypes = {
  className: PropTypes.string,
  activeCategory: PropTypes.string,
  handleNavigation: PropTypes.func,
};

export default CasinoNavigation;
