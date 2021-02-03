import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { toggleMail, fetchMessages } from 'shared/redux/mail/actions';
import { selectMailActive, selectMessages } from 'shared/redux/mail/selectors';
// Components
import Simplebar from 'simplebar-react';
import SidebarItem from 'shared/components/sidebar-item';
import Close from 'shared/components/close';
import MailCategories from './mail-categories';
import MailBox from './mail-box';
import MailNewMessage from './mail-new-message';
// Styles
import './styles.sass';

const Mail = ({ isActive, fetchMessages, messages, toggleMail }) => {
  const [currentCategory, setCurrentCategory] = useState('inbox');

  const handleCategorySwitch = category => {
    setCurrentCategory(category);
  };

  useLayoutEffect(() => {
    isActive && fetchMessages(currentCategory);
  }, [isActive, fetchMessages, currentCategory]);

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
              <MailBox messages={messages} retry={() => fetchMessages(currentCategory)} />
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
