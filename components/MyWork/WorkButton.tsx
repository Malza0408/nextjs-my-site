import React, { useState } from "react";
import styled, { css } from "styled-components";
import { BtnProps } from "types/types";

const StyledBtn = styled.button<BtnProps>`
  width: 11rem;
  margin-right: 0.5rem;
  border: 0.1rem solid black;
  ${(props) =>
    props.isSelected &&
    css`
      background-color: ${props.theme.colors.lightBlue};
      border: 0.1rem solid ${props.theme.colors.lightBlue};
      color: ${props.theme.colors.white};
    `}
  ${({ theme }) => {
    return css`
      transition: all ${theme.transition.delay};
    `;
  }}
  &:hover {
    ${({ theme }) => {
      return css`
        background-color: ${theme.colors.lightBlue};
        border: 0.1rem solid ${theme.colors.lightBlue};
        color: ${theme.colors.white};
      `;
    }}
  }
`;

const WorkButton = () => {
  const [isSelected, setIsSelected] = useState([true, false, false, false]);
  const [selectedBtn, setSelectedBtn] = useState(0);

  const handleOnClick = (idx: number) => {
    const newState = [...isSelected];
    newState[selectedBtn] = false;
    setSelectedBtn(idx);
    newState[idx] = !newState[idx];
    setIsSelected(newState);
  };
  return (
    <>
      <StyledBtn isSelected={isSelected[0]} onClick={() => handleOnClick(0)}>
        All
      </StyledBtn>
      <StyledBtn isSelected={isSelected[1]} onClick={() => handleOnClick(1)}>
        Basic
      </StyledBtn>
      <StyledBtn isSelected={isSelected[2]} onClick={() => handleOnClick(2)}>
        with React
      </StyledBtn>
      <StyledBtn isSelected={isSelected[3]} onClick={() => handleOnClick(3)}>
        with Next.js
      </StyledBtn>
    </>
  );
};

export default WorkButton;
