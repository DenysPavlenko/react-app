import React, { useState, useEffect } from 'react';
import { withBreakpoints } from 'react-breakpoints';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Components
import Image from 'components/image/image';
import Input from 'components/input/input';
import Select from 'components/select/select';
import Typography from 'components/typography/typography';
import SportsTableItemButton from '../sports-table-item-button/sports-table-item-button';
// Styles
import './sports-table-item.sass';

const SportsTableItem = ({ icon, title, className, defaultColorScheme, breakpoints, currentBreakpoint, spreadType, totalType }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (breakpoints[currentBreakpoint] < breakpoints.xxl) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [breakpoints, currentBreakpoint]);

  const classes = classNames({
    'sports-table-item': true,
    [`sports-table-item--${defaultColorScheme}`]: defaultColorScheme,
    [className]: className,
  });

  return (
    <tr className={classes}>
      <td>
        <div className="sports-table-item__team">
          <Image src={icon} alt="icon" className="sports-table-item__team-icon" icon />
          <Typography component="span" variant="p-sm">{title}</Typography>
        </div>
      </td>
      {(!spreadType || (spreadType === 'spread' && totalType !== 'team total')) &&
        <td>
          {isMobile ?
            <SportsTableItemButton title="+3 200" />
            :
            <div className="sports-table-item__wrap">
              <Select
                className="sports-table-item__value"
                onChange={() => { }}
                options={[
                  { value: '+3 200', label: '+3 200' },
                  { value: '+3 100', label: '+3 100' },
                  { value: '+3 300', label: '+3 300' },
                ]}
                inline
                textSm
              />
              <Input type="number" className="sports-table-item__input" standard="false" size="xs" noRadius />
            </div>
          }
        </td>
      }
      {(!spreadType || (spreadType === 'moneyline' && totalType !== 'team total')) &&
        <td>
          {isMobile ?
            <SportsTableItemButton title="245" />
            :
            <div className="sports-table-item__wrap">
              <Typography component="span" variant="p-sm" className="sports-table-item__value">245</Typography>
              <Input type="number" standard="false" size="xs" noRadius className="sports-table-item__input" />
            </div>
          }
        </td>
      }
      {
        (!totalType || totalType === 'total') &&
        <td>
          {isMobile ?
            <SportsTableItemButton title="-110" />
            :
            <div className="sports-table-item__row">
              <Select
                className="sports-table-item__value"
                onChange={() => { }}
                options={[
                  { value: 'O 57½ 191', label: 'O 57½ 191' },
                  { value: 'O 57½ 291', label: 'O 57½ 291' },
                  { value: 'O 57½ 391', label: 'O 57½ 391' },
                ]}
                inline
                textSm
              />
              <Input type="number" standard="false" size="xs" noRadius className="sports-table-item__input" />
            </div>
          }
        </td>
      }
      {
        (!totalType || totalType === 'team total') &&
        <td>
          <div className="sports-table-item__row">
            <div className="sports-table-item__col">
              {isMobile ?
                <SportsTableItemButton title="169" />
                :
                <div className="sports-table-item__row">
                  <Typography component="span" variant="p-sm" className="sports-table-item__value">O 26½ 169</Typography>
                  <Input type="number" standard="false" size="xs" noRadius className="sports-table-item__input" />
                </div>
              }
            </div>
            <div className="sports-table-item__col">
              {isMobile ?
                <SportsTableItemButton title="169" />
                :
                <div className="sports-table-item__row">
                  <Typography component="span" variant="p-sm" className="sports-table-item__value">O 26½ 169</Typography>
                  <Input type="number" standard="false" size="xs" noRadius className="sports-table-item__input" />
                </div>
              }
            </div>
          </div>
        </td>
      }
    </tr >
  );
};

SportsTableItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  defaultColorScheme: PropTypes.string,
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme
});

export default connect(mapStateToProps)(withBreakpoints(SportsTableItem));
