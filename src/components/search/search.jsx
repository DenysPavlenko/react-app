import React, { useState } from 'react';
// Components
import Form from 'components/form/form';
import Input from 'components/input/input';
import Button from 'components/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './search.sass';
// Assets
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [hideButton, setHideButton] = useState(true);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value) {
      setHideButton(false);
    } else {
      setHideButton(true);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) {
      return;
    }
  };

  return (
    <Form onSubmit={handleSearchSubmit} className="search">
      <FontAwesomeIcon icon={faSearch} className="search__icon" />
      <Input className="search__input" placeholder="Search..." value={searchValue} onChange={handleSearch} noRadius />
      <Button type="submit" className={`search__button ${hideButton ? 'is-hidden' : ''}`} variant="accent" size="sm">Go</Button>
    </Form>
  );
};

export default Search;
