// Tables and data
import { generalLimitsTable, generalLimitsTableData } from './tables/general-limits';

const rightTableCols = (handleInput, clientData) => generalLimitsTable(handleInput, clientData);

const rightTableData = generalLimitsTableData;

export { rightTableCols, rightTableData };
