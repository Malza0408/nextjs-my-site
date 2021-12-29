import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { css } from "styled-components";

const Icon = styled.div``;

const Icon__blobs = styled.div`
  height: 100%;
  border-radius: 50%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0px;
  z-index: -1;
`;

const Blobs__item = styled.div`
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

const Icon__outline = styled.div`
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

  &:hover > ${Icon__blobs} > ${Blobs__item} {
    transform: scale(1.4) translateY(-5%) translateZ(0);
  }
`;

const StackTitle = styled.p`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.darkGrey};
    `;
  }}
`;

interface Props {
  icon: IconDefinition;
  title: string;
}

const AboutIcon: React.FC<Props> = ({ icon, title }) => {
  return (
    <Icon>
      <Icon__outline>
        <FontAwesomeIcon icon={icon} size="4x" />
        <Icon__blobs>
          <Blobs__item />
          <Blobs__item />
          <Blobs__item />
        </Icon__blobs>
      </Icon__outline>
      <StackTitle>{title}</StackTitle>
    </Icon>
  );
};

export default AboutIcon;
