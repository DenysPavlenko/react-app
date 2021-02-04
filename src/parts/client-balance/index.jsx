import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
// Redux
import { fetchClientBalanceData } from 'redux/client-balance/actions';
import { selectClientBalance } from 'redux/client-balance/selectors';
// Componets
import BalanceItem from 'components/balance-item';
// Styles
import './styles.sass';

const ClientBalance = ({ fetchClientBalanceData, clientBalance: { loading, data, error }, clientId }) => {

  useLayoutEffect(() => {
    fetchClientBalanceData(clientId);
  }, [fetchClientBalanceData, clientId]);

  return (
    <div className="client-balance">
      <div className="client-balance__item">
        <BalanceItem title="Agent" total="ZT2" noDollar />
      </div>
      <div className="client-balance__item">
        <BalanceItem title="balance" total={data && data.balance} loading={loading} error={error} />
      </div>
      <div className="client-balance__item">
        <BalanceItem title="client" total="ZT1" noDollar />
      </div>
      <div className="client-balance__item">
        <BalanceItem title="pending" total={data && data.pending} loading={loading} error={error} />
      </div>
    </div>
  );
};

ClientBalance.propTypes = {
  fetchClientBalanceData: PropTypes.func,
  clientBalance: PropTypes.object,
  clientId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clientBalance: selectClientBalance
});

const mapDispatchToProps = dispatch => ({
  fetchClientBalanceData: clientId => dispatch(fetchClientBalanceData(clientId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientBalance);
