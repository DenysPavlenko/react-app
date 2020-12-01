import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
import { removeSportsWager } from 'redux/sports-wagers/actions';
// Components
import Typography from 'components/typography/typography';
import Image from 'components/image/image';
import Input from 'components/input/input';
import Chevron from 'components/chevron/chevron';
// Styles
import './sports-wager.sass';

const SportsWager = ({ id, icon, title, value, scheduled, selection, notes, removeSportsWager, defaultColorScheme }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleHeaderClick = () => {
    setShowDetails(showDetails => !showDetails)
  };

  const classes = classNames({
    'sports-wager': true,
    [`sports-wager--${defaultColorScheme}`]: defaultColorScheme
  });

  return (
    <div className={classes}>
      <div className="sports-wager__header" onClick={handleHeaderClick}>
        <Typography component="h5" className="sports-wager__header-title">NFL</Typography>
        <Chevron isActive={showDetails} />
      </div>
      <div className="sports-wager__info">
        <div className="sports-wager__team">
          <Image src={icon} alt="icon" className="sports-wager__team-icon" />
          <Typography component="h5" className="sports-wager__team-title">{title}</Typography>
        </div>
        <Typography component="h5" className="sports-wager__bet">{value}</Typography>
      </div>
      {showDetails &&
        <div className="sports-wager__details">
          <Typography component="p" variant="p-sm" className="sports-wager__detail"><span>Scheduled: </span>{scheduled}</Typography>
          <Typography component="p" variant="p-sm" className="sports-wager__detail"><span>Selection: </span>{selection}</Typography>
          <Typography component="p" variant="p-sm" className="sports-wager__detail"><span>Game Notes: </span>{notes}</Typography>
        </div>
      }
      <div className="sports-wager__footer">
        <Typography component="p" variant="p-sm" className="sports-wager__delete text-danger" onClick={() => removeSportsWager(id)}>Delete</Typography>
        <div className="sports-wager__inputs">
          <Input type="number" size="xs" fluid />
          <Typography component="p" variant="p-sm" className="sports-wager__inputs-title">To win</Typography>
          <Input type="number" size="xs" placeholder="Win Amount" fluid />
        </div>
      </div>
    </div>
  );
};

SportsWager.propTypes = {
  defaultColorScheme: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  scheduled: PropTypes.string,
  selection: PropTypes.string,
  notes: PropTypes.string,
  removeSportsWager: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
});

const mapDispatchToProps = dispatch => ({
  removeSportsWager: (id) => dispatch(removeSportsWager(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SportsWager);