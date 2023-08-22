"use client";

type IProps = {
  text: string;
  className?: string;
};

export const Paragraph = (props: IProps) => {
  return <p className={props?.className}>{props.text}</p>;
};
