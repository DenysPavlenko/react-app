import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchRecentLoginsData } from 'admin-app/redux/recent-logins/actions';
import { selectRecentLogins } from 'admin-app/redux/recent-logins/selectors';
// Components
import CustomTable from 'admin-app/components/custom-table/custom-table';
import Typography from 'shared/components/typography/typography';
// Table constants
import tableConstants from './table-constants';
// Styles
import './recent-logins.sass';

const RecentLogins = ({ fetchRecentLoginsData, recentLogins: { loading, data, error } }) => {
  useLayoutEffect(() => {
    fetchRecentLoginsData();
  }, [fetchRecentLoginsData]);

  return (
    <div className="recent-logins">
      <div className="recent-logins__heading">
        <Typography component="h2">Recent logins</Typography>
      </div>

      <CustomTable cols={tableConstants()} loading={loading} data={data} error={error} retry={fetchRecentLoginsData} />

    </div>
  );
};

RecentLogins.propTypes = {
  fetchRecentLoginsData: PropTypes.func,
  recentLogins: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  recentLogins: selectRecentLogins
});

const mapDispatchToProps = dispatch => ({
  fetchRecentLoginsData: () => dispatch(fetchRecentLoginsData())
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentLogins);
