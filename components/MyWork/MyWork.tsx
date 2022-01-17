import React, { useState } from "react";
import styled from "styled-components";
import { MyWorkProps } from "types/types";
import Projects from "./Projects";
import WorkButtons from "./WorkButtons";

const MyWork__title = styled.h1`
  margin-top: 0;
`;

const MyWork__subtitle = styled.h3``;

const MyWork__section = styled.section`
  width: 100%;
  max-width: 110rem;
  margin: auto;
  padding: 40px;
  text-align: center;
`;

const MyWork = ({ isSelected, handleOnClick }: MyWorkProps) => {
  return (
    <MyWork__section>
      <MyWork__title>My work</MyWork__title>
      <MyWork__subtitle>Projects</MyWork__subtitle>
      <WorkButtons isSelected={isSelected} handleOnClick={handleOnClick} />
      <Projects isSelected={isSelected} />
    </MyWork__section>
  );
};

export default MyWork;
