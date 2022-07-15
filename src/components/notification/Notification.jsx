import PropTypes from 'prop-types';
import NotificationMessage from './Notification.style';

export const Notification = ({ message }) => {
  return (
    <div>
      <NotificationMessage>{message}</NotificationMessage>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
