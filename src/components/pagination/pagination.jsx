import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './pagination.sass';

const Pagination = ({ pages, className }) => {
  const classes = classNames({
    'pagination': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <div className="pagination__wrap">
        {[...Array(pages)].map((i, idx) => (
          <div key={idx} className="pagination__item">{idx + 1}</div>
        ))}
      </div>
    </div>
  );
};

Pagination.propTypes = {
  pages: PropTypes.number,
  className: PropTypes.string,
};

export default Pagination;
