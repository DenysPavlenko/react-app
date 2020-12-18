import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchPositionTodayData } from 'admin-app/redux/position-today/actions';
import { selectPositionToday } from 'admin-app/redux/position-today/selectors';
// Components
import PrimaryTable from 'shared/components/primary-table/primary-table';
// Table content
import tableContent from './table-content';

const PositionToday = ({ fetchPositionTodayData, positionToday: { loading, data, error } }) => {

  useLayoutEffect(() => {
    fetchPositionTodayData();
  }, [fetchPositionTodayData])

  return (
    <div className="position-today">
      <PrimaryTable
        cols={tableContent()}
        loading={loading}
        data={data}
        error={error}
        retry={fetchPositionTodayData}
        variant="primary"
      />
    </div>
  );
};

PositionToday.propTypes = {
  fetchPositionTodayData: PropTypes.func,
  distribution: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  positionToday: selectPositionToday
});

const mapDispatchToProps = dispatch => ({
  fetchPositionTodayData: () => dispatch(fetchPositionTodayData())
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionToday);
