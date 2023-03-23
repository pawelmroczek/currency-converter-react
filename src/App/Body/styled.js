import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  font-size: 35px;
  margin: 50px auto;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.vistaWhite};
  backdrop-filter: blur(2px);
  width: 80%;
  padding: 30px;
  flex-grow: 0;
`;

export const StatusDiv = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-size: 20px;
  height: 80%;

  ${({ problem }) =>
    problem &&
    css`
      color: ${({ theme }) => theme.colors.crimson};
    `}
`;
