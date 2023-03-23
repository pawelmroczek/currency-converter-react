import styled from "styled-components";
import { Date } from "../Clock/styled";


export const Symbol = styled.span`
  color: ${({ theme }) => theme.colors.doveGray};
`;

export const Wrapper = styled.div`
  font-size: 35px;
  margin: 50px auto;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.vistaWhite};
  backdrop-filter: blur(2px);
  width: 80%;
  padding: 30px;
`;

export const Input = styled.input`
  width: 150px;
  height: 80px;
  margin-top: 20px;
  padding: 0px 0px 0px 10px;
`;

 export const BankInfo =styled(Date)`
  text-align:center;
  padding-top:20px;
 `

 export const Span = styled.span`
 color:${({theme})=>theme.colors.black};
 font-weight:bold;
 `