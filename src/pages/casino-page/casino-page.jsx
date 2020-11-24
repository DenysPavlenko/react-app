import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchCasinoGamesData } from 'redux/casino-games/actions';
import { selectCasinoGames } from 'redux/casino-games/selectors';
// Components
import CasinoNavigation from 'components/casino-navigation/casino-navigation';
import CasinoCard from 'components/casino-card/casino-card';
import ErrorIndicator from 'components/error-indicator/error-indicator';
import Spinner from 'components/spinner/spinner';
// Styles
import './casino-page.sass';

const CasinoPage = ({ casinoGames: { loading, data, error }, fetchCasinoGamesData }) => {
  const [currentCategory, setCurrentCategory] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchCasinoGamesData();
  }, [fetchCasinoGamesData]);

  const handleNavigation = (category) => {
    setCurrentCategory(category);
  };

  const handleSearch = (value) => {
    setSearchValue(value.toLowerCase());
  };

  return (
    <div className="casino-page">
      <CasinoNavigation activeCategory={currentCategory} className="casino-page__navigation" handleNavigation={handleNavigation} handleSearch={handleSearch} />
      {error && <div className="casino-page__info"><ErrorIndicator light /></div>}
      {(!error && loading) && <div className="casino-page__info"><Spinner light /></div>}
      {(!error && !loading) &&
        <div className="casino-page__games">
          {data
            .filter(({ category }) => {
              return currentCategory === '' ? true : category === currentCategory
            })
            .filter(({ title }) => {
              return searchValue === '' ? true : (title.toLowerCase().indexOf(searchValue) !== -1)
            })
            .map(({ id, image, title, minBet, maxBet }) => (
              <div key={id} className="casino-page__game">
                <CasinoCard image={image} title={title} minBet={minBet} maxBet={maxBet} />
              </div>
            ))}
        </div>
      }
    </div>
  );
};

CasinoPage.propTypes = {
  fetchCasinoGamesData: PropTypes.func,
  casinoGames: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  casinoGames: selectCasinoGames,
});

const mapDispatchToProps = dispatch => ({
  fetchCasinoGamesData: () => dispatch(fetchCasinoGamesData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CasinoPage);
