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
  text-align: center;
`;

const InnerLayout = styled.div`
  position: relative;
  ${({ theme }) => {
    return css`
      top: ${theme.navbarHeight.height};
    `;
  }}
`;

const Home: NextPage = () => {
  return (
    <OuterLayout>
      <Navbar />
      <InnerLayout>
        <main role="main">
          <Main />
          <About />
          <Skills />
          <MyWork />
        </main>
      </InnerLayout>
    </OuterLayout>
  );
};

export default Home;
