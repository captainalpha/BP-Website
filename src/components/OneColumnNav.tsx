"use client";
import React from "react";
import { useApp } from "@/providers/AppProvider";
import Link from "next/link";
import SmartImage from "./ui/SmartImage";

interface IProps {
  data: CardItem[];
}

const OneColumnNav = ({ data }: IProps) => {
  const { setOpenDropdown, setOpenMobileNav } = useApp();

  return (
    <div className="mt-8 md:mt-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {data.map((item) => (
          <Link
            href={item.openPage}
            key={item.id}
            onClick={() => {
              setOpenDropdown(null);
              setOpenMobileNav(false)
            }}
          >
            <div className="flex hover:bg-[#1d1d1d] transition-all duration-200 ease-in-out rounded-lg p-2 cursor-pointer items-center gap-4 mb-6">
              <SmartImage
                src={item.icon}
                alt={item.title + " icon"}
                width={100}
                height={100}
                className="object-contain h-[60px]"
              />
              <h1 className="md:text-xl font-bold">{item.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OneColumnNav;
