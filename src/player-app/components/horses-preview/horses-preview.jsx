import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectHorsesPreviewSelect } from 'player-app/redux/horses-preview-select/selectors';
// Components
import HorsesSelect from 'player-app/components/horses-select/horses-select';
import HorsesHeader from 'player-app/components/horses-header/horses-header';
import HorseBettings from 'player-app/components/horses-bettings/horses-bettings';
import HorsesBetSlip from 'player-app/components/horses-bet-slip/horses-bet-slip';
// Styles
import './horses-preview.sass';

const HorsesPreview = ({ isHorsesSelectShown }) => {
  return (
    <div className="horses-preview">
      <div className="horses-preview__row">
        <div className={`horses-preview__left ${isHorsesSelectShown ? 'is-active' : ''}`}>
          <HorsesSelect />
        </div>
        <div className="horses-preview__center">
          <HorsesHeader />
          <HorseBettings />
        </div>
        <div className="horses-preview__right">
          <HorsesBetSlip />
        </div>
      </div>
    </div>
  );
};

HorsesPreview.propTypes = {
  isHorsesSelectShown: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isHorsesSelectShown: selectHorsesPreviewSelect
});

export default connect(mapStateToProps)(HorsesPreview);
