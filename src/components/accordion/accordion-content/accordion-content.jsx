import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './accordion-content.sass';

const AccordionContent = ({ children, className, isExpanded }) => {

  const classes = classNames({
    [className]: className,
  });

  return (
    <div className={classes} style={{ display: `${isExpanded ? 'block' : 'none'}` }}>
      {children}
    </div>
  );
};

AccordionContent.propTypes = {
  children: PropTypes.node,
  toggleAccordion: PropTypes.func,
  className: PropTypes.string,
};

export default AccordionContent;
