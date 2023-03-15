import styled from "styled-components";

export const StyledFooter = styled.footer`
  backdrop-filter: blur(10px);
  background-color: ${({ theme }) => theme.colors.darkerFillter};
  padding: 15px;
  width: 100%;
  margin-top: 300px;
  color: white;
  text-align: center;
  font-size: 20px;
`;
