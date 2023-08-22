"use client";

import { FC } from "react";

interface IProps {
  headerSize: "1" | "2" | "3" | "4" | "5" | "6";
  text?: string;
  className?: string;
}

export const HeaderText: FC<IProps> = ({ headerSize, text, className }) => {
  const headerType = {
    "1": () => <h1 className={className && className}>{text}</h1>,
    "2": () => <h2 className={className && className}>{text}</h2>,
    "3": () => <h3 className={className && className}>{text}</h3>,
    "4": () => <h4 className={className && className}>{text}</h4>,
    "5": () => <h5 className={className && className}>{text}</h5>,
    "6": () => <h6 className={className && className}>{text}</h6>,
  };

  return headerType[headerSize]();
};
