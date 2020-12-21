import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectSettings } from 'shared/redux/settings/selectors';
import { hideSettings } from 'shared/redux/settings/actions';
// Components
import Typography from 'shared/components/typography/typography';
import Close from 'shared/components/close/close';
// Settings
import { SettingsContainer, SettingsHeader } from './settings.styles';

const Settings = ({ isSettingsShown, hideSettings, children, title }) => {
  return (
    <SettingsContainer open={isSettingsShown} onClose={hideSettings} size="sm" noClose>
      <SettingsHeader>
        <Typography component="h4" className="settings__item-title">{title}</Typography>
        <Close onClick={hideSettings} dark />
      </SettingsHeader>
      {children}
    </SettingsContainer>
  );
};

Settings.propTypes = {
  isSettingsShown: PropTypes.bool,
  children: PropTypes.node,
  hideSettings: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isSettingsShown: selectSettings,
});

const mapDispatchToProps = dispatch => ({
  hideSettings: () => dispatch(hideSettings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
