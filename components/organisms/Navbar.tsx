"use client";

import Image from "next/image";

import {
  Filter,
  HeaderText,
  Heart,
  Input,
  Notification,
  Search,
  Settings,
} from "../atoms";

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-4 px-32">
      <div className="flex gap-5">
        <HeaderText
          headerSize="1"
          text="MORENT"
          className="font-bold text-2xl text-primary-blue"
        />
        <div className="flex justify-around items-center px-2 bg-white border rounded-full">
          <Search />
          <Input
            type="text"
            className="p-2 focus:outline-none mx-3"
            onChange={() => {}}
            placeholder="Search something here"
          />
          <Filter />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div>
          <Heart />
        </div>
        <div>
          <Notification />
        </div>
        <div>
          <Settings />
        </div>
        <div>
          <Image src="/Image.png" alt="user profile" width={20} height={20}/>
        </div>
      </div>
    </header>
  );
};
