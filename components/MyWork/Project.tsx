import React from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import theme from "@styles/theme";
import { projectProps } from "types/types";

const ProjectContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  flex-basis: 33.33333%;
  display: ${(props) => (props.isSelected ? "block" : "none")};
`;

const DescriptionDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  left: 0;
  right: 0;
  transform: translateY(1rem);
  transition: all 0.5s ease;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.black};
    `;
  }}
`;

const StyledA = styled.a`
  height: 21rem;
  margin: 0 0.5rem 1rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.lightWhite};
    `;
  }}

  &:hover {
    ${DescriptionDisplay} {
      opacity: 0.7;
      transform: translateY(0);
    }
  }
`;

const ProjectTitle = styled.h3`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.orange};
    `;
  }}

  &::after {
    content: "";
    display: block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 5rem;
    height: 0.2rem;
    margin-top: 0.5rem;
    background-color: ${theme.colors.white};
  }
`;

const ProjectDescription = styled.span`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.white};
    `;
  }}
`;

const Project = ({
  src,
  alt,
  title,
  description,
  isSelected,
}: projectProps) => {
  return (
    <ProjectContainer isSelected={isSelected}>
      <StyledA href="" target="_blank">
        <Image src={src} width={"280px"} height={"155px"} alt={alt} />
        <DescriptionDisplay>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>
        </DescriptionDisplay>
      </StyledA>
    </ProjectContainer>
  );
};

export default Project;
