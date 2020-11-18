import React from 'react';
import PropTypes from 'prop-types';
// Components
import Accordion from 'components/accordion/accordion';
import Typography from 'components/typography/typography';
import Item from '../item/item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemAccordion = ({ title, content }) => {
  return (
    <Accordion className="sports-schedule-item">
      <Accordion.Toggle className="sports-schedule-item__heading">
        <FontAwesomeIcon className="sports-schedule-item__chevron" icon="chevron-down" />
        <Typography component="span" variant="p" className="sports-schedule-item__title mb-0">{title}</Typography>
      </Accordion.Toggle>
      <Accordion.Content>
        <div className="sports-schedule-item__content">
          {content.map(({ title, id }) => (
            <Item key={id} event={id} title={title} />
          ))}
        </div>
      </Accordion.Content>
    </Accordion>
  )
};

ItemAccordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
  className: PropTypes.string,
};

export default ItemAccordion;
