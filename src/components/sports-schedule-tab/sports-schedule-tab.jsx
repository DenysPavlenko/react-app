import React from 'react';
import PropTypes from 'prop-types';
// Components
import Tab from './tab/tab';
import TabAccordion from './tab-accordion/tab-accordion';
// Styles
import './sports-schedule-tab.sass';

const SportsScheduleTab = ({ title, icon, content, event, handleEvent, isActive, ...otherProps }) => {
  return (
    <>
      { !content ?
        <Tab title={title} icon={icon} event={event} handleEvent={handleEvent} isActive={isActive} {...otherProps} />
        :
        <TabAccordion content={content} event={event} handleEvent={handleEvent} title={title} icon={icon} {...otherProps} />
      }
    </>
  );
};

Tab.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  content: PropTypes.array,
  event: PropTypes.array,
  handleEvent: PropTypes.func,
  isActive: PropTypes.bool,
};

export default SportsScheduleTab;
