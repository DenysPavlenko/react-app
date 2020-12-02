import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Components
import Typography from 'components/typography/typography';
// Styles
import './pending-wagers-item.sass';

const PendingWagersItem = ({ id, date, description, result, risk, toWin, details, className, defaultColorScheme }) => {
  const [showDetails, setShowDetails] = useState(false);

  const classes = classNames({
    'pending-wagers-item': true,
    [className]: className,
    [`theme-${defaultColorScheme}`]: defaultColorScheme,
  });

  return (
    <tr className={classes} onClick={() => setShowDetails(showDetails => !showDetails)}>
      <td>
        <Typography component="p" variant="p-sm" className="text-alt-gray">{date}</Typography>
        <Typography component="p" variant="p-sm" className="text-accent-blue">{id}</Typography>
      </td>
      <td>
        <Typography component="p" variant="p">{description} {result}</Typography>
        {showDetails &&
          <div className="pending-wagers-item__details">
            <div className="pending-wagers-item__detail">
              <Typography component="p" className="pending-wagers-item__detail-title">Ticket#</Typography>
              <Typography component="p">{details.ticket}</Typography>
            </div>
            <div className="pending-wagers-item__detail">
              <Typography component="p" className="pending-wagers-item__detail-title">Status</Typography>
              <Typography component="p">{details.status}</Typography>
            </div>
            <div className="pending-wagers-item__detail">
              <Typography component="p" className="pending-wagers-item__detail-title">Risk/Win</Typography>
              <Typography component="p">{details.riskWin}</Typography>
            </div>
            <div className="pending-wagers-item__detail">
              <Typography component="p" className="pending-wagers-item__detail-title">Game</Typography>
              <Typography component="p">{details.game}</Typography>
            </div>
            <div className="pending-wagers-item__detail">
              <Typography component="p" className="pending-wagers-item__detail-title">Selection</Typography>
              <Typography component="p">{details.selection}</Typography>
            </div>
            <div className="pending-wagers-item__detail">
              <Typography component="p" className="pending-wagers-item__detail-title">Scheduled</Typography>
              <Typography component="p">{details.scheduled}</Typography>
            </div>
            <div className="pending-wagers-item__detail">
              <Typography component="p" className="pending-wagers-item__detail-title">Accepted</Typography>
              <Typography component="p">{details.accepted}</Typography>
            </div>
            <div className="pending-wagers-item__detail">
              <Typography component="p" className="pending-wagers-item__detail-title">Placed on</Typography>
              <Typography component="p">{details.placedOn}</Typography>
            </div>
            <div className="pending-wagers-item__detail">
              <Typography component="p" className="pending-wagers-item__detail-title">notes</Typography>
              <Typography component="p">{details.notes}</Typography>
            </div>
          </div>
        }
      </td>
      <td>
        <Typography component="p" variant="p" className="text-danger">${risk}</Typography>
      </td>
      <td>
        <Typography component="p" variant="p">${toWin}</Typography>
      </td>
    </tr>
  );
};

PendingWagersItem.propTypes = {
  defaultColorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
});

export default connect(mapStateToProps)(PendingWagersItem);
