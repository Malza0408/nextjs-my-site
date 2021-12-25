import type { NextPage } from "next";
import styled, { css } from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";
// import { decreaseNum, increaseNum } from "../redux/modules/count";

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
    `}
`;

const OuterLayout = styled.div`
  width: 100%;
  position: fixed;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.blue};
      transition: all ${theme.transitionColor.delay};
    `;
  }}
`;

const Home: NextPage = () => {
  return (
    <OuterLayout>
      <Navbar />
      <Main />
    </OuterLayout>
  );
};

export default Home;
