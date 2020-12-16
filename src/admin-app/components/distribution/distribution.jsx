import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchDistributionData } from 'admin-app/redux/distribution/actions';
import { selectDistribution } from 'admin-app/redux/distribution/selectors';
// Components
import DistributionHeader from './distribution-header/distribution-header';
import PrimaryTable from 'shared/components/primary-table/primary-table';
// Table content
import tableContent from './table-content';
// Styles
import './distribution.sass';

const Distribution = ({ fetchDistributionData, distribution: { loading, data, error } }) => {
  const [date, setDate] = useState('12/7/2020');
  const [page, setPage] = useState(1);

  useLayoutEffect(() => {
    fetchDistributionData(date);
  }, [fetchDistributionData, date]);

  return (
    <div className="distribution">
      <div className="distribution__header">
        <DistributionHeader date={date} setDate={setDate} pages={10} page={page} setPage={setPage} />
      </div>
      <div className="distribution__table">
        <PrimaryTable
          cols={tableContent()}
          loading={loading}
          data={data}
          error={error}
          retry={() => fetchDistributionData()}
          variant="primary"
        />
      </div>
    </div>
  );
};

Distribution.propTypes = {
  fetchDistributionData: PropTypes.func,
  distribution: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  distribution: selectDistribution
});

const mapDispatchToProps = dispatch => ({
  fetchDistributionData: date => dispatch(fetchDistributionData(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(Distribution);
