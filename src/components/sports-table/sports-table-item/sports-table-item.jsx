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
        <div>
          <Image src={icon} alt="icon" className="sports-table-item__icon" icon />
          <Typography component="span" variant="p" className="mb-0">{title}</Typography>
        </div>
      </td>
      <td>
        <div>
          <Typography component="span" variant="p" className="mb-0">+3 +100</Typography>
          <Input type="number" standard="false" size="xs" noRadius />
        </div>
      </td>
      <td>
        <div>
          <Typography component="span" variant="p" className="mb-0">+150</Typography>
          <Input type="number" standard="false" size="xs" noRadius />
        </div>
      </td>
      <td>
        <div>
          <Typography component="span" variant="p" className="mb-0">O 57½ -110</Typography>
          <Input type="number" standard="false" size="xs" noRadius />
        </div>
      </td>
      <td>
        <div>
          <div>
            <Typography component="span" variant="p" className="mb-0">O 26½ -145</Typography>
            <Input type="number" standard="false" size="xs" noRadius />
          </div>
          <div>
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
