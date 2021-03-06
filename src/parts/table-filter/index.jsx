import React from 'react';
// Components
import Close from 'components/close';
import Modal from 'components/modal';
import Typography from 'components/typography';
import Checkbox from 'components/checkbox';
import Button from 'components/button';
// Styles
import './styles.sass';

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
