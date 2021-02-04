import React, { Fragment, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchDistributionData } from 'redux/distribution/actions';
import { selectDistribution } from 'redux/distribution/selectors';
// Components
import ActiveCustomers from 'parts/active-customers';
import DistributionHeader from './distribution-header';
import Spinner from 'components/spinner/spinner';
import ErrorIndicator from 'components/error-indicator';
import List from 'components/list';
import Typography from 'components/typography';
import Button from 'components/button';
// Utils
import handleStatusClass from 'utils/handle-status-class';
// Styles
import './styles.sass';

const Distribution = ({ fetchDistributionData, distribution: { loading, data, error } }) => {
  const [date, setDate] = useState('12/7/2020');
  const [openModal, setOpenModal] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState('');

  useLayoutEffect(() => {
    fetchDistributionData(date);
  }, [fetchDistributionData, date]);

  const handleAgentSelect = agent => {
    setOpenModal(true);
    setSelectedAgent(agent);
  };

  return (
    <Fragment>
      <ActiveCustomers
        open={openModal}
        agent={selectedAgent}
        onClose={() => setOpenModal(false)}
        onExited={() => setSelectedAgent('')}
      />
      <div className="distribution">
        <div className="distribution__header">
          <DistributionHeader
            date={date}
            setDate={setDate}
          />
        </div>
        <div className="distribution__content">
          {error && <ErrorIndicator retry={() => fetchDistributionData(date)} light />}
          {(!error && loading) && <Spinner boxed light />}
          {(!error && !loading) &&
            <Fragment>
              {data.map(({ id, agent, customers, details }) => (
                <div className="distribution__line" key={id}>
                  <div className="distribution__line-header">
                    <Typography component="h4">{agent}</Typography>
                  </div>
                  <div className="distribution__line-lists">
                    <List className="distribution__line-list" noRadius>
                      {details.filter((_, idx) => idx < 4).map(({ id, title, value }) => (
                        <List.Item key={id} className="distribution__line-list-item">
                          <Typography component="p">{title}</Typography>
                          <Typography component="p" className={handleStatusClass(value)}>{value}</Typography>
                        </List.Item>
                      ))}
                    </List>
                    <List className="distribution__line-list" noRadius>
                      {details.filter((_, idx) => idx >= 4 && idx < 8).map(({ id, title, value }) => (
                        <List.Item key={id} className="distribution__line-list-item">
                          <Typography component="p">{title}</Typography>
                          <Typography component="p" className={handleStatusClass(value)}>{value}</Typography>
                        </List.Item>
                      ))}
                    </List>
                    <List className="distribution__line-list" noRadius>
                      {details.filter((_, idx) => idx >= 8).map(({ id, title, value }) => (
                        <List.Item key={id} className="distribution__line-list-item">
                          <Typography component="p">{title}</Typography>
                          <Typography component="p" className={handleStatusClass(value)}>{value}</Typography>
                        </List.Item>
                      ))}
                    </List>
                  </div>
                  <div className="distribution__line-footer">
                    <Typography component="h4" className="text-bold distribution__line-footer-title">Active:</Typography>
                    <Button
                      variant="accent-blue"
                      size="xs"
                      disabled={parseInt(customers) === 0}
                      onClick={() => parseInt(customers) && handleAgentSelect(agent)}
                    >
                      {customers}
                    </Button>
                  </div>
                </div>
              ))}
            </Fragment>
          }
        </div>
      </div>
    </Fragment>
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
