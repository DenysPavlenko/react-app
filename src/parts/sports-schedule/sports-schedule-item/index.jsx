import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectSportsScheduleEvents } from 'redux/sports-schedule-events/selectors';
import { setSportsScheduleEvent } from 'redux/sports-schedule-events/actions';
// Components
import Accordion from 'components/accordion';
import SportsScheduleList from '../sports-schedule-list';
import AccordionTab from 'components/accordion-tab';
// Styles
import './styles.sass';

const SportsScheduleItem = ({ title, icon, content, event, sportsScheduleEvents, setSportsScheduleEvent, isLast }) => {
  const isActive = sportsScheduleEvents.includes(event);

  const handleTabClick = () => !content && setSportsScheduleEvent(event);

  return (
    <Fragment>
      {!content ?
        <div className="sports-schedule-item">
          <AccordionTab
            icon={icon}
            title={title}
            counter={content && content.length}
            isActive={isActive}
            onClick={handleTabClick}
            withBorder={true}
          />
        </div>
        :
        <Accordion className="sports-schedule-item">
          <Accordion.Toggle>
            <AccordionTab
              icon={icon}
              title={title}
              counter={content && content.length}
              isActive={isActive}
              onClick={handleTabClick}
            />
          </Accordion.Toggle>
          <Accordion.Content className="sports-schedule-item__content">
            {content.map(({ title, content, id }) => (
              <SportsScheduleList key={id} title={title} content={content} event={id} />
            ))}
          </Accordion.Content>
        </Accordion >
      }
    </Fragment>
  );
};

SportsScheduleItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  content: PropTypes.array,
  event: PropTypes.string,
  sportsScheduleEvents: PropTypes.array,
  setSportsScheduleEvent: PropTypes.func,
  isLast: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  sportsScheduleEvents: selectSportsScheduleEvents
});

const mapDispatchToProps = dispatch => ({
  setSportsScheduleEvent: (event) => dispatch(setSportsScheduleEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(SportsScheduleItem);
