import React, { Fragment } from 'react';
// Components
import Typography from 'shared/components/typography';
import Checkbox from 'shared/components/checkbox';
import Input from 'shared/components/input';

const columns = () => {
  const renderCheckboxCol = (x) => ({
    name: "checkbox",
    title: idx => (
      <div className="horses-bettings-table__checkbox">
        <span className="horses-bettings-table__number">{idx + 1}°</span>
        <Checkbox onChange={() => { }} name={idx + 1} />
      </div>
    ),
    render: ({ id }) => <Checkbox onChange={() => { }} name={id + x} checked={false} />
  });

  const renderInputCol = (title) => ({
    name: "input",
    title,
    render: () => <Input size="xs" variant="primary" />
  });

  return [
    renderCheckboxCol(),
    renderCheckboxCol(),
    renderCheckboxCol(),
    renderCheckboxCol(),
    renderInputCol('Win'),
    renderInputCol('Place'),
    renderInputCol('Show'),
    {
      title: 'PN',
      render: (_, idx) => <Typography component="p">{idx + 1}</Typography>
    },
    {
      title: 'Runner / Jockey',
      render: ({ runner, jockey }) => (
        <Fragment>
          <Typography component="p">{runner}</Typography>
          <Typography component="p" variant="p-sm">{jockey}</Typography>
        </Fragment>
      )
    },
    {
      title: 'Trainer',
      render: ({ trainer }) => <Typography component="p">{trainer}</Typography>
    },
    {
      title: 'Weight',
      render: ({ weight }) => <Typography component="p">{weight}</Typography>
    },
    {
      title: 'Price',
      render: ({ price }) => <Typography component="p">${price}</Typography>
    },
    {
      title: 'Med.',
      render: ({ med }) => <Typography component="p">{med}</Typography>
    },
    {
      title: 'M/L',
      render: ({ ml }) => <Typography component="p">{ml}</Typography>
    },
  ]
};

const tableContent = (withCheckbox, checkboxColumns) => {
  return columns().filter(({ name }, idx) => {
    let res;
    if (withCheckbox) {
      if (name !== 'input') {
        res = name === 'checkbox' ? idx < checkboxColumns : true
      }
    } else {
      res = name !== 'checkbox';
    }
    return res;
  })
};

export default tableContent;
