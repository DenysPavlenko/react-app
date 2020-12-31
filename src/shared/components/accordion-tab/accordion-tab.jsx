import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'shared/components/typography/typography';
// Styles
import './accordion-tab.sass';

const AccordionTab = ({ icon, title, counter, isActive, withBorder, onClick }) => {
  const classes = classNames({
    'accordion-tab': true,
    'accordion-tab--with-border': withBorder,
    'is-active': isActive,
  });

  return (
    <div className={classes} onClick={onClick}>
      {icon && <FontAwesomeIcon className="accordion-tab__icon" icon={icon} />}
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
  onClick: PropTypes.func,
};

export default AccordionTab;
