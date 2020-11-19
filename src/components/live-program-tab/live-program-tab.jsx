import React from 'react';
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from 'components/typography/typography';
import Accordion from 'components/accordion/accordion';
import LiveProgramContent from 'components/live-program-content/live-program-content';
// Styles
import './live-program-tab.sass';

const LiveProgramTab = ({ icon, title, program }) => {
  return (
    <Accordion className="live-program-tab">
      <Accordion.Toggle className="live-program-tab__heading">
        <FontAwesomeIcon className="live-program-tab__icon" icon={icon} />
        <Typography component="span" variant="h3" className="mb-0 live-program-tab__title text-uppercase">{title}</Typography>
        {program.length > 0 &&
          <Typography component="span" variant="p" className="mb-0 live-program-tab__counter text-uppercase">{program.length}</Typography>
        }
      </Accordion.Toggle>
      <Accordion.Content className="live-program-tab__content">
        {program.map(({ data, league }) => {
          return (
            <LiveProgramContent key={league} league={league} data={data} />
          )
        })}
      </Accordion.Content>
    </Accordion >
  );
};

export default LiveProgramTab;
