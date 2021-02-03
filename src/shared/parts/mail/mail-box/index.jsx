import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Redux
import { deleteMessages } from 'shared/redux/mail/actions';
// Component
import Spinner from 'shared/components/spinner/spinner';
import ErrorIndicator from 'shared/components/error-indicator';
import MailItem from '../mail-item';
import MailMessage from '../mail-message';
import Checkbox from 'shared/components/checkbox';
import Button from 'shared/components/button';
// Styles
import './styles.sass';

const MailBox = ({ messages, messages: { loading, data, error }, retry, deleteMessages }) => {
  const [openedMessage, setOpenedMessage] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedAll, setCheckedAll] = useState(false);

  useEffect(() => {
    setOpenedMessage(null);
    setCheckedItems([]);
    setCheckedAll(false);
  }, [messages]);

  useEffect(() => {
    if (data && checkedItems.length === data.length) {
      setCheckedAll(true);
    } else if (checkedItems.length === 0) {
      setCheckedAll(false);
    }
  }, [data, checkedItems]);

  const handleOpen = id => {
    const message = data.find((message) => message.id === id);
    setOpenedMessage(message);
  };

  const handleClose = () => {
    setOpenedMessage(null);
  };

  const handleCheck = id => {
    setCheckedItems((checkedItems) => {
      const isChecked = checkedItems.includes(id);
      if (isChecked) {
        return checkedItems.filter((item) => item !== id)
      } else {
        return [...checkedItems, id];
      }
    });
  };

  const handleCheckAll = () => {
    if (!data) return;
    setCheckedAll(checkedAll => !checkedAll);
    setCheckedItems(() => {
      if (checkedAll) {
        return [];
      } else {
        return data.map(({ id }) => id);
      }
    });
  };

  const handleDelete = () => deleteMessages(checkedItems);

  return (
    <div className="mail-box">
      {openedMessage &&
        <MailMessage id={openedMessage.id} date={openedMessage.date} from={openedMessage.from} to={openedMessage.to} text={openedMessage.text} subject={openedMessage.subject} handleClose={handleClose} />
      }
      {error && <ErrorIndicator retry={retry} light />}
      {(!error && loading) && <Spinner light boxed />}
      {(!error && !loading && !openedMessage) &&
        <div className="mail-box__body">
          {data.length > 0 &&
            <div className="mail-box__control">
              <Checkbox label="Messages" onChange={handleCheckAll} checked={checkedAll} variant="light" />
              <Button variant="danger" size="xs" disabled={!checkedItems.length} onClick={handleDelete}>Delete</Button>
            </div>
          }
          {data.map(({ id, ...otherProps }) => (
            <MailItem key={id} id={id} className="mail-box__item" handleOpen={handleOpen} handleCheck={handleCheck} checked={checkedItems.includes(id)} {...otherProps} />
          ))}
        </div>
      }
    </div>
  );
};

MailBox.propTypes = {
  messages: PropTypes.object,
  deleteMessages: PropTypes.func,
  retry: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  deleteMessages: (ids) => dispatch(deleteMessages(ids))
});

export default connect(null, mapDispatchToProps)(MailBox);
