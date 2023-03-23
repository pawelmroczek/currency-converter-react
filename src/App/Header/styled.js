import styled from "styled-components";

export const StyledHeader = styled.header`
  width:100%;
  backdrop-filter: blur(10px);
  background-color: ${({ theme }) => theme.colors.darkerFillter};
  padding: 5px;

`;

export const Title = styled.h1`
  margin-top: 0px;
  font-size: 55px;
  color: white;
  margin-bottom: 10px;
  margin-left: 5px;
  text-align: left;
`;
