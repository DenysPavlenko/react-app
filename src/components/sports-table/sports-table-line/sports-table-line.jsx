import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
import { addSportsWager } from 'redux/sports-wagers/actions';
import { selectActiveSportsWagers } from 'redux/sports-wagers/selectors';
// Components
import Image from 'components/image/image';
import Typography from 'components/typography/typography';
import SportsTableItem from '../sports-table-item/sports-table-item';
// Styles
import './sports-table-line.sass';

const SportsTableLine = ({ id, title, icon, spread, moneyLine, total, teamTotalFirst, teamTotalLast, isFirst, defaultColorScheme, spreadType, totalType, className, addSportsWager, activeSportsWagers }) => {
  const classes = classNames({
    'sports-table-line': true,
    [`theme-${defaultColorScheme}`]: defaultColorScheme,
    [className]: className,
  });

  const handleItemClick = (value, selection) => {
    const wager = {
      id: id + selection, icon, title, value, scheduled: 'November 29, 2020 10:00 AM PST', selection, notes: 'Broadcast - FOX'
    }
    addSportsWager(wager);
  };

  return (
    <tr className={classes}>
      <td>
        <div className="sports-table-line__team">
          <Image src={icon} alt="icon" className="sports-table-line__team-icon" icon />
          <Typography component="p" variant="p-sm" className="sports-table-line__team-title">{title}</Typography>
        </div>
      </td>
      {(!spreadType || (spreadType === 'spread' && totalType !== 'team total')) &&
        <td>
          <SportsTableItem value={spread} selection="spread" handleItemClick={handleItemClick} isActive={activeSportsWagers.includes(id + 'spread')} />
        </td>
      }
      {(!spreadType || (spreadType === 'moneyline' && totalType !== 'team total')) &&
        <td>
          <SportsTableItem value={moneyLine} selection="moneyLine" handleItemClick={handleItemClick} isActive={activeSportsWagers.includes(id + 'moneyLine')} />
        </td>
      }
      {(!totalType || totalType === 'total') &&
        <td>
          <SportsTableItem value={total.value} info={total.type} infoPosition={isFirst ? 'top' : 'bottom'} selection="total" handleItemClick={handleItemClick} isActive={activeSportsWagers.includes(id + 'total')} />
        </td>
      }
      {(!totalType || totalType === 'team total') &&
        <td>
          <div className="sports-table-line__row">
            <div className="sports-table-line__col">
              <SportsTableItem value={teamTotalFirst.value} info={teamTotalFirst.type} infoPosition={isFirst ? 'top' : 'bottom'} infoLeft selection="teamTotalFirst" handleItemClick={handleItemClick} isActive={activeSportsWagers.includes(id + 'teamTotalFirst')} />
            </div>
            <div className="sports-table-line__col">
              <SportsTableItem value={teamTotalLast.value} info={teamTotalLast.type} infoPosition={isFirst ? 'top' : 'bottom'} selection="teamTotalLast" handleItemClick={handleItemClick} isActive={activeSportsWagers.includes(id + 'teamTotalLast')} />
            </div>
          </div>
        </td>
      }
    </tr>
  );
};

SportsTableLine.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  spread: PropTypes.string,
  moneyLine: PropTypes.string,
  total: PropTypes.object,
  teamTotalFirst: PropTypes.object,
  teamTotalLast: PropTypes.object,
  isFirst: PropTypes.bool,
  spreadType: PropTypes.string,
  totalType: PropTypes.string,
  className: PropTypes.string,
  defaultColorScheme: PropTypes.string,
  addSportsWager: PropTypes.func,
  activeSportsWagers: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
  activeSportsWagers: selectActiveSportsWagers,
});

const mapDispatchToProps = dispatch => ({
  addSportsWager: (wager) => dispatch(addSportsWager(wager))
});

export default connect(mapStateToProps, mapDispatchToProps)(SportsTableLine);
