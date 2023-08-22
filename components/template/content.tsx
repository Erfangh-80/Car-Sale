"use client"

import { CardCar } from "../organisms";

export const Content = () => {
  return (
    <div className="flex flex-col px-32 mt-10">
      <div className="flex justify-between">
        <span className="text-gray-600">Popular Car</span>
        <span className="text-primary-blue">View All</span>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-10">
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
      </div>
    </div>
  );
};
