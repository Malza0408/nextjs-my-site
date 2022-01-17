import MyWork from "@/components/MyWork/MyWork";
import React, { MouseEvent, useState } from "react";

const MyWorkContainer = () => {
  const [isSelected, setIsSelected] = useState([true, false, false, false]);
  const [selectedBtn, setSelectedBtn] = useState(0);

  const handleOnClick = (idx: number) => {
    const newState = [...isSelected];
    newState[selectedBtn] = false;
    setSelectedBtn(idx);
    newState[idx] = !newState[idx];
    setIsSelected(newState);
  };
  return <MyWork isSelected={isSelected} handleOnClick={handleOnClick} />;
};

export default MyWorkContainer;
