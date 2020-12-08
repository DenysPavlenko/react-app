import React, { useState } from 'react';
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

const Pagination = ({ className, count, colorScheme, getActivePage }) => {
  const [activePage, setActivePage] = useState(1);

  const handleNumberClick = idx => setActivePage(idx);
  const handleArrowClick = idx => {
    const active = activePage + idx;
    if (active >= 1 && active <= count) {
      setActivePage(active);
    }
  };

  const handlePointerEvents = page => (activePage === page ? 'disabled' : '');

  const classes = classNames({
    'pagination': true,
    [className]: className,
    [`theme-${colorScheme}`]: colorScheme,
  });

  return (
    <nav className={classes}>
      <ul className="pagination__list">
        <li className="pagination__item">
          <Button className={`pagination__button ${handlePointerEvents(1)}`} isDisabled={activePage === 1} standard={false} onClick={() => handleArrowClick(-1)}>
            <FontAwesomeIcon className="pagination__chevron" icon="chevron-left" />
          </Button>
        </li>
        {[...Array(count)]
          .map((i, idx) => idx + 1)
          .map((num) => (
            <li key={num} className="pagination__item" onClick={() => handleNumberClick(num)}>
              <Button className={`pagination__button ${activePage === num ? 'is-active' : ''}`} standard={false}>{num}</Button>
            </li>
          ))
        }
        <li className="pagination__item">
          <Button className={`pagination__button ${handlePointerEvents(count)}`} isDisabled={activePage === count} standard={false} onClick={() => handleArrowClick(1)}>
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
