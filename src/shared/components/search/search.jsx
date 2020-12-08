import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Form from 'shared/components/form/form';
import Input from 'shared/components/input/input';
import Button from 'shared/components/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './search.sass';
// Assets
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ className, radius, handleSearch, handleSearchInput, ...otherProps }) => {
  const [searchValue, setSearchValue] = useState('');
  const [hideButton, setHideButton] = useState(true);

  const handleInput = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (typeof handleSearchInput !== 'function') {
      if (value) {
        setHideButton(false);
      } else {
        setHideButton(true);
      }
    } else {
      handleSearchInput(value);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (typeof handleSearchInput === 'function') { return; }
    if (!searchValue) { return; }
    handleSearch(searchValue);
  };

  const classes = classNames({
    'search': true,
    [className]: className
  });

  return (
    <Form onSubmit={handleSearchSubmit} className={classes} {...otherProps}>
      <FontAwesomeIcon icon={faSearch} className="search__icon" />
      <Input className="search__input" placeholder="Search..." value={searchValue} onChange={handleInput} noRadius={!radius} />
      <Button type="submit" className={`search__button ${hideButton ? 'is-hidden' : ''}`} variant="accent" size="sm">Go</Button>
    </Form>
  );
};

Search.propTypes = {
  radius: PropTypes.bool,
  className: PropTypes.string,
  handleSearch: PropTypes.func,
  handleSearchInput: PropTypes.func,
};

export default Search;
