import React from "react";
import styled, { css } from "styled-components";
import theme from "@styles/theme";

const Navbar = styled.div`
  /* width: 100%;
  max-width: 110rem;
  margin: auto; */
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.darkCyan};
      transition: all ${theme.transition.delay};
    `;
  }}
`;

const Navbar__title = styled.div`
  width: 20rem;
  text-align: center;
  cursor: pointer;
  ${({ theme }) => {
    return css`
      /* background-color: ${theme.colors.darkBlue}; */
      transition: all ${theme.transition.delay};
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
  );
};

export default Navber;
