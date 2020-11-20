import React from 'react';
import PropTypes from 'prop-types';
// Components
import Accordion from 'components/accordion/accordion';
import LiveProgramList from 'components/live-program-list/live-program-list';
import AccordionTab from 'components/accordion-tab/accordion-tab';
// Styles
import './live-program-item.sass';

const LiveProgramItem = ({ icon, title, program }) => {
  return (
    <>
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
    </>
  );
};

LiveProgramItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  program: PropTypes.array,
};

export default LiveProgramItem;
