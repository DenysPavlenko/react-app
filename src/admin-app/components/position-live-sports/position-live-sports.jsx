import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchPositionLiveSportsData } from 'admin-app/redux/position-live-sports/actions';
import { selectPositionLiveSports } from 'admin-app/redux/position-live-sports/selectors';
// Components
import PrimaryTable from 'shared/components/primary-table/primary-table';
// Table content
import tableContent from './table-content';

const PositionLiveSports = ({ fetchPositionLiveSportsData, positionLiveSports: { loading, data, error } }) => {

  useLayoutEffect(() => {
    fetchPositionLiveSportsData();
  }, [fetchPositionLiveSportsData])

  return (
    <div className="position-live-sports">
      <PrimaryTable
        cols={tableContent()}
        loading={loading}
        data={data}
        error={error}
        retry={fetchPositionLiveSportsData}
        variant="primary"
      />
    </div>
  );
};

PositionLiveSports.propTypes = {
  fetchPositionLiveSportsData: PropTypes.func,
  distribution: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  positionLiveSports: selectPositionLiveSports
});

const mapDispatchToProps = dispatch => ({
  fetchPositionLiveSportsData: () => dispatch(fetchPositionLiveSportsData())
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionLiveSports);
