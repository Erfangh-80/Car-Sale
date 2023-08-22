"use client";

import { FC, ReactElement } from "react";
import { Button } from "../atoms";

type IProps = {
  text?: string;
  icon?: ReactElement;
  className?: string;
};

export const ButtonIcon: FC<IProps> = ({ text, className, icon }) => {
  return (
    <>
      <Button className={className} text="" />
      {icon}
    </>
  );
};
