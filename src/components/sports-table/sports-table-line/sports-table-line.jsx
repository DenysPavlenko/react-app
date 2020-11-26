import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Components
import Image from 'components/image/image';
import Typography from 'components/typography/typography';
import SportsTableItem from '../sports-table-item/sports-table-item';
// Styles
import './sports-table-line.sass';

const SportsTableLine = ({ id, title, icon, spread, moneyLine, total, teamTotalFirst, teamTotalLast, isFirst, defaultColorScheme, spreadType, totalType, className }) => {

  const classes = classNames({
    'sports-table-line': true,
    [`sports-table-line--${defaultColorScheme}`]: defaultColorScheme,
    [className]: className,
  });

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
          <SportsTableItem title={spread} />
        </td>
      }
      {(!spreadType || (spreadType === 'moneyline' && totalType !== 'team total')) &&
        <td>
          <SportsTableItem title={moneyLine} />
        </td>
      }
      {(!totalType || totalType === 'total') &&
        <td>
          <SportsTableItem title={total.value} info={total.type} infoPosition={isFirst ? 'top' : 'bottom'} />
        </td>
      }
      {(!totalType || totalType === 'team total') &&
        <td>
          <div className="sports-table-line__row">
            <div className="sports-table-line__col">
              <SportsTableItem title={teamTotalFirst.value} info={teamTotalFirst.type} infoPosition={isFirst ? 'top' : 'bottom'} infoLeft />
            </div>
            <div className="sports-table-line__col">
              <SportsTableItem title={teamTotalLast.value} info={teamTotalLast.type} infoPosition={isFirst ? 'top' : 'bottom'} />
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
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme
});

export default connect(mapStateToProps)(SportsTableLine);
