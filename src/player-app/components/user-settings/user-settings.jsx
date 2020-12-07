import React, { Fragment, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchBalanceData } from 'player-app/redux/balance/actions';
import { selectBalance } from 'player-app/redux/balance/selectors';
import { selectSettings } from 'shared/redux/settings/selectors';
import { hideSettings } from 'shared/redux/settings/actions';
// Components
import Settings from 'shared/components/settings/settings';
import { SettingsBox, SettingsItem, SettingsInput, SettingsFooter } from 'shared/components/settings/settings.styles';
import Typography from 'shared/components/typography/typography';
import Select from 'shared/components/select/select';
import Buton from 'shared/components/button/button';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
import Spinner from 'shared/components/spinner/spinner'

const UserSettings = ({ isSettingsShown, fetchBalanceData, balance: { loading, data, error } }) => {
  useLayoutEffect(() => {
    isSettingsShown && fetchBalanceData();
  }, [isSettingsShown, fetchBalanceData]);

  return (
    <Settings title="My account">
      <SettingsBox>
        {error && <ErrorIndicator retry={fetchBalanceData} />}
        {(!error && loading) && <Spinner boxed />}
        {(!error && !loading) &&
          <Fragment>
            <SettingsItem>
              <Typography component="h5" className="settings__item-title">balance</Typography>
              <Typography component="h5" className={data.balance < 0 ? 'text-danger' : ''}>${data.balance}</Typography>
            </SettingsItem>
            <SettingsItem>
              <Typography component="h5" className="settings__item-title">pending</Typography>
              <Typography component="h5" className={data.pending < 0 ? 'text-danger' : ''}>${data.pending}</Typography>
            </SettingsItem>
            <SettingsItem>
              <Typography component="h5" className="settings__item-title">available</Typography>
              <Typography component="h5" className={data.available < 0 ? 'text-danger' : ''}>${data.available}</Typography>
            </SettingsItem>
            <SettingsItem>
              <Typography component="h5" className="settings__item-title">free play</Typography>
              <Typography component="h5" className={data.freePlay < 0 ? 'text-danger' : ''}>${data.freePlay}</Typography>
            </SettingsItem>
          </Fragment>
        }
      </SettingsBox>
      <SettingsBox>
        <SettingsItem>
          <Typography component="h5" className="settings__item-title">Game sort(dispaly)</Typography>
          <SettingsInput>
            <Select
              onChange={() => { }}
              fluid
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
        <Buton variant="danger" size="sm" onClick={hideSettings}>Close</Buton>
      </SettingsFooter>
    </Settings>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);
