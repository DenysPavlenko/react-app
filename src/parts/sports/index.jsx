import React, { Fragment, useState, useEffect } from 'react';
import { withBreakpoints } from 'react-breakpoints';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Components
import SportsHeaderA from './sports-header-a';
import SportsHeaderB from './sports-header-b';
import SportsHeaderC from './sports-header-c';
import SportsHeaderD from './sports-header-d';
import SportsLine from './sports-line';
// Styles
import './styles.sass';

const Sports = ({ data: { title, icon, schedule }, breakpoints, currentBreakpoint, colorScheme }) => {
  const [filters, setFilters] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (breakpoints[currentBreakpoint] < breakpoints.md) {
      setIsMobile(true);
      setFilters(['spread', 'total'])
    } else {
      setIsMobile(false);
      setFilters(null)
    }
  }, [breakpoints, currentBreakpoint]);

  return (
    <div className="sports">
      <SportsHeaderA title={title} icon={icon} colorScheme={colorScheme} />
      <SportsHeaderB filters={filters} setFilters={setFilters} isMobile={isMobile} />

      {schedule.map(({ id, date, spread, moneyline, total, teamTotal, games }) => (
        <Fragment key={id}>
          <SportsHeaderC
            date={date}
            spread={spread}
            moneyline={moneyline}
            total={total}
            filters={filters}
            teamTotal={teamTotal}
          />

          {games.map(({ id, time, channel, teams }) => (
            <Fragment key={id}>

              <SportsHeaderD time={time} channel={channel} />

              <div className="sports__lines">
                {teams.map((data, idx) => (
                  <SportsLine
                    key={data.id}
                    isFirst={idx === 0}
                    colorScheme={colorScheme}
                    isMobile={isMobile}
                    filters={filters}
                    className="sports__line"
                    {...data}
                  />
                ))}
              </div>

            </Fragment>
          ))}

        </Fragment>

      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(withBreakpoints(Sports));
