import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'components/typography/typography';
// Styles
import './accordion-tab.sass';

const AccordionTab = ({ icon, title, counter, isActive, defaultColorScheme, onClick }) => {
  const classes = classNames({
    'accordion-tab': true,
    [`accordion-tab--${defaultColorScheme}`]: isActive && defaultColorScheme,
    'is-active': isActive,
  });

  return (
    <div className={classes} onClick={onClick}>
      <FontAwesomeIcon className="accordion-tab__icon" icon={icon} />
      <Typography component="span" variant="h3" className="accordion-tab__title text-uppercase">{title}</Typography>
      {counter > 0 && <Typography component="span" variant="p" className="accordion-tab__counter text-uppercase">{counter}</Typography>}
    </div>
  );
};

AccordionTab.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  counter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isActive: PropTypes.bool,
  defaultColorScheme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme,
});

export default connect(mapStateToProps, null)(AccordionTab);
