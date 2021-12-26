import React from "react";
import styled, { css } from "styled-components";
import theme from "@styles/theme";

const Navbar = styled.div`
  width: 100%;
  max-width: 110rem;
  margin: auto;
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.apricot};
      transition: all ${theme.transition.delay};
    `;
  }}
`;

const NavbarTitle = styled.div`
  width: 20rem;
  text-align: center;
  cursor: pointer;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.darkBlue};
      transition: all ${theme.transition.delay};
      h2 {
        color: ${theme.colors.darkGrey};
        font-weight: ${theme.fonts.weight.regular};
        margin: 0;
      }
    `;
  }}
`;

const NavbarUl = styled.ul`
  display: flex;
  ${({ theme }) => {
    return css`
      color: ${theme.colors.darkGrey};
    `;
  }}
`;

const NavbarLi = styled.li`
  padding: 0.8rem 1.2rem;
  margin: 0 0.4rem;
  cursor: pointer;
`;

const Navber = () => {
  return (
    <Navbar>
      <NavbarTitle>
        <h2>{`Malza's Home`}</h2>
      </NavbarTitle>
      <NavbarUl>
        <NavbarLi>Home</NavbarLi>
        <NavbarLi>About</NavbarLi>
        <NavbarLi>Skills</NavbarLi>
        <NavbarLi>My work</NavbarLi>
        <NavbarLi>Testimonials</NavbarLi>
        <NavbarLi>Contact</NavbarLi>
      </NavbarUl>
    </Navbar>
  );
};

export default Navber;
