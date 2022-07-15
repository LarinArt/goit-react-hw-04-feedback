import styled from 'styled-components';

export const StatisticsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StatisticsItem = styled.li`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StatisticsText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: capitalize;
`;

export const StatisticsValue = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.accentBgColor};
`;
