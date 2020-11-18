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
// Styles
import './sports-table-item.sass';

const SportsTableItem = ({ icon, title, className, defaultColorScheme, currentBreakpoint }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (currentBreakpoint !== 'xxl') {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [currentBreakpoint])

  console.log('isMobile:', isMobile)

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
          <Typography component="span" variant="p-sm" className="mb-0">{title}</Typography>
        </div>
      </td>
      <td>
        {isMobile ?
          <div className="sports-table-item__button">
            <Typography component="span" variant="p-sm" className="mb-0">+3 2.00</Typography>
          </div>
          :
          <div className="sports-table-item__row">
            <div className="sports-table-item__col">
              <Select
                onChange={() => { }}
                options={[
                  { value: '+3 2.00', label: '+3 2.00' },
                  { value: '+3 1.00', label: '+3 1.00' },
                  { value: '+3 3.00', label: '+3 3.00' },
                ]}
                inline
                textSm
              />
            </div>
            <div className="sports-table-item__col">
              <Input type="number" standard="false" size="xs" noRadius />
            </div>
          </div>
        }
      </td>
      <td>
        {isMobile ?
          <div className="sports-table-item__button">
            <Typography component="span" variant="p-sm" className="mb-0">2.5</Typography>
          </div>
          :
          <div className="sports-table-item__row">
            <div className="sports-table-item__col">
              <Typography component="span" variant="p-sm" className="mb-0">2.45</Typography>
            </div>
            <div className="sports-table-item__col">
              <Input type="number" standard="false" size="xs" noRadius />
            </div>
          </div>
        }
      </td>
      <td>
        {isMobile ?
          <div className="sports-table-item__button">
            <Typography component="span" variant="p-sm" className="mb-0">-110</Typography>
          </div>
          :
          <div className="sports-table-item__row">
            <div className="sports-table-item__col">
              <Select
                onChange={() => { }}
                options={[
                  { value: 'O 57½1.91', label: 'O 57½1.91' },
                  { value: 'O 57½2.91', label: 'O 57½2.91' },
                  { value: 'O 57½3.91', label: 'O 57½3.91' },
                ]}
                inline
                textSm
              />
            </div>
            <div className="sports-table-item__col">
              <Input type="number" standard="false" size="xs" noRadius />
            </div>
          </div>
        }
      </td>
      <td>
        <div className="sports-table-item__row">
          <div className="sports-table-item__col">
            {isMobile ?
              <div className="sports-table-item__button">
                <Typography component="span" variant="p-sm" className="mb-0">1.69</Typography>
              </div>
              :
              <div className="sports-table-item__row">
                <div className="sports-table-item__col">
                  <Typography component="span" variant="p-sm" className="mb-0">O 26½ 1.69</Typography>
                </div>
                <div className="sports-table-item__col">
                  <Input type="number" standard="false" size="xs" noRadius />
                </div>
              </div>
            }
          </div>
          <div className="sports-table-item__col">
            {isMobile ?
              <div className="sports-table-item__button">
                <Typography component="span" variant="p-sm" className="mb-0">1.69</Typography>
              </div>
              :
              <div className="sports-table-item__row">
                <div className="sports-table-item__col">
                  <Typography component="span" variant="p-sm" className="mb-0">O 26½ 1.69</Typography>
                </div>
                <div className="sports-table-item__col">
                  <Input type="number" standard="false" size="xs" noRadius />
                </div>
              </div>
            }
          </div>
        </div>
      </td>
    </tr>
  );
};

SportsTableItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  defaultColorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme
});

export default connect(mapStateToProps)(withBreakpoints(SportsTableItem));
