import styled from 'styled-components';

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin-bottom: 30px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export default SectionTitle;
