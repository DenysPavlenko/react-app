import React, { useState } from 'react';
// Components
import Close from 'components/close/close';
import MailCategories from 'components/mail-categories/mail-categories';
import MailInbox from 'components/mail-inbox/mail-inbox';
// Styles
import './mail-content.sass';

const MailContent = () => {
  const [currentCategory, setCurrentCategory] = useState('inbox');

  const handleCategorySwitch = category => setCurrentCategory(category);

  return (
    <div className="mail-content">
      <Close className="mail-content__close" />
      <MailCategories currentCategory={currentCategory} handleCategorySwitch={handleCategorySwitch} />
      {currentCategory === 'inbox' && < MailInbox />}
    </div>
  );
};


export default MailContent;
