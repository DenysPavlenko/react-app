import React from 'react';
import PropTypes from 'prop-types';
// Components
import Modal from 'shared/components/modal';
import Close from 'shared/components/close';
import Button from 'shared/components/button';
// Styles
import './styles.sass';

const DataPreviewModal = ({ open, onClose, onExited, size, title, content, total }) => {
  return (
    <Modal open={open} className="data-preview-modal" onClose={onClose} onExited={onExited} size={size} noClose>
      <div className="data-preview-modal__header">
        {title}
        <Close onClick={onClose} />
      </div>
      <div className="data-preview-modal__content">
        {content}
        <div className="data-preview-modal__content-footer">
          {total}
        </div>
      </div>
      <div className="data-preview-modal__footer">
        <Button variant="danger" size="sm" onClick={onClose}>Close</Button>
      </div>
    </Modal>
  );
};

DataPreviewModal.defaultProps = {
  size: 'lg'
};

DataPreviewModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onExited: PropTypes.func,
  size: PropTypes.string,
  title: PropTypes.node,
  content: PropTypes.node,
  total: PropTypes.node,
};

export default DataPreviewModal;
