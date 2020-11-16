import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { togglePersonalize } from 'redux/personalize/actions';
import { selectPersonalize } from 'redux/personalize/selectors';
import { selectColorSchemes } from 'redux/color-scheme/selectors';
// Components
import PersonalizeItem from 'components/personalize-item/personalize-item';
import Close from 'components/close/close';
// Styles
import './personalize.sass';

const Personalize = ({ isActive, colorSchemes, togglePersonalize }) => {
  const classes = classNames({
    'personalize': true,
    'is-active': isActive,
  });

  return (
    <div className={classes}>
      <div className="personalize__close">
        <Close onClick={togglePersonalize} />
      </div>
      <div className="personalize__items">
        {colorSchemes.map((color, idx) => (
          <PersonalizeItem key={idx} title={color} color={color} className="personalize__item" />
        ))}
      </div>
    </div>
  );
};

Personalize.propTypes = {
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
