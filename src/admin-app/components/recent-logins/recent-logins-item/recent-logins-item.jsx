import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Typography from 'shared/components/typography/typography';
// Styles
import './recent-logins-item.sass';

const RecentLoginsItem = ({ date, ip, className }) => {
  const classes = classNames({
    'recent-logins-item': true,
    [className]: className,
  });

  return (
    <tr className={classes}>
      <td>
        <Typography component="p">{date}</Typography>
      </td>
      <td>
        <Typography component="p">{ip}</Typography>
      </td>
    </tr>
  );
};

RecentLoginsItem.propTypes = {
  date: PropTypes.string,
  ip: PropTypes.string,
  className: PropTypes.string,
};

export default RecentLoginsItem;
