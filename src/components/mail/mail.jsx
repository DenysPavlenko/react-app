import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { toggleMail, fetchMessages } from 'redux/mail/actions';
import { selectMailActive, selectMessages } from 'redux/mail/selectors';
// Components
import Simplebar from 'simplebar-react';
import SidebarItem from 'components/sidebar-item/sidebar-item';
import Close from 'components/close/close';
import MailCategories from 'components/mail-categories/mail-categories';
import MailBox from 'components/mail-box/mail-box';
// Styles
import './mail.sass';

const Mail = ({ isActive, fetchMessages, messages, toggleMail }) => {
  const [currentCategory, setCurrentCategory] = useState('inbox');

  const handleCategorySwitch = category => {
    setCurrentCategory(category)
  };

  useLayoutEffect(() => {
    isActive && fetchMessages(currentCategory);
  }, [isActive, fetchMessages, currentCategory]);

  return (
    <SidebarItem isActive={isActive} toggle={toggleMail}>
      <div className="mail">
        <Close className="mail__close" onClick={toggleMail} />
        <MailCategories className="mail__categories" currentCategory={currentCategory} handleCategorySwitch={handleCategorySwitch} />
        <div className="mail__content">
          <Simplebar className="custom-scroll">
            {currentCategory !== 'new' && <MailBox messages={messages} retry={() => fetchMessages(currentCategory)} />}
          </Simplebar>
        </div>
      </div>
    </SidebarItem>
  );
};

Mail.propTypes = {
  isActive: PropTypes.bool,
  fetchMessages: PropTypes.func,
  toggleMail: PropTypes.func,
  messages: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  isActive: selectMailActive,
  messages: selectMessages
});

const mapDispatchToProps = dispatch => ({
  toggleMail: () => dispatch(toggleMail()),
  fetchMessages: (category) => dispatch(fetchMessages(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mail);
