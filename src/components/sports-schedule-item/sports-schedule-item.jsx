import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectColorScheme } from 'redux/color-scheme/selectors';
// Components
import ItemAccordion from './item-accordion/item-accordion';
import Item from './item/item';
// Styles
import './sports-schedule-item.sass';

const SportsScheduleItem = ({ title, content, event, className }) => {
  return (
    <>
      {!content ?
        <Item title={title} className={className} event={event} />
        :
        <ItemAccordion title={title} content={content} className={className} />
      }
    </>
  )
};

SportsScheduleItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  defaultColorScheme: selectColorScheme
});

export default connect(mapStateToProps)(SportsScheduleItem);
