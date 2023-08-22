"use client";

import { HeaderText, Paragraph } from "../atoms";

export const Footer = () => {
  return (
    <footer className="flex justify-between px-32 mt-14">
      <div>
        <HeaderText
          headerSize="1"
          text="MORENT"
          className="text-primary-blue font-bold text-2xl"
        />
        <Paragraph
          className="w-[52%] text-sm text-gray-500"
          text="Our vision is to provide convenience and help increase your sales business."
        />
      </div>
      <div className="flex flex-col">
        <HeaderText headerSize="2" text="About" className="font-bold text-xl" />
        <Paragraph text="How it works" className="mt-4 text-gray-600 text-sm" />
        <Paragraph text="Featured" className="mt-4 text-gray-600 text-sm" />
        <Paragraph text="Partnership" className="mt-4 text-gray-600 text-sm" />
        <Paragraph
          text="Bussiness Relation"
          className="mt-4 text-gray-600 text-sm"
        />
      </div>
      <div className="flex flex-col">
        <HeaderText
          headerSize="2"
          text="Community"
          className="font-bold text-xl"
        />
        <Paragraph text="Blogs" className="mt-4 text-gray-600 text-sm" />
        <Paragraph text="Events" className="mt-4 text-gray-600 text-sm" />
        <Paragraph text="Podcast" className="mt-4 text-gray-600 text-sm" />
        <Paragraph
          text="Invite a friend"
          className="mt-4 text-gray-600 text-sm"
        />
      </div>
      <div className="flex flex-col">
        <HeaderText
          headerSize="2"
          text="Socials"
          className="font-bold text-xl"
        />
        <Paragraph text="Discord" className="mt-4 text-gray-600 text-sm" />
        <Paragraph text="Instagram" className="mt-4 text-gray-600 text-sm" />
        <Paragraph text="Twitter" className="mt-4 text-gray-600 text-sm" />
        <Paragraph text="Facebook" className="mt-4 text-gray-600 text-sm" />
      </div>
    </footer>
  );
};
