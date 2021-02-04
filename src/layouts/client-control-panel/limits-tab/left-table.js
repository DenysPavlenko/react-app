// Tables and data
import { limitsTable, limitsTableData } from './tables/limits-table';
import { restrictionsTable, restrictionsTableData } from './tables/restrictions-table';

const leftTableRows = (handleInput, clientData) => {
  return [
    limitsTable(handleInput, clientData),
    restrictionsTable(handleInput, clientData)
  ]
};

const leftTableData = [
  limitsTableData,
  restrictionsTableData
];

export { leftTableRows, leftTableData };
