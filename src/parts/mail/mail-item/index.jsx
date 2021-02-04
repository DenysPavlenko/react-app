import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Checkbox from 'components/checkbox';
import Typography from 'components/typography';
// Styles
import './styles.sass';

const MailItem = ({ id, date, from, text, className, handleOpen, handleCheck, checked }) => {
  const classes = classNames({
    'mail-item': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <div className="mail-item__letter">
        <Typography component="h4">A</Typography>
      </div>
      <div className="mail-item__content">
        <Checkbox className="mail-item__check" onChange={() => { handleCheck(id) }} checked={checked} variant="light" />
        <div className="mail-item__details" onClick={() => handleOpen(id)}>
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
  text: PropTypes.string,
  className: PropTypes.string,
};

export default MailItem;
