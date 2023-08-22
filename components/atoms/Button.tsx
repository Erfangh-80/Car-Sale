"use client";

import { FC } from "react";

type IProps = {
  text: string;
  className?: string;
};

export const Button: FC<IProps> = ({text, className}) => {
  return <button className={className}>{text}</button>;
};
