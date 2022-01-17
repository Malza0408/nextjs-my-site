import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

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
  readonly icon: IconDefinition;
  readonly title: string;
}

export interface SkillProps {
  readonly stack: string;
  readonly proficiency: number;
}

export interface MainProps {
  readonly onClickContactBtn: () => void;
}

// export interface MyWorkProps {
//   readonly handleOnClick: (idx: number) => void;
//   readonly btnState: boolean[];
// }

export const sizes = {
  large: "15rem",
  medium: "10rem",
  small: "7rem",
};

export interface StyledBtnProps {
  readonly size?: string | undefined;
  readonly isSelected?: boolean;
}

export interface ButtonProps extends StyledBtnProps {
  readonly innerText: string;
  readonly idx: number;
  readonly handleOnClick: (idx: number) => void;
}

export interface projectProps {
  readonly src: string;
  readonly alt: string;
  readonly title: string;
  readonly description: string;
  readonly isSelected: boolean;
}

export interface WorkButtonProps {
  readonly isSelected: boolean[];
  readonly handleOnClick: (idx: number) => void;
}

export interface MyWorkProps extends WorkButtonProps {
  readonly isClicked: boolean;
}

export interface ProjectsProps {
  readonly isSelected: boolean[];
  readonly isClicked: boolean;
}
