import React, { useState } from "react";
import { sizes } from "../../types/types";
import Button from "./Button";

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
    </>
  );
};

export default WorkButton;
