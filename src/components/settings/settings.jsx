import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchBalanceData } from 'redux/balance/actions';
import { selectBalance } from 'redux/balance/selectors';
import { selectSettings } from 'redux/settings/selectors';
import { hideSettings } from 'redux/settings/actions';
// Components
import Modal from 'components/modal/modal';
import Typography from 'components/typography/typography';
import Close from 'components/close/close';
import Select from 'components/select/select';
import Buton from 'components/button/button';
import ErrorIndicator from 'components/error-indicator/error-indicator';
import Spinner from 'components/spinner/spinner'
// Styles
import './settings.sass';

const Settings = ({ isSettingsShown, hideSettings, fetchBalanceData, balance: { loading, data, error } }) => {
  useLayoutEffect(() => {
    isSettingsShown && fetchBalanceData();
  }, [isSettingsShown, fetchBalanceData]);

  return (
    <Modal className="settings" hidden={!isSettingsShown} closeModal={hideSettings} size="sm" noClose>
      <div className="settings__header">
        <Typography component="h4" className="settings__item-title">My account</Typography>
        <Close onClick={hideSettings} dark />
      </div>
      <div className="settings__box">
        {error && <ErrorIndicator retry={fetchBalanceData} />}
        {(!error && loading) && <Spinner boxed />}
        {(!error && !loading) &&
          <>
            <div className="settings__item">
              <Typography component="h5" className="settings__item-title">balance</Typography>
              <Typography component="h5" className={data.balance < 0 ? 'text-danger' : ''}>${data.balance}</Typography>
            </div>
            <div className="settings__item">
              <Typography component="h5" className="settings__item-title">pending</Typography>
              <Typography component="h5" className={data.pending < 0 ? 'text-danger' : ''}>${data.pending}</Typography>
            </div>
            <div className="settings__item">
              <Typography component="h5" className="settings__item-title">available</Typography>
              <Typography component="h5" className={data.available < 0 ? 'text-danger' : ''}>${data.available}</Typography>
            </div>
            <div className="settings__item">
              <Typography component="h5" className="settings__item-title">free play</Typography>
              <Typography component="h5" className={data.freePlay < 0 ? 'text-danger' : ''}>${data.freePlay}</Typography>
            </div>
          </>
        }
      </div>
      <div className="settings__box">
        <div className="settings__item">
          <Typography component="h5" className="settings__item-title">Game sort(dispaly)</Typography>
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
      <div className="settings__box">
        <div className="settings__item">
          <Typography component="h5" className="settings__item-title">Time</Typography>
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
      <div className="settings__box">
        <div className="settings__item">
          <Typography component="h5" className="settings__item-title">Default Pitcher Setting</Typography>
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
      <div className="settings__box">
        <div className="settings__item">
          <Typography component="h5" className="settings__item-title">Version</Typography>
          <Typography component="h5">1.0.0</Typography>
        </div>
      </div>
      <div className="settings__footer">
        <Buton variant="danger" size="sm" onClick={hideSettings}>Close</Buton>
      </div>
    </Modal>
  );
};

Settings.propTypes = {
  isSettingsShown: PropTypes.bool,
  close: PropTypes.func,
  balance: PropTypes.object,
  fetchBalanceData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  balance: selectBalance,
  isSettingsShown: selectSettings,
});

const mapDispatchToProps = dispatch => ({
  fetchBalanceData: () => dispatch(fetchBalanceData()),
  hideSettings: () => dispatch(hideSettings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
