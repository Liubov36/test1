import styled from "@emotion/styled";

export const Layout = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const MainTitle = styled.h1`
  font-size: ${p => p.theme.fontSizes.ll};
`;

export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.ll};
  margin-bottom: ${props => props.theme.space[3]};
`;