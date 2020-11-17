import React from 'react';
import PropTypes from 'prop-types';
// Components
import Tab from './tab/tab';
import TabAccordion from './tab-accordion/tab-accordion';
// Styles
import './sports-schedule-tab.sass';

const SportsScheduleTab = ({ title, icon, content, event }) => {
  return (
    <>
      { !content ?
        <Tab title={title} icon={icon} event={event} />
        :
        <TabAccordion title={title} icon={icon} content={content} />
      }
    </>
  );
};

Tab.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  content: PropTypes.array,
  events: PropTypes.array,
  handleEvent: PropTypes.func,
  isActive: PropTypes.bool,
};

export default SportsScheduleTab;
