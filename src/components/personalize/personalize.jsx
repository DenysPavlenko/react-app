import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { togglePersonalize } from 'redux/personalize/actions';
import { selectPersonalize } from 'redux/personalize/selectors';
// Components
import PersonalizeContent from 'components/personalize-content/personalize-content';
// Styles
import './personalize.sass';

const Personalize = ({ isActive, togglePersonalize }) => {
  return (
    <div className="personalize">
      <CSSTransition in={isActive} unmountOnExit timeout={300} classNames="personalize-overlay-animation">
        <div className="personalize__overlay" onClick={togglePersonalize}></div>
      </CSSTransition>
      <CSSTransition in={isActive} unmountOnExit timeout={300} classNames="personalize-content-animation">
        <PersonalizeContent />
      </CSSTransition>
    </div>
  );
};

Personalize.propTypes = {
  isActive: PropTypes.bool,
  togglePersonalize: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isActive: selectPersonalize,
});

const mapDispatchToProps = dispatch => ({
  togglePersonalize: () => dispatch(togglePersonalize()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Personalize);
