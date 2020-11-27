import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Checkbox from 'components/checkbox/checkbox';
import Typography from 'components/typography/typography';
// Styles
import './mail-item.sass';

const MailItem = ({ id, date, from, to, text, className }) => {
  const classes = classNames({
    'mail-item': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <div className="mail-item__left">
        <Typography component="h4">A</Typography>
      </div>
      <div className="mail-item__center">
        <Checkbox className="mail-item__check" onChange={() => { }} variant="light" />
        <div className="mail-item__details">
          <Typography component="h5" className="mail-item__name">{from}</Typography>
          <Typography component="p" variant="p-sm" className="mail-item__text">{text}</Typography>
        </div>
      </div>
      <Typography className="mail-item__date" component="p" variant="p-xs">{date}</Typography>
    </div>
  );
};

MailItem.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default MailItem;
