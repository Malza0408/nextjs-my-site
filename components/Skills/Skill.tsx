import React from "react";
import styled, { css } from "styled-components";
import { SkillProps } from "../../types/types";

const Skill__Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const Skill__Description = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Skill__Info = styled.h4`
  margin-bottom: 0.3rem;
  ${({ theme }) => {
    return css`
      font-size: ${theme.fonts.size.small};
      color: ${theme.colors.white};
    `;
  }}
`;

const Skill__bar = styled.div`
  width: 100%;
  height: 0.8rem;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.lightGery};
      border-radius: ${theme.borderRadius.bold};
    `;
  }}
`;

type GageType = {
  width: number;
};

const Skill_gage = styled.div<GageType>`
  width: ${(props) => props.width}%;
  height: 0.8rem;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.orange};
      border-radius: ${theme.borderRadius.bold};
    `;
  }}
`;

const Skill = ({ stack, proficiency }: SkillProps) => {
  return (
    <Skill__Container>
      <Skill__Description>
        <Skill__Info>{stack}</Skill__Info>
        <Skill__Info>{proficiency}</Skill__Info>
      </Skill__Description>
      <Skill__bar>
        <Skill_gage width={proficiency} />
      </Skill__bar>
    </Skill__Container>
  );
};

export default Skill;
