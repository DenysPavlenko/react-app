import React, { useState, useEffect } from 'react';
import { withBreakpoints } from 'react-breakpoints';
// Components
import SportsTableHeaderA from './sports-table-header-a/sports-table-header-a';
import SportsTableHeaderB from './sports-table-header-b/sports-table-header-b';
import SportsTableHeaderC from './sports-table-header-c/sports-table-header-c';
import SportsTableItem from './sports-table-item/sports-table-item';
// Styles
import './sports-table.sass';
// Assets
import ArizonaCardianls from 'assets/images/team-logos/Arizona-Cardinals.png';
import SeattleSeahawks from 'assets/images/team-logos/Seattle-Seahawks.png';
import PhiladelphiaEagles from 'assets/images/team-logos/Philadelphia-Eagles.png';
import ClevelandBrowns from 'assets/images/team-logos/Cleveland-Browns.png';

const table = [
  {
    id: '1', day: 'thursday 11/19', spread: '50,000', moneyLine: '20,000', total: '20,000', teamTotal: '5,000', time: '05:20 PM PST', title: 'broadcast - fox', channel: 'fox', teams: [
      { id: '1', icon: ArizonaCardianls, title: 'Arizona Cardinals' },
      { id: '2', icon: SeattleSeahawks, title: 'Seattle Seahawks' },
    ]
  },
  {
    id: '2', day: 'sunday 11/22', spread: '50,000', moneyLine: '20,000', total: '20,000', teamTotal: '5,000', time: '05:20 PM PST', title: 'broadcast - fox', channel: 'fox', teams: [
      { id: '1', icon: PhiladelphiaEagles, title: 'Philadelphia Eagles' },
      { id: '2', icon: ClevelandBrowns, title: 'Cleveland Browns' },
    ]
  },
];

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
    <table className="sports-table">
      <SportsTableHeaderA setTotalType={setTotalType} toggleSpreadType={toggleSpreadType} spreadType={spreadType} toggleTotalType={toggleTotalType} totalType={totalType} />
      {table.map((data) => {
        const { id, day, spread, moneyLine, total, teamTotal, time, title, channel, teams } = data;
        return (
          <React.Fragment key={id}>
            <SportsTableHeaderB day={day} spread={spread} moneyLine={moneyLine} total={total} teamTotal={teamTotal} spreadType={spreadType} totalType={totalType} />
            <SportsTableHeaderC time={time} title={title} channel={channel} />
            <tbody>
              {teams.map(({ id, icon, title }) => (
                <SportsTableItem spreadType={spreadType} totalType={totalType} className="sports-table__item" key={id} icon={icon} title={title} />
              ))}
            </tbody>
          </React.Fragment>
        )
      })}
    </table >
  );
};

export default withBreakpoints(SportsTable);
