import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const FeedbackItem = styled.li`
  margin-bottom: 30px;

  :last-child {
    margin-bottom: 0;
  }
`;
