import React from "react";
import styled from "styled-components";
import WorkButton from "./WorkButton";

const MyWork__title = styled.h1`
  margin-top: 0;
`;

const MyWork__section = styled.section`
  width: 100%;
  max-width: 110rem;
  margin: auto;
  padding: 40px;
  text-align: center;
`;

const MyWork = () => {
  return (
    <MyWork__section>
      <MyWork__title>My work</MyWork__title>
      <h3>Projects</h3>
      <WorkButton />
    </MyWork__section>
  );
};

export default MyWork;
