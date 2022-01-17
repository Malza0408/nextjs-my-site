import React, { useEffect, useState } from "react";
import Project from "./Project";

import styled, { css, keyframes } from "styled-components";
import { ProjectsProps, WorkButtonProps } from "types/types";

const ProjectShowAndHidden = keyframes`
0% {
  transform: scale(1) translateY(0);
  opacity: 1;
}

50% {
  transform: scale(0.98) translateY(20px);
  opacity: 0;
}

100% {
  transform: scale(1) translateY(0);
  opacity: 1;
}
`;

const MyworkProjects = styled.section<{ isClicked: boolean }>`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  text-align: center;
  align-items: center;
  margin: 3rem auto 3rem auto;
  animation: ${(props) =>
    props.isClicked &&
    css`
      ${ProjectShowAndHidden} 0.5s linear normal;
    `};
`;

const Projects = ({ isSelected, isClicked }: ProjectsProps) => {
  return (
    <MyworkProjects isClicked={isClicked}>
      <Project
        src="/projects/overwatch.png"
        alt="overwatch"
        title="Overwatch"
        description="Clone Coding with JS, HTML and CSS"
        isSelected={isSelected[0] || isSelected[1]}
      />
      <Project
        src="/projects/shoppingList.png"
        alt="shoppingList"
        title="Shopping List"
        description="Clone Coding with JS, HTML and CSS"
        isSelected={isSelected[0] || isSelected[1]}
      />
      <Project
        src="/projects/carrotGame.png"
        alt="carrotgame"
        title="Carrot Game"
        description="CarrotGame with JS, HTML and CSS"
        isSelected={isSelected[0] || isSelected[1]}
      />
      <Project
        src="/projects/starbucks.png"
        alt="starbucks"
        title="Starbucks"
        description="Clone Coding with JS, HTML and CSS"
        isSelected={isSelected[0] || isSelected[1]}
      />
      <Project
        src="/projects/youtube.png"
        alt="youtube"
        title="Youtube"
        description="Youtube with Create React App and TS"
        isSelected={isSelected[0] || isSelected[2]}
      />
    </MyworkProjects>
  );
};

export default Projects;
