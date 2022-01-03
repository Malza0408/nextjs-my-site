import React from "react";
import styled, { css, keyframes } from "styled-components";
import { ButtonProps, StyledBtnProps } from "types/types";

const slideLeftSpan = keyframes`
from {
    transform: translateX(0);
}
to {
    transform: translateX(-1.2rem);
}
`;

const slideRightSpan = keyframes`
from {
    transform: translateX(-1.2rem);
}
to {
    transform: translateX(0);
}
`;

const slideUp = keyframes`
from {
    transform: translateY(0);
}
to {
    transform: translateY(-1.5rem);
}
`;
const slideDown = keyframes`
from {
    transform: translateY(-1.5rem);
}
to {
    transform: translateY(0);
}
`;

const keyframesOption = css`
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

const StyledSpan = styled.p`
  display: inline-block;
  position: relative;
  left: 0.8rem;
  margin: 0;
  ${keyframesOption}
  animation-name: ${slideRightSpan};
  ${({ theme }) => {
    return css`
      font-weight: ${theme.fonts.weight.semiBold};
      font-size: ${theme.fonts.size.small};
    `;
  }}
`;

const StyledCount = styled.p`
  display: inline-block;
  position: relative;
  text-align: center;
  margin: 0;
  opacity: 0;
  width: 2rem;
  height: 2rem;

  ${({ theme }) => {
    return css`
      font-weight: ${theme.fonts.weight.semiBold};
      font-size: ${theme.fonts.size.small};
      color: ${theme.colors.white};
      transition: all ${theme.transition.delay};
      background-color: ${theme.colors.darkBlue};
      border-radius: 50%;
    `;
  }}

  ${keyframesOption}
  animation-name: ${slideUp};
`;

const StyledBtn = styled.button<StyledBtnProps>`
  margin-right: 0.5rem;
  border: 0.1rem solid black;
  line-height: 2rem;

  width: ${(props) => props.size};

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background-color: ${theme.colors.blue};
      border: 0.1rem solid ${theme.colors.blue};
      color: ${theme.colors.white};
      ${keyframesOption}
      ${StyledSpan} {
        color: ${theme.colors.white};

        animation-name: ${slideLeftSpan};
      }
      ${StyledCount} {
        animation-name: ${slideDown};
        opacity: 1;
      }
    `}
  ${({ theme }) => {
    return css`
      transition: all ${theme.transition.delay};
    `;
  }}
    &:hover {
    ${({ theme }) => {
      return css`
        background-color: ${theme.colors.blue};
        border: 0.1rem solid ${theme.colors.blue};
        color: ${theme.colors.orange};
        ${keyframesOption}
        ${StyledSpan} {
          animation-name: ${slideLeftSpan};
          color: ${theme.colors.white};
        }
        ${StyledCount} {
          animation-name: ${slideDown};
          opacity: 1;
        }
      `;
    }}
  }
`;

const Button = ({
  size,
  isSelected,
  innerText,
  idx,
  handleOnClick,
}: ButtonProps) => {
  return (
    <StyledBtn
      size={size}
      isSelected={isSelected}
      onClick={() => handleOnClick(idx)}
    >
      <StyledSpan>{innerText}</StyledSpan>
      <StyledCount>5</StyledCount>
    </StyledBtn>
  );
};

export default Button;
