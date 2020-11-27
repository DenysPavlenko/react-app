import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { toggleScores, fetchLiveProgramData } from 'redux/scores/actions';
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

const ScoresContent = ({ toggleScores, fetchLiveProgramData, scores: { loading, data, error } }) => {

  useEffect(() => {
    fetchLiveProgramData();
  }, [fetchLiveProgramData])

  return (
    <div className="scores-content">
      <div className="scores-content__header">
        <Close className="scores-content__header-close" onClick={toggleScores} />
        <Typography component="h2">Scoreboard</Typography>
      </div>
      <div className="scores-content__list">
        {error && <ErrorIndicator light retry={fetchLiveProgramData} />}
        {(loading && !error) && <div className="scores-content__spinner"><Spinner className="" light /></div>}
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
  fetchLiveProgramData: PropTypes.func,
  toggleScores: PropTypes.func,
  scores: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  scores: selectScores,
});

const mapDispatchToProps = dispatch => ({
  toggleScores: () => dispatch(toggleScores()),
  fetchLiveProgramData: () => dispatch(fetchLiveProgramData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoresContent);
