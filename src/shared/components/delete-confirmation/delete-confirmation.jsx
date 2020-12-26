import React from 'react';
import PropTypes from 'prop-types';
// Components
import Modal from 'shared/components/modal/modal';
import ButtonGroup from 'shared/components/button-group/button-group';
import Button from 'shared/components/button/button';
import Typography from 'shared/components/typography/typography';
// Styles
import './delete-confirmation.sass';

const DataPreviewModal = ({ open, onClose, text, onConfirm }) => {
  const handleYes = () => {
    onClose();
    onConfirm();
  };

  return (
    <Modal open={open} className="delete-confirmation" onClose={onClose} size="sm" noClose>
      <div className="delete-confirmation__text">
        <Typography component="h2">{text}</Typography>
      </div>
      <div className="delete-confirmation__buttons">
        <ButtonGroup separated>
          <Button variant="danger" size="sm" onClick={onClose}>No</Button>
          <Button variant="accent" size="sm" onClick={handleYes}>Yes</Button>
        </ButtonGroup>
      </div>
    </Modal >
  );
};

DataPreviewModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  text: PropTypes.node,
};

export default DataPreviewModal;