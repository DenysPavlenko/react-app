import React from 'react';
import { hideSettings } from 'shared/redux/settings/actions';
// Components
import Settings from 'shared/components/settings/settings';
import { SettingsBox, SettingsItem, SettingsInput, SettingsFooter, SettingsFooterItem, SettingsDivider } from 'shared/components/settings/settings.styles';
import Typography from 'shared/components/typography/typography';
import Input from 'shared/components/input/input';
import Select from 'shared/components/select/select';
import Buton from 'shared/components/button/button';

const AdminSettings = () => {
  return (
    <Settings title="Agent Setting">
      <SettingsBox>
        <SettingsItem>
          <Typography component="h5" className="admin-settings__item-title">Deposit description:</Typography>
          <SettingsInput>
            <Input onChange={() => { }} placeholder="description" />
          </SettingsInput>
        </SettingsItem>
      </SettingsBox>
      <SettingsBox>
        <SettingsItem>
          <Typography component="h5" className="admin-settings__item-title">Withdrawal description:</Typography>
          <SettingsInput>
            <Input onChange={() => { }} placeholder="description" />
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
            <Input onChange={() => { }} placeholder="id" />
          </SettingsInput>
        </SettingsItem>
      </SettingsBox>
      <SettingsFooter>
        <SettingsFooterItem>
          <Buton variant="accent" size="sm" onClick={hideSettings}>Save</Buton>
        </SettingsFooterItem>
        <SettingsFooterItem>
          <Buton variant="danger" size="sm" onClick={hideSettings}>Close</Buton>
        </SettingsFooterItem>
      </SettingsFooter>
    </Settings>
  );
};

export default AdminSettings;
