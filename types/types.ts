import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import exp from "constants";
import { MouseEvent } from "react";

export interface ActionProps {
  type: string;
}

export interface CounterState {
  value: number;
}

export interface RootState {
  counter: CounterState;
}

export interface AboutProps {
  icon: IconDefinition;
  title: string;
}

export interface SkillProps {
  stack: string;
  proficiency: number;
}

export interface MainProps {
  onClickContactBtn: () => void;
}

export interface MyWorkProps {
  handleOnClick: (idx: number) => void;
  btnState: boolean[];
}

export interface BtnProps {
  isSelected?: boolean;
}
