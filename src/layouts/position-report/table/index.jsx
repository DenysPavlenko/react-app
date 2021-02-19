import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// Components
import DefaultTable from 'components/table';
import Typography from 'components/typography';
import ErrorIndicator from 'components/error-indicator';
import Spinner from 'components/spinner/spinner';
// Components
import './styles.sass';

const headerItems = [
  { colSpan: null, title: '' },
  { colSpan: null, title: 'Date' },
  { colSpan: null, title: 'Rotation' },
  { colSpan: null, title: 'Game' },
  { colSpan: '10', title: 'Straight' },
  { colSpan: '3', title: 'Parlay' },
  { colSpan: '3', title: 'Teaser' },
];
const subHeaderItems = [
  { colSpan: '4', title: '' },
  { colSpan: '2', title: 'PS' },
  { colSpan: '2', title: 'ML' },
  { colSpan: '2', title: 'TOT' },
  { colSpan: '2', title: 'TT-O' },
  { colSpan: '2', title: 'TT-U' },
  { colSpan: null, title: 'PS' },
  { colSpan: null, title: 'ML' },
  { colSpan: null, title: 'TOT' },
  { colSpan: null, title: 'PS' },
  { colSpan: null, title: 'TOT' },
];

const Table = ({ loading, data, error, cols, retry }) => {
  const totalCols = cols.length;

  return (
    <div className="table">
      <DefaultTable className="table__table">
        <thead className="table__header">
          <tr>
            {headerItems.map(({ colSpan, title }, idx) => (
              <th key={idx} colSpan={colSpan}><Typography component="h5">{title}</Typography></th>
            ))}
          </tr>
        </thead>
        {error && <tbody><tr><td colSpan={totalCols}> <ErrorIndicator retry={retry} light /></td></tr></tbody>}
        {(!error && loading) && <tbody><tr><td colSpan={totalCols}> <Spinner boxed light /></td></tr></tbody>}
        {(!error && !loading && data) &&
          <Fragment>
            {data.map(({ id, event, games }) => (
              <Fragment key={id}>
                <thead className="table__title">
                  <tr>
                    <th colSpan={totalCols}> <Typography component="h5">{event}</Typography></th>
                  </tr>
                </thead>
                <thead className="table__target">
                  <tr>
                    {subHeaderItems.map(({ colSpan, title }, idx) => (
                      <th key={idx} colSpan={colSpan}><Typography component="h5">{title}</Typography></th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {games.map((item, idx) => (
                    <tr key={idx} className="table__row">
                      {cols.map((col, key) => (
                        <td key={key}>{col.render(item, idx)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Fragment>
            ))}
          </Fragment>
        }
        {(!error && !loading && (!data || data.length === 0)) &&
          <tr className="table__empty">
            <td colSpan={totalCols}>
              <Typography component="h3" className="text-center">There is no data</Typography>
            </td>
          </tr>
        }
      </DefaultTable>
    </div>
  );
};

Table.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array,
  error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
  cols: PropTypes.array,
  retry: PropTypes.func,
};

export default Table;
