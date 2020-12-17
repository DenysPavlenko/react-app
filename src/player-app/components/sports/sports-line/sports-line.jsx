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
import Image from 'shared/components/image/image';
import Typography from 'shared/components/typography/typography';
import SportsItem from '../sports-item/sports-item';
// Styles
import './sports-line.sass'

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
    [
      { value: teamTotalOver, info: { title: getInfoTitle('Over'), position: getInfoPosition('left') }, center: '26½', name: 'teamTotalOver', filter: 'team total' },
      { value: teamTotalUnder, info: { title: getInfoTitle('Under'), position: getInfoPosition('right') }, center: '27½', name: 'teamTotalUnder', filter: 'team total' },
    ]
  ];

  const filteredItems = filters ? items.filter(({ name }) => filters.includes(name)) : items;

  return (
    <div className={classes}>
      <div className="sports__group-1 sports-line__team">
        <Image src={icon} alt="icon" className="sports-line__team-icon" icon />
        <Typography component="p" variant="p-sm" className="sports-line__team-title">{title}</Typography>
      </div>
      {filteredItems.map((item, idx) => (
        <div key={idx} className={`sports__group-${idx + 2}`}>
          {item.length ?
            <div className="sports-line__items">
              {item.map(({ value, name, info, center }, idx) => (
                <Fragment key={idx}>
                  {center && <Typography component="p" variant="p-sm" className="sports-line__center">{center}</Typography>}
                  <SportsItem key={idx}
                    info={info.title}
                    colorScheme={colorScheme}
                    isActive={checkActive(name)}
                    position={info.position}
                    onClick={() => handleItemClick(value, name)}
                  >
                    {value}
                  </SportsItem>
                </Fragment>
              ))}
            </div>
            :
            <Fragment>
              {(isFirst && item.center) && <Typography component="p" variant="p-sm" className="sports-line__center">{item.center}</Typography>}
              <SportsItem
                info={item.info.title}
                position={item.info.position}
                pushTop={isFirst && item.center.length > 0}
                pushBottom={!isFirst && item.center.length > 0}
                colorScheme={colorScheme}
                isActive={checkActive(item.name)}
                onClick={() => handleItemClick(item.value, item.name)}
              >
                {item.value}
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
