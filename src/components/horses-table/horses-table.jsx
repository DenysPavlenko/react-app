import React from 'react';
import PropTypes from 'prop-types';
// Components
import Table from 'components/table/table';
import HorsesTableTitle from './horses-table-title/horses-table-title';
import HorsesTableHeader from './horses-table-header/horses-table-header';
import HorsesTableItem from './horses-table-item/horses-table-item';
// Styles
import './horses-table.sass';

const HorsesTable = ({ data }) => {
  return (
    <div className="horses-table">
      <HorsesTableTitle title="Race 1" />
      <Table className="horses-table">
        <HorsesTableHeader />
        {data.map(({ id, ...otherProps }) => (
          <HorsesTableItem key={id} id={id} {...otherProps} className="horses-table__item" />
        ))}
      </Table>
    </div>
  );
};

HorsesTable.propTypes = {
  data: PropTypes.array,
};

export default HorsesTable;
