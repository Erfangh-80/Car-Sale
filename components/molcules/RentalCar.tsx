import { FC } from "react";
import { HeaderText, Paragraph, Button } from "../atoms";

interface IProps {
  headerText: string;
  ParagraphText: string;
  headerClassName?: string;
  ParagraphClassName?: string;
  BtnClassName?: string;
}

export const RentalCard: FC<IProps> = (props) => {
  return (
    <>
      <HeaderText
        headerSize="1"
        text={props.headerText}
        className={props?.headerClassName}
      />
      <Paragraph
        text={props.ParagraphText}
        className={props?.ParagraphClassName}
      />
      <Button text="Rental Car" className={props?.BtnClassName} />
    </>
  );
};
