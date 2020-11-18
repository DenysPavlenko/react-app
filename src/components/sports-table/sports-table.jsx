import React from 'react';
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
    id: '1', day: 'thursday 11/19', spread: '50,000', moneyLine: '20,000', total: '20,000', teamTotal: '5,000', time: '05:20 PM PST', title: 'broadcast - fox', channel: 'fox', info: [
      { id: '1', icon: ArizonaCardianls, title: 'Arizona Cardinals' },
      { id: '2', icon: SeattleSeahawks, title: 'Seattle Seahawks' },
    ]
  },
  {
    id: '2', day: 'sunday 11/22', spread: '50,000', moneyLine: '20,000', total: '20,000', teamTotal: '5,000', time: '05:20 PM PST', title: 'broadcast - fox', channel: 'fox', info: [
      { id: '1', icon: PhiladelphiaEagles, title: 'Philadelphia Eagles' },
      { id: '2', icon: ClevelandBrowns, title: 'Cleveland Browns' },
    ]
  },
];

const SportsTable = () => {
  return (
    <table className="sports-table">
      <SportsTableHeaderA />
      {table.map((data) => {
        const { id, day, spread, moneyLine, total, teamTotal, time, title, channel, info } = data;
        return (
          <React.Fragment key={id}>
            <SportsTableHeaderB day={day} spread={spread} moneyLine={moneyLine} total={total} teamTotal={teamTotal} />
            <SportsTableHeaderC time={time} title={title} channel={channel} />
            <tbody>
              {info.map(({ id, icon, title }) => (
                <SportsTableItem className="sports-table__item" key={id} icon={icon} title={title} />
              ))}
            </tbody>
          </React.Fragment>
        )
      })}
    </table >
  );
};

export default SportsTable;
