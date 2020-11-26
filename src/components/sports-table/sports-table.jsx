import React, { useState, useEffect } from 'react';
import { withBreakpoints } from 'react-breakpoints';
// Data
import data from './data.js';
// Components
import Table from 'components/table/table';
import SportsTableHeaderA from './sports-table-header-a/sports-table-header-a';
import SportsTableHeaderB from './sports-table-header-b/sports-table-header-b';
import SportsTableHeaderC from './sports-table-header-c/sports-table-header-c';
import SportsTableLine from './sports-table-line/sports-table-line';
// Styles
import './sports-table.sass';

const SportsTable = ({ breakpoints, currentBreakpoint }) => {
  const [spreadType, setSpreadType] = useState(null);
  const [totalType, setTotalType] = useState(null);

  useEffect(() => {
    if (breakpoints[currentBreakpoint] < breakpoints.md) {
      setSpreadType('spread');
      setTotalType('total');
    } else {
      setSpreadType(null);
      setTotalType(null);
    }
  }, [breakpoints, currentBreakpoint]);

  const toggleHandler = (value, callback, values) => {
    value === values[0] ? callback(values[1]) : callback(values[0])
  };

  const toggleSpreadType = () => toggleHandler(spreadType, setSpreadType, ['spread', 'moneyline']);
  const toggleTotalType = () => toggleHandler(totalType, setTotalType, ['total', 'team total']);

  return (
    <Table className="sports-table">
      <SportsTableHeaderA setTotalType={setTotalType} toggleSpreadType={toggleSpreadType} spreadType={spreadType} toggleTotalType={toggleTotalType} totalType={totalType} />
      {data.map(({ id, day, spread, moneyLine, total, teamTotal, games }) => (
        <React.Fragment key={id}>
          <SportsTableHeaderB day={day} spread={spread} moneyLine={moneyLine} total={total} teamTotal={teamTotal} spreadType={spreadType} totalType={totalType} />
          {games.map(({ id, time, title, channel, teams }) => (
            <React.Fragment key={id}>
              <SportsTableHeaderC time={time} title={title} channel={channel} />
              <tbody>
                {teams.map(({ id, ...otherProps }, idx) => (
                  <SportsTableLine key={id} id={id} isFirst={idx === 0} spreadType={spreadType} totalType={totalType} className="sports-table__item" {...otherProps} />
                ))}
              </tbody>
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </Table>
  );
};

export default withBreakpoints(SportsTable);
