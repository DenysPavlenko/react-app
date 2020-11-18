import React from 'react';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './sports-table-header-c.sass';

const SportsTableHeaderC = ({ date, title, channel }) => {
  return (
    <thead className="sports-table-header-c">
      <tr>
        <th colSpan="5">
          <div className="sports-table-header-c__wrap">
            <Typography component="span" variant="h6" className="mb-0 text-uppercase">
              <Typography component="span" className="text-accent-green">{date}</Typography>
              {title}
            </Typography>
            {channel &&
              <div className="sports-table-header-c__right">
                <FontAwesomeIcon icon="tv" className="sports-table-header-c__icon" />
                <Typography component="span" variant="h6" className="mb-0 text-uppercase">{channel}</Typography>
              </div>
            }
          </div>
        </th>
      </tr>
    </thead>
  );
};

SportsTableHeaderC.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
};

export default SportsTableHeaderC;
