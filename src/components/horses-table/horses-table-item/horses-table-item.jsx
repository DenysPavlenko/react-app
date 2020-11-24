import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Typography from 'components/typography/typography';
import Input from 'components/input/input';
// Styles
import './horses-table-item.sass';

const HorsesTableItem = ({ className, id, runner, jokey, trainer, weight, price, med, ml }) => {
  const classes = classNames({
    'horses-table-item': true,
    [className]: className
  });

  return (
    <tbody className={classes}>
      <tr>
        <td>
          <Input className="horses-table-item__input" type="number" size="xs" />
        </td>
        <td>
          <Input className="horses-table-item__input" type="number" size="xs" />
        </td>
        <td>
          <Input className="horses-table-item__input" type="number" size="xs" />
        </td>
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
  runner: PropTypes.string,
  jokey: PropTypes.string,
  trainer: PropTypes.string,
  weight: PropTypes.string,
  price: PropTypes.string,
  med: PropTypes.string,
  ml: PropTypes.string,
};

export default HorsesTableItem;
