import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './accordion-content.sass'

const AccordionContent = ({ children, className, isExpanded }) => {
  const content = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    setMaxHeight(content.current.scrollHeight);
  }, [setMaxHeight]);

  const classes = classNames({
    [className]: className,
  });

  return (
    <div ref={content} className="accordion-content" style={{ 'maxHeight': `${isExpanded ? maxHeight : '0'}px` }}>
      <div className={classes}>
        {children}
      </div>
    </div>
  );
};

AccordionContent.propTypes = {
  children: PropTypes.node,
  toggleAccordion: PropTypes.func,
  className: PropTypes.string,
};

export default AccordionContent;
