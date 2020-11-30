import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchMessages, toggleMail } from 'redux/mail/actions';
import { selectMessages } from 'redux/mail/selectors';
// Components
import Close from 'components/close/close';
import MailCategories from 'components/mail-categories/mail-categories';
import MailBox from 'components/mail-box/mail-box';

// Styles
import './mail-content.sass';

const MailContent = ({ fetchMessages, messages, toggleMail }) => {
  const [currentCategory, setCurrentCategory] = useState('inbox');

  const handleCategorySwitch = category => {
    setCurrentCategory(category)
  };

  useLayoutEffect(() => {
    fetchMessages(currentCategory);
  }, [fetchMessages, currentCategory]);

  return (
    <div className="mail-content">
      <Close className="mail-content__close" onClick={toggleMail} />
      <MailCategories className="mail-content__categories" currentCategory={currentCategory} handleCategorySwitch={handleCategorySwitch} />
      {currentCategory !== 'new' && <MailBox messages={messages} retry={() => fetchMessages(currentCategory)} />}
    </div>
  );
};

MailContent.propTypes = {
  fetchMessages: PropTypes.func,
  toggleMail: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  messages: selectMessages,
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: (category) => dispatch(fetchMessages(category)),
  toggleMail: () => dispatch(toggleMail()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MailContent);
