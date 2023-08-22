"use client";

import { Change } from "../atoms";
import { DropDown } from "../molcules";

export const FilterBox = () => {
  return (
    <div className="flex justify-around items-center mt-10 px-16">
      <DropDown slectFilterName="Pick-Up" />
      <div className="bg-primary-blue rounded-xl p-5">
        <Change />
      </div>
      <DropDown slectFilterName="Drop-Off" />
    </div>
  );
};
