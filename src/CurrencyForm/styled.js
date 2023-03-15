import styled from "styled-components";

export const Form = styled.form`
  font-size: 20px;
  padding: 10px;
  background-color: ${({theme})=>theme.colors.darkerFillter};
  color: white;
  text-align: center;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({theme})=>theme.breakpoints.phoneMedia}px){
    flex-direction: column;
    gap: 10px;
  }
`