import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// Components
import Table from 'shared/components/table/table';
import HorsesTableTitle from './horses-table-title/horses-table-title';
import HorsesTableHeader from './horses-table-header/horses-table-header';
import HorsesTableItem from './horses-table-item/horses-table-item';
// Styles
import './horses-table.sass';

const HorsesTable = ({ data, withCheckbox, checkboxColumns }) => {
  const [globalBoxes, setGlobalBoxes] = useState([]);
  const [checkedBoxes, setCheckedBoxes] = useState([]);

  // Clear all boxes on checkboxColumns change
  useEffect(() => {
    setCheckedBoxes([]);
    setGlobalBoxes([]);
  }, [checkboxColumns]);

  const handleItemCheck = e => {
    const name = e.target.name;
    setCheckedBoxes(checkedBoxes => {
      return setHelper(checkedBoxes, name);
    });
  };

  const handleItemsCheck = e => {
    const name = e.target.name;
    const checked = e.target.checked;
    // Handle global checkboxes
    setGlobalBoxes(globalBoxes => {
      return setHelper(globalBoxes, name);
    });
    // Handle checkboxes
    setCheckedBoxes(checkedBoxes => {
      const items = data.map(({ bets }) => bets[name]);
      if (checked) {
        return [...checkedBoxes, ...items];
      } else {
        return [...checkedBoxes.filter((item) => !items.includes(item))];
      }
    });
  };

  const setHelper = (selects, name) => {
    return selects.includes(name) ? selects.filter((item) => item !== name) : [...selects, name];
  };

  return (
    <div className="horses-table">
      <HorsesTableTitle title="Race 1" />
      <Table className="horses-table">
        <HorsesTableHeader handleItemsCheck={handleItemsCheck} withCheckbox={withCheckbox} checkboxColumns={checkboxColumns} globalBoxes={globalBoxes} />
        {data.map(({ id, ...otherProps }) => (
          <HorsesTableItem key={id} className="horses-table__item" checkedBoxes={checkedBoxes} handleItemCheck={handleItemCheck} withCheckbox={withCheckbox} id={id} checkboxColumns={checkboxColumns} {...otherProps} />
        ))}
      </Table>
    </div>
  );
};

HorsesTable.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
};

export default HorsesTable;
