"use client";

import { ChangeEvent, FC } from "react";
import { ArrowButtom, HeaderText, Input } from "../atoms";

interface IDropDownProps {
  slectFilterName: string;
}

export const DropDown: FC<IDropDownProps> = ({ slectFilterName }) => {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="flex flex-col gap-2 bg-white rounded-md p-10">
      <div className="flex gap-2 px-5">
        <label>{slectFilterName}</label>
        <Input onChange={changeHandler} type="radio" />
      </div>
      <div className="flex justify-between items-center gap-8">
        <div className="border-r-2 px-5">
          <HeaderText headerSize="4" text="Locations" className="text-lg"/>
          <div className="flex justify-between items-center gap-4">
            <span className="text-gray-400 text-sm">Select your city</span>
            <span>
              <ArrowButtom />
            </span>
          </div>
        </div>
        <div className="border-r-2 px-5">
          <HeaderText headerSize="4" text="Date" className="text-lg"/>
          <div className="flex justify-between items-center gap-4">
            <span className="text-gray-400 text-sm">Select your date</span>
            <span>
              <ArrowButtom />
            </span>
          </div>
        </div>
        <div className="">
          <HeaderText headerSize="4" text="Time" className="text-lg"/>
          <div className="flex justify-between items-center gap-4">
            <span className="text-gray-400 text-sm">Select your time</span>
            <span>
              <ArrowButtom />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
