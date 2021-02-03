import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'shared/redux/color-scheme/selectors';
import { addSportsWager } from 'player-app/redux/sports-wagers/actions';
import { selectActiveSportsWagers } from 'player-app/redux/sports-wagers/selectors';
// Components
import Image from 'shared/components/image';
import Typography from 'shared/components/typography';
import SportsItem from '../sports-item';
// Styles
import './styles.sass'

const SportsLine = ({ id, isFirst, title, icon, spread, moneyline, total, teamTotalOver, teamTotalUnder, filters, colorScheme, className, isMobile, activeSportsWagers, addSportsWager }) => {
  const classes = classNames({
    'sports-line': true,
    [`theme-${colorScheme}`]: colorScheme,
    [className]: className,
  });

  const getInfoTitle = title => isMobile ? title[0] : title;
  const infoTotalTitle = isFirst ? getInfoTitle('Over') : getInfoTitle('Under');
  const getInfoPosition = x => isFirst ? { [x]: '2px', top: '2px' } : { [x]: '2px', bottom: '2px' };

  const handleItemClick = (value, name) => {
    const wager = {
      id: id + name, icon, title, value, scheduled: 'November 29, 2020 10:00 AM PST', selection: name, notes: 'Broadcast - FOX'
    }
    addSportsWager(wager);
  };

  const checkActive = name => activeSportsWagers.includes(id + name);

  const items = [
    { value: spread, info: {}, center: '', name: 'spread', filter: 'spread' },
    { value: moneyline, info: {}, center: '', name: 'moneyline', filter: 'moneyline' },
    { value: total, info: { title: infoTotalTitle, position: getInfoPosition('right') }, center: '53', name: 'total', filter: 'total' },
    { value: [teamTotalOver, teamTotalUnder], info: {}, center: ['26½', '27½'], name: '', filter: 'team total' },
  ];
  const filteredItems = filters ? items.filter(({ filter }) => filters.includes(filter)) : items;

  return (
    <div className={classes}>
      <div className="sports__group-1 sports-line__team">
        <Image src={icon} alt="icon" className="sports-line__team-icon" icon />
        <Typography component="p" variant="p-sm" className="sports-line__team-title">{title}</Typography>
      </div>
      {filteredItems.map(({ value, name, info, center }, idx) => (
        <div key={idx} className={`sports__group-${idx + 2}`}>
          {typeof value === 'object' ?
            <div className="sports-line__items">
              {(isFirst && center[0]) && <Typography component="p" variant="p-sm" className="sports-line__center">{center[0]}</Typography>}
              {(!isFirst && center[1]) && <Typography component="p" variant="p-sm" className="sports-line__center">{center[1]}</Typography>}
              <SportsItem
                info={getInfoTitle('Over')}
                colorScheme={colorScheme}
                isActive={checkActive('teamTotalOver')}
                position={getInfoPosition('left')}
                onClick={() => handleItemClick(value[0], 'teamTotalOver')}
              >
                {value[0]}
              </SportsItem>
              <SportsItem
                info={getInfoTitle('Under')}
                colorScheme={colorScheme}
                isActive={checkActive('teamTotalUnde')}
                position={getInfoPosition('right')}
                onClick={() => handleItemClick(value[1], 'teamTotalUnde')}
              >
                {value[1]}
              </SportsItem>
            </div>
            :
            <Fragment>
              {(isFirst && center) && <Typography component="p" variant="p-sm" className="sports-line__center">{center}</Typography>}
              <SportsItem
                info={info.title}
                position={info.position}
                pushTop={isFirst && center.length > 0}
                pushBottom={!isFirst && center.length > 0}
                colorScheme={colorScheme}
                isActive={checkActive(name)}
                onClick={() => handleItemClick(value, name)}
              >
                {value}
              </SportsItem>
            </Fragment>
          }
        </div>
      ))}
    </div>
  );
};

SportsItem.propTypes = {
  id: PropTypes.string,
  isFirst: PropTypes.bool,
  title: PropTypes.string,
  icon: PropTypes.string,
  spread: PropTypes.string,
  moneyline: PropTypes.string,
  total: PropTypes.string,
  teamTotalOver: PropTypes.string,
  teamTotalUnder: PropTypes.string,
  filters: PropTypes.array,
  colorScheme: PropTypes.string,
  className: PropTypes.string,
  isMobile: PropTypes.bool,
  activeSportsWagers: PropTypes.array,
  addSportsWager: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  colorScheme: selectColorScheme,
  activeSportsWagers: selectActiveSportsWagers,
});

const mapDispatchToProps = dispatch => ({
  addSportsWager: (wager) => dispatch(addSportsWager(wager))
});

export default connect(mapStateToProps, mapDispatchToProps)(SportsLine);
