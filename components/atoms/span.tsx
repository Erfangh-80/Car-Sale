"use client";

type IProps = {
  text: string;
  className?: string;
};

export const Span = (props: IProps) => {
  return <span className={props?.className}>{props.text}</span>;
};
