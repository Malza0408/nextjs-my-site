import type { NextPage } from "next";
import styled, { css } from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";
import Skills from "./Skills";
import MyWork from "./MyWork";
import About from "./About";

const OuterLayout = styled.div`
  width: 100%;
  max-width: 110rem;
  margin: auto;
  /* padding: 40px; */
  text-align: center;
  ${({ theme }) => {
    return css`
      /* background-color: ${theme.colors.blue}; */
    `;
  }}
`;

const Home: NextPage = () => {
  return (
    <OuterLayout>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <MyWork />
    </OuterLayout>
  );
};

export default Home;
