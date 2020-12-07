import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { togglePersonalize } from 'shared/redux/personalize/actions';
import { selectPersonalize } from 'shared/redux/personalize/selectors';
import { selectColorSchemes } from 'shared/redux/color-scheme/selectors';
// Components
import SidebarItem from 'shared/components/sidebar-item/sidebar-item';
import PersonalizeItem from 'shared/components/personalize-item/personalize-item';
import Simplebar from 'simplebar-react';
import Close from 'shared/components/close/close';
// Styles
import './personalize.sass';

const Personalize = ({ isActive, togglePersonalize, colorSchemes }) => {
  return (
    <SidebarItem isActive={isActive} toggle={togglePersonalize}>
      <div className="personalize">
        <div className="personalize__close">
          <Close onClick={togglePersonalize} />
        </div>
        <div className="personalize__items">
          <Simplebar className="custom-scroll">
            {colorSchemes.map((color, idx) => (
              <PersonalizeItem key={idx} title={color} color={color} className="personalize__item" />
            ))}
          </Simplebar>
        </div>
      </div>
    </SidebarItem>
  );
};

Personalize.propTypes = {
  isActive: PropTypes.bool,
  togglePersonalize: PropTypes.func,
  colorSchemes: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  isActive: selectPersonalize,
  colorSchemes: selectColorSchemes
});

const mapDispatchToProps = dispatch => ({
  togglePersonalize: () => dispatch(togglePersonalize()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Personalize);
