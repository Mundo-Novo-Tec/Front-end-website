import styled, { css } from "styled-components";
import { shade } from "polished";

interface IAProps {
  status: boolean;
}

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
`;

export const A = styled.a<IAProps>`
  ${props =>
    props.status &&
    css`
      color: #04d361;
    `}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 64px;
  margin: 24px 160px 0;
`;
export const LogoGroup = styled.div`
  h1 {
    font-weight: bold;
    font-size: 24px;
  }
`;

export const MenuOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;

  a {
    display: block;
    font-weight: bold;
    font-size: 24px;
    color: #ecebe4;
    text-decoration: none;
    transition: color 0.2s;
    margin-right: 24px;

    &:hover {
      color: ${shade(0.2, "#f4ede8")};
    }
  }

  .active {
    color: #04d361;
  }
`;
