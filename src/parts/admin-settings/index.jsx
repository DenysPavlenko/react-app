import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Redux
import { hideSettings } from 'redux/settings/actions';
// Components
import Settings from 'parts/settings';
import { SettingsBox, SettingsItem, SettingsInput, SettingsFooter, SettingsFooterItem, SettingsDivider } from 'parts/settings/styles';
import Typography from 'components/typography';
import Input from 'components/input';
import Select from 'components/select';
import Button from 'components/button';

const AdminSettings = ({ hideSettings }) => {
  return (
    <Settings title="Agent Setting">
      <SettingsBox>
        <SettingsItem>
          <Typography component="h5" className="admin-settings__item-title">Deposit description:</Typography>
          <SettingsInput>
            <Input onChange={() => { }} variant="primary-light" />
          </SettingsInput>
        </SettingsItem>
      </SettingsBox>
      <SettingsBox>
        <SettingsItem>
          <Typography component="h5" className="admin-settings__item-title">Withdrawal description:</Typography>
          <SettingsInput>
            <Input onChange={() => { }} variant="primary-light" />
          </SettingsInput>
        </SettingsItem>
      </SettingsBox>
      <SettingsBox>
        <SettingsItem>
          <Typography component="h5" className="admin-settings__item-title">Format Number:</Typography>
          <SettingsInput>
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
          </SettingsInput>
        </SettingsItem>
      </SettingsBox>
      <SettingsBox>
        <SettingsItem>
          <Typography component="h5" className="admin-settings__item-title">Position Sort:</Typography>
          <SettingsInput>
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
          </SettingsInput>
        </SettingsItem>
      </SettingsBox>
      <SettingsBox>
        <SettingsItem>
          <Typography component="h5" className="admin-settings__item-title">Shade Sort:</Typography>
          <SettingsInput>
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
          </SettingsInput>
        </SettingsItem>
      </SettingsBox>
      <SettingsDivider>
        <Typography component="h4" className="admin-settings__item-title">Wager alerts:</Typography>
      </SettingsDivider>
      <SettingsBox>
        <SettingsItem>
          <Typography component="h5" className="admin-settings__item-title">Provider:</Typography>
          <SettingsInput>
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
          </SettingsInput>
        </SettingsItem>
      </SettingsBox>
      <SettingsBox>
        <SettingsItem>
          <Typography component="h5" className="admin-settings__item-title">ID:</Typography>
          <SettingsInput>
            <Input onChange={() => { }} variant="primary-light" />
          </SettingsInput>
        </SettingsItem>
      </SettingsBox>
      <SettingsFooter>
        <SettingsFooterItem>
          <Button variant="accent" size="sm" onClick={hideSettings}>Save</Button>
        </SettingsFooterItem>
        <SettingsFooterItem>
          <Button variant="danger" size="sm" onClick={hideSettings}>Close</Button>
        </SettingsFooterItem>
      </SettingsFooter>
    </Settings>
  );
};

AdminSettings.propTypes = {
  hideSettings: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  hideSettings: () => dispatch(hideSettings()),
});

export default connect(null, mapDispatchToProps)(AdminSettings);
