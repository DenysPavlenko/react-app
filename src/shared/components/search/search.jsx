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

const Search = ({ className, onSubmit, onChange, variant, placeholder, style, ...otherProps }) => {
  const [searchValue, setSearchValue] = useState('');
  const [hideButton, setHideButton] = useState(true);

  const handleInput = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (typeof onChange !== 'function') {
      if (value) {
        setHideButton(false);
      } else {
        setHideButton(true);
      }
    } else {
      onChange(value);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (typeof onChange === 'function') { return; }
    if (!searchValue) { return; }
    onSubmit(searchValue);
  };

  const classes = classNames({
    'search': true,
    [`search--${variant}`]: variant,
    [className]: className
  });

  return (
    <Form onSubmit={handleSearchSubmit} className={classes} style={style}>
      <FontAwesomeIcon icon={faSearch} className="search__icon" />
      <Input
        className="search__input"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInput}
        variant={variant}
        {...otherProps}
      />
      <Button type="submit" className={`search__button ${hideButton ? 'is-hidden' : ''}`} variant="accent" size="sm">Go</Button>
    </Form>
  );
};

Search.defaultProps = {
  placeholder: 'Search...',
};

Search.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  variant: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
};

export default Search;
