import React, { Fragment, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchRecentLoginsData } from 'admin-app/redux/recent-logins/actions';
import { selectRecentLogins } from 'admin-app/redux/recent-logins/selectors';
// Components
import Table from 'shared/components/table/table';
import RecentLoginsTitle from './recent-logins-title/recent-logins-title';
import RecentLoginsHeader from './recent-logins-header/recent-logins-header';
import RecentLoginsItem from './recent-logins-item/recent-logins-item';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
import Spinner from 'shared/components/spinner/spinner'
// Styles
import './recent-logins.sass';

const RecentLogins = ({ fetchRecentLoginsData, recentLogins: { loading, data, error } }) => {
  useLayoutEffect(() => {
    fetchRecentLoginsData();
  }, [fetchRecentLoginsData])

  return (
    <div className="recent-logins">
      <Table>
        <RecentLoginsTitle />
        <RecentLoginsHeader />
        <thead>
          {error &&
            <tr>
              <th colSpan="2">
                <ErrorIndicator retry={fetchRecentLoginsData} light />
              </th>
            </tr>
          }
          {(!error && loading) &&
            <tr>
              <th colSpan="2">
                <Spinner boxed light />
              </th>
            </tr>
          }
          {(!error && !loading) &&
            <Fragment>
              {data.map(({ id, date, ip }) => (
                <RecentLoginsItem className="recent-logins__item" key={id} date={date} ip={ip} />
              ))}
            </Fragment>
          }
        </thead>
      </Table>
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
