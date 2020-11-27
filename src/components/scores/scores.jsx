import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { toggleScores, fetchLiveProgramData } from 'redux/scores/actions';
import { selectScoresActive, selectScores } from 'redux/scores/selectors';
// Components
import ScoresContent from 'components/scores-content/scores-content';
// Styles
import './scores.sass';

const Scores = ({ isActive, toggleScores }) => {
  return (
    <div className="scores">
      <CSSTransition in={isActive} unmountOnExit timeout={300} classNames="scores-overlay-animation">
        <div className="scores__overlay" onClick={toggleScores}></div>
      </CSSTransition>
      <CSSTransition in={isActive} unmountOnExit timeout={300} classNames="scores-content-animation">
        <ScoresContent />
      </CSSTransition>
    </div>
  );
};

Scores.propTypes = {
  isActive: PropTypes.bool,
  scores: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  isActive: selectScoresActive,
  scores: selectScores,
});

const mapDispatchToProps = dispatch => ({
  toggleScores: () => dispatch(toggleScores()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Scores);
