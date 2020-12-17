import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { toggleScores, fetchScoresData } from 'player-app/redux/scores/actions';
import { selectScoresActive, selectScores } from 'player-app/redux/scores/selectors';
// Components
import SidebarItem from 'shared/components/sidebar-item/sidebar-item';
import Typography from 'shared/components/typography/typography';
import Close from 'shared/components/close/close';
import Simplebar from 'simplebar-react';
import Spinner from 'shared/components/spinner/spinner';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
import ScoresGroup from 'player-app/components/scores-group/scores-group';
// Styles
import './scores.sass';

const Scores = ({ isActive, toggleScores, fetchScoresData, scores: { loading, data, error } }) => {

  useLayoutEffect(() => {
    isActive && fetchScoresData();
  }, [isActive, fetchScoresData]);

  return (
    <SidebarItem isActive={isActive} toggle={toggleScores}>
      <div className="scores">
        <div className="scores__header">
          <Close className="scores__header-close" onClick={toggleScores} />
          <Typography component="h2">Scoreboard</Typography>
        </div>
        <div className="scores__list">
          {error && <ErrorIndicator light retry={fetchScoresData} />}
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
  fetchScoresData: PropTypes.func,
  toggleScores: PropTypes.func,
  scores: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  isActive: selectScoresActive,
  scores: selectScores,
});

const mapDispatchToProps = dispatch => ({
  toggleScores: () => dispatch(toggleScores()),
  fetchScoresData: () => dispatch(fetchScoresData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Scores);
