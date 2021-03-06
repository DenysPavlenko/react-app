import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { toggleMail, messagesRequested } from 'redux/mail/actions';
import { selectMailActive, selectMessages } from 'redux/mail/selectors';
// Components
import Simplebar from 'simplebar-react';
import SidebarItem from 'components/sidebar-item';
import Close from 'components/close';
import MailCategories from './mail-categories';
import MailBox from './mail-box';
import MailNewMessage from './mail-new-message';
// Styles
import './styles.sass';

const Mail = ({ isActive, messagesRequested, messages, toggleMail }) => {
  const [currentCategory, setCurrentCategory] = useState('inbox');

  const handleCategorySwitch = category => {
    setCurrentCategory(category);
  };

  useLayoutEffect(() => {
    isActive && messagesRequested(currentCategory);
  }, [isActive, messagesRequested, currentCategory]);

  return (
    <SidebarItem isActive={isActive} toggle={toggleMail}>
      <div className="mail">
        <Close className="mail__close" onClick={toggleMail} />
        <MailCategories
          className="mail__categories"
          currentCategory={currentCategory}
          handleCategorySwitch={handleCategorySwitch}
        />
        <div className="mail__content">
          <Simplebar className="custom-scroll">
            {currentCategory !== 'new' ?
              <MailBox messages={messages} retry={() => messagesRequested(currentCategory)} />
              :
              <MailNewMessage />
            }
          </Simplebar>
        </div>
      </div>
    </SidebarItem>
  );
};

Mail.propTypes = {
  isActive: PropTypes.bool,
  messagesRequested: PropTypes.func,
  toggleMail: PropTypes.func,
  messages: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  isActive: selectMailActive,
  messages: selectMessages
});

const mapDispatchToProps = {
  toggleMail,
  messagesRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(Mail);
