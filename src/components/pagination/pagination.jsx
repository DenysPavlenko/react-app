import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Styles
import './pagination.sass';

const Pagination = ({ pages, defaultColorScheme }) => {
  const classes = classNames({
    'pagination': true,
    [`pagination--${defaultColorScheme}`]: defaultColorScheme
  });

  return (
    <div className={classes}>
      <div className="pagination__wrap">
        {[...Array(pages)].map((i, idx) => (
          <div key={idx} className="pagination__item">{idx +1}</div>
        ))}
      </div>
    </div>
  );
};

Pagination.propTypes = {
  pages: PropTypes.number,
  defaultColorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(Pagination);