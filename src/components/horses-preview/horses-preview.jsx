import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectHorsesPreviewSelect } from 'redux/horses-preview-select/selectors';
// Components
import HorsesSelect from 'components/horses-select/horses-select';
import HorsesHeader from 'components/horses-header/horses-header';
import HorseBettings from 'components/horses-bettings/horses-bettings';
import HorsesBetSlip from 'components/horses-bet-slip/horses-bet-slip';
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
