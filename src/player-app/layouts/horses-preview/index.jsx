import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectHorsesPreviewSelect } from 'player-app/redux/horses-preview-select/selectors';
// Components
import HorsesSelect from 'player-app/parts/horses-select';
import HorseBettings from 'player-app/parts/horses-bettings';
import HorsesBetSlip from 'player-app/parts/horses-bet-slip';
import HandleMobile from 'shared/components/handle-mobile';
// Styles
import './styles.sass';

const HorsesPreview = ({ isHorsesSelectShown }) => {
  return (
    <div className="horses-preview">
      <div className="horses-preview__row">
        <div className="horses-preview__left">
          <HandleMobile showOnMobile={isHorsesSelectShown}>
            <HorsesSelect />
          </HandleMobile>
        </div>
        <div className="horses-preview__center">
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
