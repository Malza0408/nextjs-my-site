import React from "react";
import {
  faCss3,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css, DefaultTheme } from "styled-components";

const AboutSection = styled.section`
  width: 100%;
  max-width: 110rem;
  margin: auto;
  padding: 40px;
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Icon_blobs = styled.div`
  height: 100%;
  border-radius: 50%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0px;
  z-index: -1;
`;

const Blobs_item = styled.div`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.lightBlue};
    `;
  }}
  width: 45%;
  height: 100%;
  border-radius: 100%;
  position: absolute;
  transform: scale(1.4) translateY(125%);
  transition: all 0.7s ease;

  &:nth-child(1) {
    left: -5%;
  }
  &:nth-child(2) {
    left: 30%;
    transition-delay: 0.06s;
  }
  &:nth-child(3) {
    left: 66%;
    transition-delay: 0.025s;
  }
`;

const IconOutline = styled.div`
  width: 15rem;
  height: 15rem;
  margin: 4rem auto 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 700ms ease;
  ${({ theme }) => {
    return css`
      border: 0.1rem solid ${theme.colors.lightBlue};
      border-radius: 50%;
      color: ${theme.colors.lightBlue};
    `;
  }}

  &:hover {
    ${({ theme }) => {
      return css`
        color: ${theme.colors.white};
      `;
    }}
  }

  &:hover > ${Icon_blobs} > ${Blobs_item} {
    transform: scale(1.4) translateY(0) translateZ(0);
  }
`;

const StackTitle = styled.p`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.darkGrey};
    `;
  }}
`;

const About = () => {
  return (
    <AboutSection>
      <h1>About Me</h1>
      <p>
        매일 매일이 쌓여 가치를 창출해 내는 개발자가 되길 바라는 예비
        개발자에요!
      </p>
      <p>매일 매일 기록하고, 그를 통해 성장합니다! </p>
      <p>새로운 스택을 쌓아 가는 것이 즐거워요!</p>
      <p>
        모르는 문제는 곧 제 경험이 될 것이라 생각해요! 즐겁게 해결하려고 합니다.
      </p>
      <IconContainer>
        <div>
          <IconOutline>
            <FontAwesomeIcon icon={faJs} size="4x" />
            <Icon_blobs>
              <Blobs_item />
              <Blobs_item />
              <Blobs_item />
            </Icon_blobs>
          </IconOutline>
          <StackTitle>HTML, CSS, JS</StackTitle>
        </div>
        <div>
          <IconOutline>
            <FontAwesomeIcon icon={faReact} size="4x" />
            <Icon_blobs>
              <Blobs_item />
              <Blobs_item />
              <Blobs_item />
            </Icon_blobs>
          </IconOutline>
          <StackTitle>React</StackTitle>
        </div>
      </IconContainer>
    </AboutSection>
  );
};

export default About;
