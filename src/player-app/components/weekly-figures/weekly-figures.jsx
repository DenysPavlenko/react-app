import React, { Fragment, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchWeeklyFiguresData } from 'player-app/redux/weekly-figures/actions';
import { selectWeeklyFigures } from 'player-app/redux/weekly-figures/selectors';
// Components
import Select from 'shared/components/select/select';
import Typography from 'shared/components/typography/typography';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
import Spinner from 'shared/components/spinner/spinner';
// Utils
import setDangerClass from 'shared/utils/set-danger-class';
// Styles
import './weekly-figures.sass';

const WeeklyFigures = ({ weeklyFigures: { loading, data, error }, fetchWeeklyFiguresData }) => {
  const [currentFigure, setCurrentFigure] = useState('0');

  useLayoutEffect(() => {
    fetchWeeklyFiguresData(currentFigure);
  }, [fetchWeeklyFiguresData, currentFigure]);

  return (
    <div className="weekly-figures">
      <Typography component="h2" className="weekly-figures__heading">Weekly figures</Typography>
      <Select
        className="weekly-figures__select"
        onChange={({ target: { value } }) => setCurrentFigure(value)}
        value={currentFigure}
        variant="primary"
        options={[
          { label: 'This week', value: '0' },
          { label: 'Last Week', value: '1' },
          { label: `2 Week's ago`, value: '2' },
          { label: `3 Week's ago`, value: '3' },
          { label: `4 Week's ago`, value: '4' },
          { label: `5 Week's ago`, value: '5' },
          { label: `6 Week's ago`, value: '6' },
          { label: `7 Week's ago`, value: '7' },
          { label: `8 Week's ago`, value: '8' },
          { label: `9 Week's ago`, value: '9' },
          { label: `10 Week's ago`, value: '10' },
          { label: `11 Week's ago`, value: '11' },
          { label: `12 Week's ago`, value: '12' },
        ]}
      />
      <div className="weekly-figures__items">
        {error && <ErrorIndicator retry={() => fetchWeeklyFiguresData(currentFigure)} light />}
        {(!error && loading) && <Spinner boxed light />}
        {(!error && !loading) &&
          <Fragment>
            {data.map(({ title, total }, idx) => (
              <div key={idx} className="weekly-figures__item">
                <Typography component="p">{title}</Typography>
                <Typography component="p" className={setDangerClass(total)}>${total}</Typography>
              </div>
            ))}
          </Fragment>
        }
      </div>
    </div>
  );
};

WeeklyFigures.propTypes = {
  weeklyFigures: PropTypes.object,
  fetchWeeklyFiguresData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  weeklyFigures: selectWeeklyFigures
});

const mapDispatchToProps = dispatch => ({
  fetchWeeklyFiguresData: (currentFigure) => dispatch(fetchWeeklyFiguresData(currentFigure))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyFigures);
