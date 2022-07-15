import styled from 'styled-components';

const NotificationMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.notificationMessage};
`;

export default NotificationMessage;
