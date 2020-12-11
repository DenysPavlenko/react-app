import React, { Fragment } from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
import Spinner from 'shared/components/spinner/spinner';
// Styles
import './primary-table.sass'

const PrimaryTable = ({ cols, data, loading, error, retry }) => {
  const colSpan = cols.length;

  return (
    <div className="primary-table">
      <table className="primary-table__table">
        <thead className="primary-table__header">
          <tr>
            {cols.map((headerItem, index) => (
              <th key={index}>{headerItem.title}</th>
            ))}
          </tr>
        </thead>
        <tbody className="primary-table__body">
          {error &&
            <tr>
              <th colSpan={colSpan}>
                <ErrorIndicator retry={retry} light />
              </th>
            </tr>
          }
          {(!error && loading) &&
            <tr>
              <th colSpan={colSpan}>
                <Spinner boxed light />
              </th>
            </tr>
          }
          {(!error && !loading && data) &&
            <Fragment>
              {data.map((item, idx) => (
                <tr key={idx} className="primary-table__row">
                  {cols.map((col, key) => (
                    <td key={key}>{col.render(item)}</td>
                  ))}
                </tr>
              ))}
            </Fragment>
          }
          {(!error && !loading && !data) &&
            <tr className="primary-table__empty">
              <td colSpan={colSpan}>
                <Typography component="h3" className="text-center">There is no data</Typography>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
};

export default PrimaryTable;
