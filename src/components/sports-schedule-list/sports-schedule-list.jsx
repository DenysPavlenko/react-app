import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectSportsScheduleEvents } from 'redux/sports-schedule-events/selectors';
import { setSportsScheduleEvents, setSportsScheduleEvent } from 'redux/sports-schedule-events/actions';
// Components
import Accordion from 'components/accordion/accordion';
import Typography from 'components/typography/typography';
import SportsScheduleListItem from 'components/sports-schedule-list-item/sports-schedule-list-item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './sports-schedule-list.sass';

const SportsScheduleList = ({ title, content, event, sportsScheduleEvents, setSportsScheduleEvent, setSportsScheduleEvents }) => {
  const isActive = sportsScheduleEvents.includes(event);

  return (
    <div className="sports-schedule-list">
      {!content ?
        <SportsScheduleListItem title={title} isActive={isActive} onClick={() => setSportsScheduleEvent(event)} onChange={() => setSportsScheduleEvents(event)} />
        :
        <Accordion>
          <Accordion.Toggle className="sports-schedule-list__heading">
            <FontAwesomeIcon className="sports-schedule-list__chevron" icon="chevron-down" />
            <Typography component="span" variant="p" className="sports-schedule-list__title mb-0">{title}</Typography>
          </Accordion.Toggle>
          <Accordion.Content className="sports-schedule-list__content">
            {content.map(({ title, id }) => (
              <SportsScheduleListItem key={id} title={title} isActive={isActive} onClick={() => setSportsScheduleEvent(event)} onChange={() => setSportsScheduleEvents(event)} />
            ))}
          </Accordion.Content>
        </Accordion>
      }
    </div>
  )
};

SportsScheduleList.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
  event: PropTypes.string,
  sportsScheduleEvents: PropTypes.array,
  setSportsScheduleEvent: PropTypes.func,
  setSportsScheduleEvents: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  sportsScheduleEvents: selectSportsScheduleEvents
});

const mapDispatchToProps = dispatch => ({
  setSportsScheduleEvents: (event) => dispatch(setSportsScheduleEvents(event)),
  setSportsScheduleEvent: (event) => dispatch(setSportsScheduleEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(SportsScheduleList);
