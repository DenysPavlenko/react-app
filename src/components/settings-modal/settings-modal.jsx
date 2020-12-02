import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchBalanceData } from 'redux/balance/actions';
import { selectBalance } from 'redux/balance/selectors';
// Components
import Modal from 'components/modal/modal';
import Typography from 'components/typography/typography';
import Close from 'components/close/close';
import Select from 'components/select/select';
import Buton from 'components/button/button';
import ErrorIndicator from 'components/error-indicator/error-indicator';
import Spinner from 'components/spinner/spinner'
// Styles
import './settings-modal.sass';

const SettingsModal = ({ isHidden, close, fetchBalanceData, balance: { loading, data, error } }) => {
  useLayoutEffect(() => {
    !isHidden && fetchBalanceData();
  }, [isHidden, fetchBalanceData]);

  return (
    <Modal className="settings-modal" hidden={isHidden} closeModal={close} size="sm" noClose>
      <div className="settings-modal__header">
        <Typography component="h4" className="settings-modal__item-title">My account</Typography>
        <Close onClick={close} dark />
      </div>
      <div className="settings-modal__box">
        {error && <ErrorIndicator retry={fetchBalanceData} />}
        {(!error && loading) && <Spinner boxed />}
        {(!error && !loading) &&
          <>
            <div className="settings-modal__item">
              <Typography component="h5" className="settings-modal__item-title">balance</Typography>
              <Typography component="h5" className={data.balance < 0 ? 'text-danger' : ''}>${data.balance}</Typography>
            </div>
            <div className="settings-modal__item">
              <Typography component="h5" className="settings-modal__item-title">pending</Typography>
              <Typography component="h5" className={data.pending < 0 ? 'text-danger' : ''}>${data.pending}</Typography>
            </div>
            <div className="settings-modal__item">
              <Typography component="h5" className="settings-modal__item-title">available</Typography>
              <Typography component="h5" className={data.available < 0 ? 'text-danger' : ''}>${data.available}</Typography>
            </div>
            <div className="settings-modal__item">
              <Typography component="h5" className="settings-modal__item-title">free play</Typography>
              <Typography component="h5" className={data.freePlay < 0 ? 'text-danger' : ''}>${data.freePlay}</Typography>
            </div>
          </>
        }
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


SettingsModal.propTypes = {
  isHidden: PropTypes.bool,
  close: PropTypes.func,
  balance: PropTypes.object,
  fetchBalanceData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  balance: selectBalance,
});

const mapDispatchToProps = dispatch => ({
  fetchBalanceData: () => dispatch(fetchBalanceData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsModal);
