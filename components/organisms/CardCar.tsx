"use client";

import { useState } from "react";
import Image from "next/image";

import {
  Button,
  Fuel,
  GroupUser,
  HeaderText,
  Heart,
  Paragraph,
  Steering,
} from "../atoms";

export const CardCar = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
    <div className="flex flex-col pb-4 px-8 bg-white rounded-md ">
      <div className="py-5 bg-gradient-to-t from-red via-transparent to-transparent">
        <div className="flex justify-between items-center">
          <HeaderText
            headerSize="2"
            text="Rolls - Royce"
            className="font-bold text-xl"
          />
          <Heart
            className="cursor-pointer"
            isFavorite={isFavorite}
            onClick={() => setIsFavorite(!isFavorite)}
          />
        </div>
        <Paragraph text="Sedan" className="text-gray-500" />
      </div>
      <div className="py-4">
        <Image src={"/car1.png"} alt="car" width={300} height={0} />
      </div>
      <div className="flex justify-between items-center py-5">
        <div className="flex items-center gap-2 text-gray-500">
          <span>
            <Fuel />
          </span>
          <span>OL</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span>
            <Steering />
          </span>
          <span>Manual</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span>
            <GroupUser />
          </span>
          <span>4People</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <p className="text-black">
            $96.00/<span className="text-gray-500">day</span>
          </p>
          <Button
            text="Rent Now"
            className="bg-primary-blue p-2 text-white rounded"
          />
        </div>
      </div>
    </div>
  );
};
