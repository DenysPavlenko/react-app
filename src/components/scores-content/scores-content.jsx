import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { toggleScores, fetchScoresData } from 'redux/scores/actions';
import { selectScores } from 'redux/scores/selectors';
// Components
import Typography from 'components/typography/typography';
import Close from 'components/close/close';
import Simplebar from 'simplebar-react';
import Spinner from 'components/spinner/spinner';
import ErrorIndicator from 'components/error-indicator/error-indicator';
import ScoresGroup from 'components/scores-group/scores-group';
// Styles
import './scores-content.sass';

const ScoresContent = ({ toggleScores, fetchScoresData, scores: { loading, data, error } }) => {

  useEffect(() => {
    fetchScoresData();
  }, [fetchScoresData])

  return (
    <div className="scores-content">
      <div className="scores-content__header">
        <Close className="scores-content__header-close" onClick={toggleScores} />
        <Typography component="h2">Scoreboard</Typography>
      </div>
      <div className="scores-content__list">
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
  );
};

ScoresContent.propTypes = {
  fetchScoresData: PropTypes.func,
  toggleScores: PropTypes.func,
  scores: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  scores: selectScores,
});

const mapDispatchToProps = dispatch => ({
  toggleScores: () => dispatch(toggleScores()),
  fetchScoresData: () => dispatch(fetchScoresData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoresContent);
