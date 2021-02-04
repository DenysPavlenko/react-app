import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectSettings } from 'redux/settings/selectors';
import { hideSettings } from 'redux/settings/actions';
// Components
import Typography from 'components/typography';
import Close from 'components/close';
import Modal from 'components/modal';
import Input from 'components/input';
import Select from 'components/select';
import Button from 'components/button';
// Styles
import './styles.sass';

const Settings = ({ isSettingsShown, hideSettings }) => {
  return (
    <Modal open={isSettingsShown} onClose={hideSettings} size="sm" noClose className="settings">
      <div className="settings__header">
        <Typography component="h4" className="settings__item-title">Setting</Typography>
        <Close onClick={hideSettings} dark />
      </div>
      <div className="settings__container">
        <div className="settings__box">
          <div className="settings__item">
            <Typography component="h5" className="admin-settings__item-title">Deposit description:</Typography>
            <div className="settings__input">
              <Input onChange={() => { }} variant="primary-light" />
            </div>
          </div>
        </div>
        <div className="settings__box">
          <div className="settings__item">
            <Typography component="h5" className="admin-settings__item-title">Withdrawal description:</Typography>
            <div className="settings__input">
              <Input onChange={() => { }} variant="primary-light" />
            </div>
          </div>
        </div>
        <div className="settings__box">
          <div className="settings__item">
            <Typography component="h5" className="admin-settings__item-title">Format Number:</Typography>
            <div className="settings__input">
              <Select
                fluid
                onChange={() => { }}
                value={'decimal'}
                variant="primary-light"
                options={[
                  { label: 'Two decimal places', value: 'decimal' },
                  { label: 'Round to nearest dollar', value: 'dollar' },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="settings__box">
          <div className="settings__item">
            <Typography component="h5" className="admin-settings__item-title">Position Sort:</Typography>
            <div className="settings__input">
              <Select
                fluid
                onChange={() => { }}
                value={'rotation'}
                variant="primary-light"
                options={[
                  { label: 'Rotation', value: 'rotation' },
                  { label: 'Time', value: 'time' },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="settings__box">
          <div className="settings__item">
            <Typography component="h5" className="admin-settings__item-title">Shade Sort:</Typography>
            <div className="settings__input">
              <Select
                fluid
                onChange={() => { }}
                value={'rotation'}
                variant="primary-light"
                options={[
                  { label: 'Rotation', value: 'rotation' },
                  { label: 'Time', value: 'time' },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="settings__divider">
          <Typography component="h4" className="admin-settings__item-title">Wager alerts:</Typography>
        </div>
        <div className="settings__box">
          <div className="settings__item">
            <Typography component="h5" className="admin-settings__item-title">Provider:</Typography>
            <div className="settings__input">
              <Select
                fluid
                onChange={() => { }}
                value={'none'}
                variant="primary-light"
                options={[
                  { label: 'None', value: 'none' },
                  { label: 'Catapush', value: 'catapush' },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="settings__box">
          <div className="settings__item">
            <Typography component="h5" className="admin-settings__item-title">ID:</Typography>
            <div className="settings__input">
              <Input onChange={() => { }} variant="primary-light" />
            </div>
          </div>
        </div>
        <div className="settings__footer">
          <div className="settings__footer-item">
            <Button variant="accent" size="sm" onClick={hideSettings}>Save</Button>
          </div>
          <div className="settings__footer-item">
            <Button variant="danger" size="sm" onClick={hideSettings}>Close</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

Settings.propTypes = {
  isSettingsShown: PropTypes.bool,
  hideSettings: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isSettingsShown: selectSettings,
});

const mapDispatchToProps = dispatch => ({
  hideSettings: () => dispatch(hideSettings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
