import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// Components
import Table from 'shared/components/table/table';
import Typography from 'shared/components/typography/typography';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
import Spinner from 'shared/components/spinner/spinner';
// Components
import './position-table.sass';

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

const PositionTable = ({ loading, data, error, cols, retry }) => {
  return (
    <div className="position-table">
      <Table className="position-table__table">
        <thead className="position-table__header">
          <tr>
            {headerItems.map(({ colSpan, title }, idx) => (
              <th key={idx} colSpan={colSpan}><Typography component="h5">{title}</Typography></th>
            ))}
          </tr>
        </thead>
        {error && <tbody><tr><td colSpan="19"><ErrorIndicator retry={retry} light /></td></tr></tbody>}
        {(!error && loading) && <tbody><tr><td colSpan="19"><Spinner boxed light /></td></tr></tbody>}
        {(!error && !loading) &&
          <Fragment>
            {data.map(({ id, event, games }) => (
              <Fragment key={id}>
                <thead className="position-table__title">
                  <tr>
                    <th colSpan="19"><Typography component="h5">{event}</Typography></th>
                  </tr>
                </thead>
                <thead className="position-table__target">
                  <tr>
                    {subHeaderItems.map(({ colSpan, title }, idx) => (
                      <th key={idx} colSpan={colSpan}><Typography component="h5">{title}</Typography></th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {games.map((item, idx) => (
                    <tr key={idx} className="position-table__row">
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
      </Table>
    </div>
  );
};

PositionTable.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.object,
  error: PropTypes.bool,
  cols: PropTypes.array,
  retry: PropTypes.func,
};

export default PositionTable;
