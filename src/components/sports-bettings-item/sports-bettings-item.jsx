import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Components
import Typography from 'components/typography/typography';
import Image from 'components/image/image';
import Input from 'components/input/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './sports-bettings-item.sass'

const SportsBettingsItem = ({ className, defaultColorScheme }) => {
  const classes = classNames({
    'sports-bettings-item': true,
    [`sports-bettings-item--${defaultColorScheme}`]: defaultColorScheme,
    [className]: className
  });

  return (
    <div className={classes}>
      <div className="sports-bettings-item__header">
        <Typography component="h5" className="sports-bettings-item__header-title">NFL</Typography>
        <FontAwesomeIcon icon="chevron-down" className="sports-bettings-item__header-icon" />
      </div>
      <div className="sports-bettings-item__info">
        <div className="sports-bettings-item__team">
          <Image src="https://ssl.gstatic.com/onebox/media/sports/logos/5Mh3xcc8uAsxAi3WZvfEyQ_48x48.png" alt="icon" className="sports-bettings-item__team-icon" />
          <Typography component="h5" className="sports-bettings-item__team-title">Cardinals</Typography>
        </div>
        <Typography component="h5" className="sports-bettings-item__bet">245</Typography>
      </div>
      <div className="sports-bettings-item__details">
        <Typography component="p" variant="p-sm" className="sports-bettings-item__detail"><span>Scheduled:</span> November 29, 2020 10:00 AM PST</Typography>
        <Typography component="p" variant="p-sm" className="sports-bettings-item__detail"><span>Selection:</span> 254 - Total</Typography>
        <Typography component="p" variant="p-sm" className="sports-bettings-item__detail"><span>Game Notes:</span> Broadcast - FOX</Typography>
      </div>
      <div className="sports-bettings-item__footer">
        <Typography component="p" variant="p-sm" className="sports-bettings-item__delete">Delete</Typography>
        <div className="sports-bettings-item__inputs">
          <Input type="number" size="xs" className="sports-bettings-item__input" />
          <Typography component="p" variant="p-sm" className="sports-bettings-item__input-title">To win</Typography>
          <Input type="number" size="xs" className="sports-bettings-item__input" placeholder="Win Amount"/>
        </div>
      </div>
    </div >
  );
};


SportsBettingsItem.propTypes = {
  defaultColorScheme: PropTypes.string,
  className: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(SportsBettingsItem);
