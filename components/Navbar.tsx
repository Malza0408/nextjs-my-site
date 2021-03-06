import React from "react";
import styled, { css } from "styled-components";

const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  max-width: 110rem;
  padding: 1rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.darkCyan};
      height: ${theme.navbarHeight.height};
    `;
  }}
`;

const Navbar__title = styled.div`
  width: 20rem;
  text-align: center;
  cursor: pointer;
  ${({ theme }) => {
    return css`
      h2 {
        color: ${theme.colors.darkGrey};
        font-weight: ${theme.fonts.weight.regular};
        margin: 0;
      }
    `;
  }}
`;

const Navbar__ul = styled.ul`
  display: flex;
  ${({ theme }) => {
    return css`
      color: ${theme.colors.darkGrey};
    `;
  }}
`;

const Navbar__li = styled.li`
  padding: 0.8rem 1.2rem;
  margin: 0 0.4rem;
  cursor: pointer;
  ${({ theme }) => {
    return css`
      border-radius: ${theme.borderRadius.bold};
      transition: all ${theme.transition.delay};
    `;
  }}
  &:hover {
    ${({ theme }) => {
      return css`
        background-color: ${theme.colors.lightCyan};
        color: ${theme.colors.white};
      `;
    }}
  }
`;

const Navber = () => {
  return (
    <header>
      <Navbar>
        <Navbar__title>
          <h2>{`Malza's Home`}</h2>
        </Navbar__title>
        <Navbar__ul>
          <Navbar__li>
            <span>Home</span>
          </Navbar__li>
          <Navbar__li>About</Navbar__li>
          <Navbar__li>Skills</Navbar__li>
          <Navbar__li>My work</Navbar__li>
          <Navbar__li>Testimonials</Navbar__li>
          <Navbar__li>Contact</Navbar__li>
        </Navbar__ul>
      </Navbar>
    </header>
  );
};

export default Navber;
