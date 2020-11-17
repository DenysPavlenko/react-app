import React from 'react';
import PropTypes from 'prop-types';
// Components
import Accordion from 'components/accordion/accordion';
import SportsScheduleItem from 'components/sports-schedule-item/sports-schedule-item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'components/typography/typography';

const TabAccordion = ({ title, icon, content, event, handleEvent, ...otherProps }) => {
  return (
    <Accordion className="sports-schedule-tab" {...otherProps} >
      <Accordion.Toggle className="sports-schedule-tab__heading">
        <FontAwesomeIcon icon={icon} className="sports-schedule-tab__icon text-dark" />
        <Typography component="h3" className="mb-0 text-uppercase text-dark">{title}</Typography>
      </Accordion.Toggle>
      <Accordion.Content className="sports-schedule-tab__content">
        {content.map(({ title, withArrow, content }, idx) => {
          return (
            <SportsScheduleItem key={idx} title={title} className="sports-schedule-tab__item" withArrow={withArrow} content={content} />
          )
        })}
      </Accordion.Content>
    </Accordion >
  )
};

TabAccordion.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  content: PropTypes.array,
  event: PropTypes.string,
  handleEvent: PropTypes.func,
  isActive: PropTypes.bool,
  colorScheme: PropTypes.string,
};

export default TabAccordion;
