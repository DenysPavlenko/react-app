import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Typography from 'components/typography/typography';
import Checkbox from 'components/checkbox/checkbox';
import Input from 'components/input/input';
// Styles
import './horses-table-item.sass';

const HorsesTableItem = ({ className, id, runner, jokey, trainer, weight, price, med, ml, withCheckbox, checkboxColumns, handleItemCheck, checkedBoxes, bets }) => {
  const classes = classNames({
    'horses-table-item': true,
    [className]: className
  });

  const RenderTd = () => {
    if (withCheckbox) {
      return [...Array(checkboxColumns)].map((i, idx) => (
        <td key={idx}>
          <Checkbox onChange={handleItemCheck} name={bets[idx]} checked={checkedBoxes.includes(bets[idx])} />
        </td>
      ));
    }
    else {
      return [...Array(3)].map((i, idx) => (
        <td key={idx}><Input className="horses-table-item__input" type="number" size="xs" /></td>
      ));
    }
  };

  return (
    <tbody className={classes}>
      <tr>
        <RenderTd />
        <td>
          <Typography component="p" className="horses-table-item__number">{id}</Typography>
        </td>
        <td>
          <Typography component="p">{runner}</Typography>
          <Typography component="p" variant="p-sm">{jokey}</Typography>
        </td>
        <td>
          <Typography component="p">{trainer}</Typography>
        </td>
        <td>
          <Typography component="p">{weight}</Typography>
        </td>
        <td>
          <Typography component="p">${price}</Typography>
        </td>
        <td>
          <Typography component="p">{med}</Typography>
        </td>
        <td>
          <Typography component="p">{ml}</Typography>
        </td>
      </tr>
    </tbody>
  );
};

HorsesTableItem.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  runner: PropTypes.string,
  jokey: PropTypes.string,
  trainer: PropTypes.string,
  weight: PropTypes.string,
  price: PropTypes.string,
  med: PropTypes.string,
  ml: PropTypes.string,
  withCheckbox: PropTypes.bool,
  checkboxColumns: PropTypes.number,
  handleItemCheck: PropTypes.func,
  checkedBoxes: PropTypes.array,
  bets: PropTypes.array,
};

export default HorsesTableItem;
