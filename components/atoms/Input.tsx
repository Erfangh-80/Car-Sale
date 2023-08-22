"use client";

import { ChangeEvent, FC } from "react";

type IInputProps = {
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  className?: string;
  type: string;
};

export const Input: FC<IInputProps> = (props) => {
  return (
    <input
      type={props.type}
      className={props?.className}
      name={props?.name}
      value={props?.value}
      onChange={props.onChange}
      placeholder={props?.placeholder}
    />
  );
};
