import React from "react";
import Project from "./Project";

import styled from "styled-components";
import { ProjectsProps, WorkButtonProps } from "types/types";

const MyworkProjects = styled.section`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  text-align: center;
  align-items: center;
  margin: 3rem auto 3rem auto;
`;

const Projects = ({ isSelected }: ProjectsProps) => {
  return (
    <MyworkProjects>
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
