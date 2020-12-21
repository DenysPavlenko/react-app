import React from 'react';
// Components
import Close from 'shared/components/close/close';
import Modal from 'shared/components/modal/modal';
import Typography from 'shared/components/typography/typography';
import Checkbox from 'shared/components/checkbox/checkbox';
import Button from 'shared/components/button/button';
// Styles
import './table-filter.sass';

const TableFilter = ({ title, isShown, handleHide, filters, handleCheck }) => {
  return (
    <Modal className="table-filter" open={isShown} onClose={handleHide} size="sm" noClose>
      <div className="table-filter__header">
        <Typography component="h3" className="settings__item-title">{title}</Typography>
        <Close onClick={handleHide} dark />
      </div>
      <div className="table-filter__filters">
        {filters.map(({ title, name, checked }, idx) => (
          <div key={idx} className="table-filter__filter">
            <Checkbox label={title} name={name} checked={checked} onChange={handleCheck} />
          </div>
        ))}
      </div>
      <div className="table-filter__buttons">
        <div className="table-filter__button">
          <Button variant="accent" size="sm" onClick={handleHide}>Save</Button>
        </div>
        <div className="table-filter__button">
          <Button variant="danger" size="sm" onClick={handleHide}>Close</Button>
        </div>
      </div>
    </Modal>
  );
};

export default TableFilter;
