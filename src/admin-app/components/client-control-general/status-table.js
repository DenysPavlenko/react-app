// Tables and data
import { accountStatusTable, accountStatusData } from './tables/account-status-table';
import { accountAccess, accountAccessData } from './tables/account-access-table';
import { freePlayAccess, freePlayAccessData } from './tables/free-play-access';

const statusTable = (handleInput, clientData) => {
  return [
    accountStatusTable(handleInput, clientData),
    accountAccess(handleInput, clientData),
    freePlayAccess(handleInput, clientData)
  ]
};

const statusTableData = [
  accountStatusData,
  accountAccessData,
  freePlayAccessData
];

export { statusTable, statusTableData };
