import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchRecentLoginsData } from 'redux/recent-logins/actions';
import { selectRecentLogins } from 'redux/recent-logins/selectors';
// Components
import PrimaryTable from 'components/primary-table';
import Typography from 'components/typography';
// Table content
import tableContent from './table-content';
// Styles
import './styles.sass';

const RecentLogins = ({ fetchRecentLoginsData, recentLogins: { loading, data, error } }) => {
  useLayoutEffect(() => {
    fetchRecentLoginsData();
  }, [fetchRecentLoginsData]);

  return (
    <div className="recent-logins">
      <div className="recent-logins__heading">
        <Typography component="h2">Recent logins</Typography>
      </div>
      <PrimaryTable
        cols={tableContent()}
        loading={loading}
        data={data}
        error={error}
        retry={fetchRecentLoginsData}
      />
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
