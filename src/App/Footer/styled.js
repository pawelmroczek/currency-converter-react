import styled from "styled-components";

export const StyledFooter = styled.footer`
  backdrop-filter: blur(10px);
  background-color: ${({ theme }) => theme.colors.darkerFillter};
  padding: 15px;
  width: 100%;
  color: white;
  text-align: center;
  font-size: 20px;
  flex-grow:5;
  display:flex;
  margin-top:200px;
  justify-content:center;
  align-items:center;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px){
    margin-top:100px;
  }
`;
