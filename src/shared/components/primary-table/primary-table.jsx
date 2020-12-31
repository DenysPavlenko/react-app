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

const PrimaryTable = ({ rows, cols, data, lastRow, firstRow, loading, error, retry, variant, size, center, aligned, bordered, className }) => {
  const classes = classNames({
    'primary-table': true,
    'primary-table--center': center,
    'primary-table--aligned': aligned,
    'primary-table--bordered': bordered,
    [`primary-table--${variant}`]: variant,
    [`primary-table--${size}`]: size,
    [className]: className
  });

  return (
    <div className={classes}>
      <Table className="primary-table__table">
        {rows && rows.map((cols, idx) => (
          <TableContent key={idx} idx={idx} cols={cols} data={data[idx]} loading={loading} error={error} retry={retry} />
        ))}
        {cols && <TableContent cols={cols} data={data} lastRow={lastRow} firstRow={firstRow} loading={loading} error={error} retry={retry} />}
      </Table>
    </div>
  );
};

const TableContent = ({ cols, lastRow, firstRow, data, loading, error, retry }) => {
  const colSpan = cols.length;
  return (
    <Fragment>
      <thead className="primary-table__header">
        <tr>
          {cols.map(({ title, style }, idx) => (
            <th style={style} key={idx}>{typeof title === 'function' ? title(idx) : title}</th>
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
            {firstRow &&
              <tr className="primary-table__row">
                {firstRow.map((item, idx) => (<td key={idx}>{item}</td>))}
              </tr>
            }
            {data.map((item, idx) => (
              <tr key={idx} className="primary-table__row">
                {cols.map((col, key) => (
                  <td key={key}>{col.render(item, idx)}</td>
                ))}
              </tr>
            ))}
            {lastRow &&
              <tr className="primary-table__row">
                {lastRow.map((item, idx) => (<td key={idx}>{item}</td>))}
              </tr>
            }
          </Fragment>
        }
        {(!error && !loading && (!data || data.length === 0)) &&
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
  firstRow: PropTypes.array,
  lastRow: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  retry: PropTypes.func,
  variant: PropTypes.string,
  center: PropTypes.bool,
  aligned: PropTypes.bool,
  bordered: PropTypes.bool,
  className: PropTypes.string,
};

export default PrimaryTable;
