import styled, { css } from "styled-components";

export const Header = styled.div`
  min-height: 60px;
  background-color: blue;
`;

export const Container = styled.div`
  background-color: red;
  max-width: 400px;
  margin: 0 auto;
  padding: 0 100px;
  ${Header} {
    background-color: green;
  }
`;

export const Nav = styled.nav`
  padding: 20px;
`;

export const NavList = styled.ul`
  li:last-of-type {
    font-size: 48px;
  }
`;

export const NavListItem = styled.li`
  color: ${({ color = "white" }) => color};
  text-align: center;
  padding: 5px 40px;
  /* &:last-child{
    font-size: 48px;
  } */
`;

const buttonStyles = {
  primary: css`
    background-color: ${(props) => props.primaryColor};
    border-color: white;
    &:hover {
      background-color: white;
      border-color: blue;
    }
  `,
  secondary: css`
    background-color: white;
    border-color: blue;
    &:hover {
      background-color: blue;
      border-color: white;
    }
  `
};

export const Button = styled.button`
  border: 5px solid;
  ${({ variant = "primary" }) => buttonStyles[variant]}
`;
