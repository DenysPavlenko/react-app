import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const AccordionToggle = ({ children, handleAccordion, className }) => {

  const classes = classNames({
    'accordion-toggle': true,
    [className]: className,
  });

  return (
    <div className={classes} onClick={handleAccordion}>
      {children}
    </div>
  );
};

AccordionToggle.propTypes = {
  children: PropTypes.node,
  handleAccordion: PropTypes.func,
  className: PropTypes.string,
};

export default AccordionToggle;
