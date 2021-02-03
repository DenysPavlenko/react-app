import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withBreakpoints } from 'react-breakpoints';
// Components
import Image from 'shared/components/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './styles.sass';

const HeaderDropdownMenu = ({ menu, history, breakpoints, currentBreakpoint, footer }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (breakpoints[currentBreakpoint] < breakpoints.xl) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [breakpoints, currentBreakpoint]);

  const handleItemClick = (rootName, handler) => {
    if (rootName) { history.push(`${rootName}`); }
    if (handler) { handler(); }
  };

  return (
    <div className="header-dropdown-menu">
      {menu.map(({ icon, title, flag, rootName, handler }, idx) => (
        <div key={idx} className="header-dropdown-menu__item" onClick={() => handleItemClick(rootName, handler)}>
          <div className="header-dropdown-menu__icon">
            <FontAwesomeIcon icon={icon} />
          </div>
          <span className="header-dropdown-menu__title">{title}</span>
          {flag && <Image src={flag} className="header-dropdown-menu__flag" alt="usa" icon />}
        </div>
      ))}

      {isMobile && <div className="header-dropdown-menu__footer">{footer}</div>}

    </div>
  );
};

HeaderDropdownMenu.propTypes = {
  history: PropTypes.object,
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
};

export default withRouter(withBreakpoints(HeaderDropdownMenu));

