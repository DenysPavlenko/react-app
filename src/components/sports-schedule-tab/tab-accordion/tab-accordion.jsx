import React from 'react';
import PropTypes from 'prop-types';
// Components
import Accordion from 'components/accordion/accordion';
import SportsScheduleItem from 'components/sports-schedule-item/sports-schedule-item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'components/typography/typography';

const TabAccordion = ({ title, icon, content }) => {
  return (
    <Accordion className="sports-schedule-tab">
      <Accordion.Toggle className="sports-schedule-tab__heading">
        <FontAwesomeIcon icon={icon} className="sports-schedule-tab__icon text-dark" />
        <Typography component="span" variant="h3" className="mb-0 text-uppercase text-dark">{title}</Typography>
      </Accordion.Toggle>
      <Accordion.Content className="sports-schedule-tab__content">
        {content.map(({ title, content, id }) => {
          return (
            <SportsScheduleItem key={id} title={title} content={content} event={id} />
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
  handleEvent: PropTypes.func,
  isActive: PropTypes.bool,
  colorScheme: PropTypes.string,
};

export default TabAccordion;
