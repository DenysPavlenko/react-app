import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const AccordionToggle = ({ children, toggleAccordion, className }) => {

  const classes = classNames({
    'accordion-toggle': true,
    [className]: className,
  });

  return (
    <div className={classes} onClick={toggleAccordion}>
      {children}
    </div>
  );
};

AccordionToggle.propTypes = {
  children: PropTypes.node,
  toggleAccordion: PropTypes.func,
  className: PropTypes.string,
};

export default AccordionToggle;
