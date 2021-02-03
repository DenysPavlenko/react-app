import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectUserBalance } from 'shared/redux/user/selectors';
import { hideSettings } from 'shared/redux/settings/actions';
// Components
import Settings from 'shared/parts/settings';
import { SettingsBox, SettingsItem, SettingsInput, SettingsFooter } from 'shared/parts/settings/styles';
import Typography from 'shared/components/typography';
import Select from 'shared/components/select';
import Button from 'shared/components/button';
// Utils
import handleStatusClass from 'shared/utils/handle-status-class';

const PlayerSettings = ({ hideSettings, balance: { total, pending, available, freePlay } }) => {
  return (
    <Settings title="My account">
      <SettingsBox>
        <SettingsItem>
          <Typography component="h5" className="settings__item-title">balance</Typography>
          <Typography component="h5" className={handleStatusClass(total)}>${total}</Typography>
        </SettingsItem>
        <SettingsItem>
          <Typography component="h5" className="settings__item-title">pending</Typography>
          <Typography component="h5" className={handleStatusClass(pending)}>${pending}</Typography>
        </SettingsItem>
        <SettingsItem>
          <Typography component="h5" className="settings__item-title">available</Typography>
          <Typography component="h5" className={handleStatusClass(available)}>${available}</Typography>
        </SettingsItem>
        <SettingsItem>
          <Typography component="h5" className="settings__item-title">free play</Typography>
          <Typography component="h5" className={handleStatusClass(freePlay)}>${freePlay}</Typography>
        </SettingsItem>
      </SettingsBox>
      <SettingsBox>
        <SettingsItem>
          <Typography component="h5" className="settings__item-title">Game sort(dispaly)</Typography>
          <SettingsInput>
            <Select
              onChange={() => { }}
              fluid
              value="By time"
              variant="primary-light"
              options={[
                { label: 'By time', value: 'By time' },
                { label: 'By rotation', value: 'By rotation' },
              ]}
            />
          </SettingsInput>
        </SettingsItem>
      </SettingsBox>
      <SettingsBox>
        <SettingsItem>
          <Typography component="h5" className="settings__item-title">Time</Typography>
          <SettingsInput>
            <Select
              onChange={() => { }}
              fluid
              value="pacific"
              variant="primary-light"
              options={[
                { label: 'Pacific', value: 'pacific' },
                { label: 'Eastern', value: 'eastern' },
                { label: 'Central', value: 'central' },
                { label: 'Mountain', value: 'mountain' },
              ]}
            />
          </SettingsInput>
        </SettingsItem>
      </SettingsBox>
      <SettingsBox>
        <SettingsItem>
          <Typography component="h5" className="settings__item-title">Default Pitcher Setting</Typography>
          <SettingsInput>
            <Select
              onChange={() => { }}
              fluid
              value="action"
              variant="primary-light"
              options={[
                { label: 'Action', value: 'action' },
                { label: 'Listed', value: 'listed' },
              ]}
            />
          </SettingsInput>
        </SettingsItem>
      </SettingsBox>
      <SettingsBox>
        <SettingsItem>
          <Typography component="h5" className="settings__item-title">Version</Typography>
          <Typography component="h5">1.0.0</Typography>
        </SettingsItem>
      </SettingsBox>
      <SettingsFooter>
        <Button variant="danger" size="sm" onClick={hideSettings}>Close</Button>
      </SettingsFooter>
    </Settings>
  );
};

Settings.propTypes = {
  close: PropTypes.func,
  balance: PropTypes.object,
  hideSettings: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  balance: selectUserBalance,
});

const mapDispatchToProps = dispatch => ({
  hideSettings: () => dispatch(hideSettings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSettings);
