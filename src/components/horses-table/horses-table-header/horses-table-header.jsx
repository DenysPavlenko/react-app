import React from 'react';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography/typography';
import Checkbox from 'components/checkbox/checkbox';
// Styles
import './horses-table-header.sass';

const HorsesTableHeader = ({ withCheckbox, checkboxColumns, handleItemsCheck, globalBoxes }) => {
  const RenderTh = () => {
    if (withCheckbox) {
      return [...Array(checkboxColumns)].map((i, idx) => (
        <th key={idx}>
          <div className="horses-table-header__box">
            <Typography component="p" variant="p-sm" className="horses-table-header__number">{idx + 1}°</Typography>
            <Checkbox onChange={handleItemsCheck} name={idx} checked={globalBoxes.includes((idx.toString()))} />
          </div>
        </th>
      ));
    }
    else {
      return (<>
        <th>
          <Typography component="p">Win</Typography>
        </th>
        <th>
          <Typography component="p">Place</Typography>
        </th>
        <th>
          <Typography component="p">Show</Typography>
        </th>
      </>)
    }
  };

  return (
    <thead className="horses-table-header">
      <tr>
        <RenderTh />
        <th>
          <Typography component="p">PN</Typography>
        </th>
        <th>
          <Typography component="p">Runner / Jockey</Typography>
        </th>
        <th>
          <Typography component="p">Trainer</Typography>
        </th>
        <th>
          <Typography component="p">Weight</Typography>
        </th>
        <th>
          <Typography component="p">Price</Typography>
        </th>
        <th>
          <Typography component="p">Med.</Typography>
        </th>
        <th>
          <Typography component="p">M/L</Typography>
        </th>
      </tr>
    </thead>
  );
};

HorsesTableHeader.propTypes = {
  withCheckbox: PropTypes.bool,
  checkboxColumns: PropTypes.number,
  handleItemsCheck: PropTypes.func,
  globalBoxes: PropTypes.array
};

export default HorsesTableHeader;
