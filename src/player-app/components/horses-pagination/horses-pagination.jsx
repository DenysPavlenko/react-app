import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'shared/redux/color-scheme/selectors';
// Styles
import './horses-pagination.sass';

const HorsesPagination = ({ pages, colorScheme }) => {
  const classes = classNames({
    'horses-pagination': true,
    [`theme-${colorScheme}`]: colorScheme
  });

  return (
    <div className={classes}>
      <div className="horses-pagination__wrap">
        {[...Array(pages)].map((i, idx) => (
          <div key={idx} className="horses-pagination__item">{idx +1}</div>
        ))}
      </div>
    </div>
  );
};

HorsesPagination.propTypes = {
  pages: PropTypes.number,
  colorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(HorsesPagination);
