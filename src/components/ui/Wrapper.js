import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  margin-top: 50px;
  padding: 50px;
  box-shadow: ${({ theme }) => theme.colors.mainShadow};
`;
