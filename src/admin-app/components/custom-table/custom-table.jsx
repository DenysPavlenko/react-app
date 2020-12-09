import React, { Fragment } from 'react';
// Components
import Typography from 'shared/components/typography/typography';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
import Spinner from 'shared/components/spinner/spinner';
// Styles
import './custom-table.sass'

const CustomTable = ({ cols, data, loading, error, retry }) => {
  const colSpan = cols.length;

  return (
    <div className="custom-table">
      <table className="custom-table__table">
        <thead className="custom-table__header">
          <tr>
            {cols.map((headerItem, index) => (
              <th key={index}>{headerItem.title}</th>
            ))}
          </tr>
        </thead>
        <tbody className="custom-table__body">
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
                <tr key={idx} className="custom-table__row">
                  {cols.map((col, key) => (
                    <td key={key}>{col.render(item)}</td>
                  ))}
                </tr>
              ))}
            </Fragment>
          }
          {(!error && !loading && !data) &&
            <tr className="custom-table__empty">
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

export default CustomTable;
