"use client";

import { FilterBox, Hero } from "../organisms";
import { Content } from "../template";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <FilterBox />
      <Content />
      <Content />
    </>
  );
};
