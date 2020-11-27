import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { togglePersonalize } from 'redux/personalize/actions';
import { selectColorSchemes } from 'redux/color-scheme/selectors';
// Components
import PersonalizeItem from 'components/personalize-item/personalize-item';
import Simplebar from 'simplebar-react';
import Close from 'components/close/close';
// Styles
import './personalize-content.sass';

const Personalize = ({ colorSchemes, togglePersonalize }) => {
  const classes = classNames({
    'personalize-content': true,
  });

  return (
    <div className={classes}>
      <div className="personalize-content__close">
        <Close onClick={togglePersonalize} />
      </div>
      <div className="personalize-content__items">
        <Simplebar className="custom-scroll">
          {colorSchemes.map((color, idx) => (
            <PersonalizeItem key={idx} title={color} color={color} className="personalize-content__item" />
          ))}
        </Simplebar>
      </div>
    </div>
  );
};

Personalize.propTypes = {
  togglePersonalize: PropTypes.func,
  colorSchemes: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  colorSchemes: selectColorSchemes
});

const mapDispatchToProps = dispatch => ({
  togglePersonalize: () => dispatch(togglePersonalize()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Personalize);
