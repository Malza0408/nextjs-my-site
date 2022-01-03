import React from "react";
import styled, { css } from "styled-components";
import Skill from "./Skill";

const Skills_title = styled.h1`
  margin-top: 0;
`;

const Skills__section = styled.section`
  /* width: 100%; */
  /* max-width: 110rem; */
  /* margin: auto; */
  padding: 4rem;
  /* text-align: center; */
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.yellow};
    `;
  }}
`;

const Skills__container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  box-shadow: 5px 5px 5px rgb(73, 72, 72);
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.darkGrey};
    `;
  }}
`;

const Skills__left = styled.section`
  flex-basis: 60%;
  padding: 2rem 3rem 2rem 3rem;
  ${({ theme }) => {
    return css`
      color: ${theme.colors.white};
    `;
  }}
`;

const Skills__title = styled.h3`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.white};
      font-weight: ${theme.fonts.weight.semiBold};
    `;
  }}
`;

const Skills__right = styled.section`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.grey};
      color: ${theme.colors.white};
    `;
  }}
`;

const Skills__etc = styled.div``;

const Etc__list = styled.p`
  font-weight: 400;
  margin: 2rem;
  ${({ theme }) => {
    return css`
      color: ${theme.colors.white};
    `;
  }}
`;

const Skills = () => {
  return (
    <Skills__section>
      <Skills_title>Skills</Skills_title>
      <h2>Skills & Attributes</h2>
      <Skills__container>
        <Skills__left>
          <Skills__title>Skills</Skills__title>
          <Skill stack="HTML" proficiency={90} />
          <Skill stack="CSS" proficiency={90} />
          <Skill stack="JavaScript" proficiency={90} />
          <Skill stack="React" proficiency={80} />
          <Skill stack="TypeScript" proficiency={80} />
          <Skill stack="C++" proficiency={70} />
        </Skills__left>
        <Skills__right>
          <Skills__etc>
            <Skills__title>Etc...</Skills__title>
            <Etc__list>Redux</Etc__list>
            <Etc__list>Styled Component</Etc__list>
            <Etc__list>Testing Library</Etc__list>
            <Etc__list>Git</Etc__list>
          </Skills__etc>
        </Skills__right>
      </Skills__container>
    </Skills__section>
  );
};

export default Skills;
