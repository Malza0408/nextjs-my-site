import type { NextPage } from "next";
import styled, { css } from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";
import Skills from "./Skills";
import AboutContainer from "@containers/AboutContainer";

interface StyledCricleProps {
  huge?: boolean;
}

const Circle = styled.div<StyledCricleProps>`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.darkCyan || "aqua"};
    `;
  }}

  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
      color: lightblue;
    `}
`;

const OuterLayout = styled.div`
  width: 100%;
  /* position: fixed; */
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
      <AboutContainer />
      <Skills />
    </OuterLayout>
  );
};

export default Home;
