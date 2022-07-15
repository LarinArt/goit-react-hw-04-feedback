import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.m};

  width: 150px;
  height: 40px;

  background-color: ${({ theme }) => theme.colors.accentBgColor};
  color: ${({ theme }) => theme.colors.secondTextColor};
  border: none;
  border-radius: 5px;

  cursor: pointer;
  transition: ${({ theme }) => theme.colors.mainAnimationHover};

  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.secondBgColor};
  }
`;
