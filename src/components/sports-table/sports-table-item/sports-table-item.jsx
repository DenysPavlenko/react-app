import React from 'react';
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

const SportsTableItem = ({ icon, title, className, defaultColorScheme }) => {
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
          <Typography component="span" variant="p" className="mb-0">{title}</Typography>
        </div>
      </td>
      <td>
        <div className="sports-table-item__row">
          <Select
            onChange={() => { }}
            options={[
              { value: '+3 +100', label: '+3 +100' },
              { value: '+4 +100', label: '+4 +100' },
              { value: '+5 +100', label: '+5 +100' },
            ]}
            inline
          />
          <Input type="number" standard="false" size="xs" noRadius />
        </div>
      </td>
      <td>
        <div className="sports-table-item__row">
          <Typography component="span" variant="p" className="mb-0">+150</Typography>
          <Input type="number" standard="false" size="xs" noRadius />
        </div>
      </td>
      <td>
        <div className="sports-table-item__row">
          <Select
            onChange={() => { }}
            options={[
              { value: 'O 57½ -110', label: 'O 57½ -110' },
              { value: 'O 57 -120', label: 'O 57 -120' },
              { value: 'O 55½ -110', label: 'O 55½ -110' },
            ]}
            inline
          />
          <Input type="number" standard="false" size="xs" noRadius />
        </div>
      </td>
      <td>
        <div className="sports-table-item__row">
          <div className="sports-table-item__col">
            <Typography component="span" variant="p" className="mb-0">O 26½ -145</Typography>
            <Input type="number" standard="false" size="xs" noRadius />
          </div>
          <div className="sports-table-item__col">
            <Typography component="span" variant="p" className="mb-0">O 26½ -145</Typography>
            <Input type="number" standard="false" size="xs" noRadius />
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

export default connect(mapStateToProps)(SportsTableItem);
