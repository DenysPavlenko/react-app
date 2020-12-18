import React, { Fragment, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchDistributionData } from 'admin-app/redux/distribution/actions';
import { selectDistribution } from 'admin-app/redux/distribution/selectors';
// Components
import DistributionHeader from './distribution-header/distribution-header';
import Spinner from 'shared/components/spinner/spinner';
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
import List from 'shared/components/list/list';
import Typography from 'shared/components/typography/typography';
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
      <div className="distribution__content">
        {error && <ErrorIndicator retry={() => fetchDistributionData(date)} light />}
        {(!error && loading) && <Spinner boxed light />}
        {(!error && !loading) &&
          <Fragment>
            {data.map(({ col1, col2, col3, id, name }) => (
              <Fragment key={id}>
                <div className="distribution__content-header">
                  <Typography component="h4">{name}</Typography>
                </div>
                <div className="distribution__lists">
                  <List className="distribution__list" noRadius>
                    {col1.map(({ id, title, value }) => (
                      <List.Item key={id} className="distribution__list-item">
                        <Typography component="p">{title}</Typography>
                        <Typography component="p">{value}</Typography>
                      </List.Item>
                    ))}
                  </List>
                  <List className="distribution__list" noRadius>
                    {col2.map(({ id, title, value }) => (
                      <List.Item key={id} className="distribution__list-item">
                        <Typography component="p">{title}</Typography>
                        <Typography component="p">{value}</Typography>
                      </List.Item>
                    ))}
                  </List>
                  <List className="distribution__list" noRadius>
                    {col3.map(({ id, title, value }) => (
                      <List.Item key={id} className="distribution__list-item">
                        <Typography component="p">{title}</Typography>
                        <Typography component="p">{value}</Typography>
                      </List.Item>
                    ))}
                  </List>
                </div>
              </Fragment>
            ))}
          </Fragment>
        }
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
