import React from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import { IconType } from "react-icons/lib";

type IconName = {
  type: string;
  color: string;
  size: string;
};

type IconNames = {
  prev: IconType;
  next: IconType;
  dark: IconType;
  light: IconType;
  [key: string]: IconType; //IMPORTANT!
};

const setIcon: IconNames = {
  prev: BiLeftArrow,
  next: BiRightArrow,
  dark: MdDarkMode,
  light: MdOutlineLightMode,
};

const Icons = ({ type, color, size }: IconName) => {
  const IconComponent = setIcon[type];
  return <IconComponent color={color} size={size} />;
};

export default Icons;
