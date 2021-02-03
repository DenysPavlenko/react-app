import React from 'react';
import PropTypes from 'prop-types';
// Components
import Accordion from 'shared/components/accordion';
import LiveProgramList from '../live-program-list';
import AccordionTab from 'shared/components/accordion-tab';
// Styles
import './styles.sass';

const LiveProgramItem = ({ icon, title, program }) => {
  return (
    <Accordion className="live-program-item">
      <Accordion.Toggle>
        <AccordionTab icon={icon} title={title} counter={program.length} data={program} />
      </Accordion.Toggle>
      <Accordion.Content>
        {program.map(({ data, league }) => {
          return (
            <LiveProgramList key={league} league={league} data={data} />
          )
        })}
      </Accordion.Content>
    </Accordion >
  );
};

LiveProgramItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  program: PropTypes.array,
};

export default LiveProgramItem;
