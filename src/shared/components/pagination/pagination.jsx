import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'shared/redux/color-scheme/selectors'
// Components
import Button from 'shared/components/button/button';
// Styles
import './pagination.sass';

const Pagination = ({ className, pages, page, onChange, colorScheme }) => {
  const [visiblePages, setVisiblePages] = useState([]);

  const getVisiblePages = useCallback((page, pages) => {
    if (pages < 7) {
      return filterPages([1, 2, 3, 4, 5, 6], pages);
    }
    if (page % 5 >= 0 && page > 4 && page + 3 < pages) {
      return [1, '...', page - 1, page, page + 1, '...', pages];
    } else if (page % 5 >= 0 && page > 4 && page + 3 >= pages) {
      return [1, '...', pages - 4, pages - 3, pages - 2, pages - 1, pages];
    } else {
      return [1, 2, 3, 4, 5, '...', pages]
    }
  }, []);

  useEffect(() => {
    setVisiblePages(getVisiblePages(page, pages));
  }, [page, pages, getVisiblePages]);


  const filterPages = (visiblePages, totalPages) => {
    return visiblePages.filter(page => page <= totalPages);
  };

  const changePage = activePage => {
    if (activePage === page) { return; }
    onChange(activePage);
  };

  const handleArrowClick = (val, boundary) => {
    if (page === boundary) { return; }
    onChange(page + val);
  };

  const classes = classNames({
    'pagination': true,
    [className]: className,
    [`theme-${colorScheme}`]: colorScheme,
  });

  return (
    <nav className={classes}>
      <ul className="pagination__list">
        <li className="pagination__item">
          <Button
            className={`pagination__button ${page === 1 ? 'disabled' : ''}`}
            standard={false}
            onClick={() => handleArrowClick(-1, 1)}
            isDisabled={page === 1}
          >
            <FontAwesomeIcon className="pagination__chevron" icon="chevron-left" />
          </Button>
        </li>
        {visiblePages.map((p, idx) => {
          return (
            <li key={idx} className="pagination__item">
              {typeof p === 'string' ?
                <Button className="pagination__button disabled" standard={false} isDisabled={true}>{p}</Button>
                :
                <Button
                  className={`pagination__button ${page === p ? 'is-active' : ''}`}
                  standard={false}
                  onClick={() => changePage(p)}
                >
                  {p}
                </Button>
              }
            </li>
          )
        })}
        <li className="pagination__item">
          <Button
            className={`pagination__button ${page === pages ? 'disabled' : ''}`}
            standard={false}
            onClick={() => handleArrowClick(1, pages)}
            isDisabled={page === pages}
          >
            <FontAwesomeIcon className="pagination__chevron" icon="chevron-right" />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  colorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme
});

export default connect(mapStateToProps)(Pagination);
