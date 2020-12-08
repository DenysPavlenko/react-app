import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'shared/redux/color-scheme/selectors';
// Styles
import './horses-filters.sass';

const HorsesFilters = ({ filters, currentFilter, handleFilter, colorScheme }) => {
  const classes = classNames({
    'horses-filters': true,
    [`theme-${colorScheme}`]: colorScheme
  });

  return (
    <div className={classes}>
      <div className="horses-filters__row">
        {filters.map(({ id, title }) => (
          <div key={id} className={`horses-filters__filter ${id === currentFilter ? 'is-active' : ''}`} onClick={() => handleFilter(id)}>
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

HorsesFilters.propTypes = {
  filters: PropTypes.array,
  currentFilter: PropTypes.string,
  handleFilter: PropTypes.func,
  colorScheme: PropTypes.string,
}

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(HorsesFilters);