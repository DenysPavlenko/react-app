import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { toggleScores, fetchLiveProgramData } from 'redux/scores/actions';
import { selectScoresActive, selectScores } from 'redux/scores/selectors';
// Components
import Typography from 'components/typography/typography';
import Close from 'components/close/close';
import Simplebar from 'simplebar-react';
import Spinner from 'components/spinner/spinner';
import ErrorIndicator from 'components/error-indicator/error-indicator';
import ScoresGroup from 'components/scores-group/scores-group';
// Styles
import './scores.sass';

const Scores = ({ isActive, toggleScores, fetchLiveProgramData, scores: { loading, data, error } }) => {

  useEffect(() => {
    fetchLiveProgramData();
  }, [fetchLiveProgramData])

  return (
    <div className="scores">
      <CSSTransition in={isActive} unmountOnExit timeout={300} classNames="scores-overlay-animation">
        <div className="scores__overlay" onClick={toggleScores}></div>
      </CSSTransition>
      <CSSTransition in={isActive} unmountOnExit timeout={300} classNames="scores-content-animation">
        <div className="scores__wrap">
          <div className="scores__header">
            <Close className="scores__header-close" onClick={toggleScores} />
            <Typography component="h2" className="scores__header-title">Scoreboard</Typography>
          </div>
          <div className="scores__list">
            {error && <ErrorIndicator light />}
            {(loading && !error) && <div className="scores__spinner"><Spinner className="" light /></div>}
            {(!loading && !error) &&
              <Simplebar className="custom-scroll">
                {data.map(({ id, title, scores }) => (
                  <ScoresGroup key={id} title={title} scores={scores} />
                ))}
              </Simplebar>
            }
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

Scores.propTypes = {
  isActive: PropTypes.bool,
  fetchLiveProgramData: PropTypes.func,
  scores: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  isActive: selectScoresActive,
  scores: selectScores,
});

const mapDispatchToProps = dispatch => ({
  toggleScores: () => dispatch(toggleScores()),
  fetchLiveProgramData: () => dispatch(fetchLiveProgramData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Scores);
