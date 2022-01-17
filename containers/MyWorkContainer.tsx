import MyWork from "@/components/MyWork/MyWork";
import React, { MouseEvent, useEffect, useState } from "react";

const MyWorkContainer = () => {
  const [isSelected, setIsSelected] = useState([true, false, false, false]);
  const [selectedBtn, setSelectedBtn] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [tempState, setTemtState] = useState([false, false, false, false]);

  const handleOnClick = (idx: number) => {
    if (isClicked) return;
    const newState = [...isSelected];
    newState[selectedBtn] = false;
    setSelectedBtn(idx);
    newState[idx] = !newState[idx];
    setTemtState(newState);
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked === true) {
      const tick = setTimeout(() => {
        setIsClicked(false);
      }, 500);
      const tick2 = setTimeout(() => {
        setIsSelected(tempState);
      }, 250);
      return () => {
        clearTimeout(tick);
        clearTimeout(tick2);
      };
    }
  });

  useEffect(() => {});

  return (
    <MyWork
      isSelected={isSelected}
      handleOnClick={handleOnClick}
      isClicked={isClicked}
    />
  );
};

export default MyWorkContainer;
