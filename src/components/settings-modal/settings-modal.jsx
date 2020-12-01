import React from 'react';
// Components
import Modal from 'components/modal/modal';
import Typography from 'components/typography/typography';
import Close from 'components/close/close';
import Select from 'components/select/select';
import Buton from 'components/button/button';
// Styles
import './settings-modal.sass';

const balance = [
  { title: 'balance', total: '-74' },
  { title: 'pending', total: '120' },
  { title: 'available', total: '160' },
  { title: 'free play', total: '0' },
];

const SettingsModal = ({ isHidden, close }) => {
  return (
    <Modal className="settings-modal" hidden={isHidden} closeModal={close} size="sm" noClose>
      <div className="settings-modal__header">
        <Typography component="h4" className="settings-modal__item-title">My account</Typography>
        <Close onClick={close} dark />
      </div>
      <div className="settings-modal__box">
        {balance.map(({ title, total }, idx) => (
          <div key={idx} className="settings-modal__item">
            <Typography component="h5" className="settings-modal__item-title">{title}</Typography>
            <Typography component="h5">${total}</Typography>
          </div>
        ))}
      </div>
      <div className="settings-modal__box">
        <div className="settings-modal__item">
          <Typography component="h5" className="settings-modal__item-title">Game sort(dispaly)</Typography>
          <Select
            onChange={() => { }}
            options={[
              { label: 'By time', value: 'By time' },
              { label: 'By rotation', value: 'By rotation' },
            ]}
            inline
          />
        </div>
      </div>
      <div className="settings-modal__box">
        <div className="settings-modal__item">
          <Typography component="h5" className="settings-modal__item-title">Time</Typography>
          <Select
            onChange={() => { }}
            options={[
              { label: 'Pacific', value: 'pacific' },
              { label: 'Eastern', value: 'eastern' },
              { label: 'Central', value: 'central' },
              { label: 'Mountain', value: 'mountain' },
            ]}
            inline
          />
        </div>
      </div>
      <div className="settings-modal__box">
        <div className="settings-modal__item">
          <Typography component="h5" className="settings-modal__item-title">Default Pitcher Setting</Typography>
          <Select
            onChange={() => { }}
            options={[
              { label: 'Action', value: 'action' },
              { label: 'Listed', value: 'listed' },
            ]}
            inline
          />
        </div>
      </div>
      <div className="settings-modal__box">
        <div className="settings-modal__item">
          <Typography component="h5" className="settings-modal__item-title">Version</Typography>
          <Typography component="h5">1.0.0</Typography>
        </div>
      </div>
      <div className="settings-modal__footer">
        <Buton variant="danger" size="sm" onClick={close}>Close</Buton>
      </div>
    </Modal>
  );
};

export default SettingsModal;
