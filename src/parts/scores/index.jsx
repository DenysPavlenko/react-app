import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { toggleScores, scoresRequested } from 'redux/scores/actions';
import { selectScoresActive, selectScores } from 'redux/scores/selectors';
// Components
import SidebarItem from 'components/sidebar-item';
import Typography from 'components/typography';
import Close from 'components/close';
import Simplebar from 'simplebar-react';
import Spinner from 'components/spinner/spinner';
import ErrorIndicator from 'components/error-indicator';
import ScoresGroup from 'components/scores-group';
// Styles
import './styles.sass';

const Scores = ({ isActive, toggleScores, scoresRequested, scores: { loading, data, error } }) => {

  useLayoutEffect(() => {
    isActive && scoresRequested();
  }, [isActive, scoresRequested]);

  return (
    <SidebarItem isActive={isActive} toggle={toggleScores}>
      <div className="scores">
        <div className="scores__header">
          <Close className="scores__header-close" onClick={toggleScores} />
          <Typography component="h2">Scoreboard</Typography>
        </div>
        <div className="scores__list">
          {error && <ErrorIndicator light retry={scoresRequested} />}
          {(loading && !error) && <Spinner light boxed />}
          {(!loading && !error) &&
            <Simplebar className="custom-scroll">
              {data.map(({ id, title, scores }) => (
                <ScoresGroup key={id} title={title} scores={scores} />
              ))}
            </Simplebar>
          }
        </div>
      </div>
    </SidebarItem>
  );
};

Scores.propTypes = {
  isActive: PropTypes.bool,
  scoresRequested: PropTypes.func,
  toggleScores: PropTypes.func,
  scores: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  isActive: selectScoresActive,
  scores: selectScores,
});

const mapDispatchToProps = {
  toggleScores,
  scoresRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(Scores);
