import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Typography from 'shared/components/typography/typography';
import Table from 'shared/components/table/table';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
import Spinner from 'shared/components/spinner/spinner';
// Styles
import './primary-table.sass'

const PrimaryTable = ({ rows, cols, data, loading, error, retry, variant, size, center }) => {
  const classes = classNames({
    'primary-table': true,
    'primary-table--center': center,
    [`primary-table--${variant}`]: variant,
    [`primary-table--${size}`]: size
  });

  return (
    <div className={classes}>
      <Table className="primary-table__table">
        {rows && rows.map((cols, idx) => (
          <TableContent key={idx} idx={idx} cols={cols} data={data[idx]} loading={loading} error={error} retry={retry} />
        ))}
        {cols && <TableContent cols={cols} data={data} loading={loading} error={error} retry={retry} />}
      </Table>
    </div>
  );
};

const TableContent = ({ cols, idx, data, loading, error, retry }) => {
  const colSpan = cols.length;
  return (
    <Fragment>
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
            {data.map((item, idx) => {
              return (
                <tr key={idx} className="primary-table__row">
                  {cols.map((col, key) => (
                    <td key={key}>{col.render(item)}</td>
                  ))}
                </tr>
              )
            })}
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
    </Fragment>
  )
};

PrimaryTable.defaultProps = {
  loading: false,
  error: false,
  retry: () => { }
};

PrimaryTable.propTypes = {
  rows: PropTypes.array,
  cols: PropTypes.array,
  data: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  retry: PropTypes.func,
  variant: PropTypes.string,
  center: PropTypes.bool,
};

export default PrimaryTable;
