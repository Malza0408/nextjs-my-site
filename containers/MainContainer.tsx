import Main from "@/components/Main";
import React from "react";

const MainContainer = () => {
  const onClickContactBtn = () => {
    console.log("Click the Btn");
  };
  return <Main onClickContactBtn={onClickContactBtn} />;
};

export default MainContainer;
