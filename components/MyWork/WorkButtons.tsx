import React, { useState } from "react";
import styled from "styled-components";
import { sizes, WorkButtonProps } from "../../types/types";
import Button from "./Button";

const ButtnContainer = styled.section``;

const WorkButton = ({ isSelected, handleOnClick }: WorkButtonProps) => {
  return (
    <ButtnContainer>
      <Button
        size={sizes.large}
        isSelected={isSelected[0]}
        innerText="All"
        idx={0}
        handleOnClick={handleOnClick}
      />
      <Button
        size={sizes.large}
        isSelected={isSelected[1]}
        innerText="Basic"
        idx={1}
        handleOnClick={handleOnClick}
      />
      <Button
        size={sizes.large}
        isSelected={isSelected[2]}
        innerText="with React"
        idx={2}
        handleOnClick={handleOnClick}
      />
      <Button
        size={sizes.large}
        isSelected={isSelected[3]}
        innerText="with Next.js"
        idx={3}
        handleOnClick={handleOnClick}
      />
    </ButtnContainer>
  );
};

export default WorkButton;
