import React from 'react';
// Data
import data from './data.js';
// Components
import Table from 'components/table/table';
import Typography from 'components/typography/typography';
import PendingWagersHeader from './pending-wagers-header/pending-wagers-header';
import PendingWagersItem from './pending-wagers-item/pending-wagers-item';
// Styles
import './pending-wagers.sass';

const PendingWagers = () => {
  const totalRisk = data.reduce((acc, item) => acc + parseInt(item.risk), 0);
  const totalWin = data.reduce((acc, item) => acc + parseInt(item.toWin), 0);
  console.log('totalRisk:', totalRisk)
  return (
    <div className="pending-wagers">
      <Typography component="h2" className="pending-wagers__heading">Pending wagers</Typography>
      <div className="pending-wagers__table-wrap">
        <Table className="pending-wagers__table">
          <PendingWagersHeader />
          <tbody>
            {data.map((props) => (
              <PendingWagersItem className="pending-wagers__table-item" key={props.id}  {...props} />
            ))}
          </tbody>
        </Table>
      </div>
      <div className="pending-wagers__footer">
        <Typography component="h5" className="pending-wagers__footer-title">Total Risk:
          <Typography component="span" className="text-danger"> ${totalRisk}</Typography>
        </Typography>
        <Typography component="h5" className="pending-wagers__footer-title">Total Win:
          <Typography component="span" className="text-danger"> ${totalWin}</Typography>
        </Typography>
      </div>
    </div>
  );
};

export default PendingWagers;
