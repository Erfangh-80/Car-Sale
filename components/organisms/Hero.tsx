"use client";

import Image from "next/image";
import { Bg1, Bg2, Button, HeaderText, Paragraph } from "../atoms";

export const Hero = () => {
  return (
    <div className="flex justify-around items-center px-10 mt-10">
      <div className="relative">
        <Bg1 />
        <div className="flex flex-col absolute top-0 text-white p-6">
          <div className="flex flex-col items-start w-3/5">
            <HeaderText
              headerSize="1"
              text="The Best Platform for Car Rental"
              className="text-4xl font-bold"
            />
            <Paragraph
              className="w-5/6 mt-6"
              text="Ease of doing a car rental safely and reliably. Of course at a low price."
            />
            <Button
              text="Rental Car"
              className="mt-3 bg-blue-600 py-2 px-4 rounded"
            />
          </div>
          <div className="flex justify-center ml-3">
            <Image src={"/car2.png"} alt="car" width={350} height={50} />
          </div>
        </div>
      </div>
      <div className="relative">
        <Bg2 />
        <div className="flex flex-col absolute top-0 text-white p-6">
          <div className="flex flex-col items-start w-3/5">
            <HeaderText
              headerSize="1"
              text="Easy way to rent a car at a low price"
              className="text-4xl font-bold"
            />
            <Paragraph
              className="w-9/12 mt-6"
              text="Providing cheap car rental services and safe and comfortable facilities."
            />
            <Button
              text="Rental Car"
              className="mt-3 bg-blue-400 py-2 px-4 rounded"
            />
          </div>
          <div className="flex justify-center ml-3">
            <Image src={"/car1.png"} alt="car" width={350} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};
