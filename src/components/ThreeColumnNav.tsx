import React, { useState } from "react";
import { IHorizontalDropdown, ILabelDescription } from "@/utils/types";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { LuMoveRight } from "react-icons/lu";
import { motion } from "framer-motion";
import Link from "next/link";
import { useApp } from "@/providers/AppProvider";
import SmartImage from "./ui/SmartImage";

interface IProps {
  data: IHorizontalDropdown[] | any;
}

const ThreeColumnNav = ({ data }: IProps) => {
  const { setOpenDropdown, setOpenMobileNav } = useApp();
  const [active, setActive] = useState(0);
  const [activeContent, setActiveContent] = useState(0);
  const [lefts, setLefts] = useState<ILabelDescription[]>(data[0].left);
  const [rights, setRights] = useState<ILabelDescription[]>(
    data[0].right ?? []
  );
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-x-2">
      {/* Left: Main Navigation */}
      <div className="h-[60vh] overflow-auto">
        {data.map((item: any, index: any) => (
          <div key={`${item?.label + index}`}>
            <div
              className={`flex items-center justify-between cursor-pointer p-4 md:mr-4 ${
                active === index ? "bg-[#1d1d1d]" : ""
              }`}
              onMouseEnter={() => {
                setActive(index);
                setLefts(item?.left);
                setRights(item?.right ?? []);
              }}
              onClick={() => {
                // Toggle mobile section
                if (mobileOpen === index) {
                  setMobileOpen(null);
                } else {
                  setMobileOpen(index);
                  setLefts(item?.left);
                  setRights(item?.right ?? []);
                }
              }}
            >
              <div className="flex items-center gap-x-4">
                <SmartImage
                  src={item?.icon}
                  alt={`${item?.label} icon`}
                  width={50}
                  height={50}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,..."
                />
                <div>
                  <p className="text-gray-300">BPAAS</p>
                  <p className="font-semibold text-lg text-[var(--primary)]">
                    {item?.label}
                  </p>
                </div>
              </div>
              <FiChevronRight className="text-gray-300 hidden md:block" />
              <FiChevronDown className="text-gray-300  md:hidden" />
            </div>

            {/* Mobile-only dropdown under label */}
            <div
              className={`md:hidden ${
                mobileOpen === index ? "block" : "hidden"
              } bg-[#111] p-4`}
            >
              <h5 className="font-semibold text-[var(--primary)] text-lg mb-2">
                Learn More
              </h5>
              {item?.left.map((el: any, ind: any) => (
                <div key={el?.label + ind} className="mt-2">
                  <Link
                    href={el?.link}
                    className="flex items-center gap-x-1 text-gray-300 hover:text-white"
                    onMouseEnter={() => setActiveContent(ind)}
                    onClick={() => {
                      setOpenDropdown(null);
                      setOpenMobileNav(false);
                    }}
                  >
                    <h6>{el?.label}</h6>
                    <LuMoveRight size={13} className="mt-1 " />
                  </Link>
                  <motion.p
                    initial={false}
                    animate={{
                      height: activeContent === ind ? "auto" : 0,
                      opacity: activeContent === ind ? 1 : 0,
                      visibility: activeContent === ind ? "visible" : "hidden",
                    }}
                    className="text-xs py-1 text-gray-400 overflow-hidden hidden md:block"
                  >
                    {el?.description}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Middle: Learn More (desktop only) */}
      <div className="px-4 border-r border-[#292929] hidden md:block">
        <h5 className="font-semibold text-[var(--primary)] text-lg">
          Learn More
        </h5>
        {lefts?.map((el, ind) => (
          <div key={el?.label + ind} className="mt-2">
            <Link
              href={el?.link}
              className="flex items-center gap-x-1 text-gray-300 hover:text-white"
              onMouseEnter={() => setActiveContent(ind)}
              onClick={() => {
                setOpenDropdown(null);
                setOpenMobileNav(false);
              }}
            >
              <h6>{el?.label}</h6>
              <LuMoveRight size={13} className="mt-1" />
            </Link>
            <motion.p
              initial={false}
              animate={{
                height: activeContent === ind ? "auto" : 0,
                opacity: activeContent === ind ? 1 : 0,
                visibility: activeContent === ind ? "visible" : "hidden",
              }}
              className="text-xs py-1 text-gray-300 overflow-hidden"
            >
              {el?.description}
            </motion.p>
          </div>
        ))}
      </div>

      {/* Right: Who benefits (desktop only) */}
      {rights && rights?.length > 0 && (
        <div className="px-4 hidden md:block">
          <h5 className="font-semibold text-[var(--primary)] text-lg">
            Who benefits
          </h5>
          {rights?.map((el, i) => {
            const ind = lefts?.length + (i + 1);
            return (
              <div key={el?.label + ind} className="mt-2">
                <div
                  className="flex items-center gap-x-1 text-gray-300 hover:text-[var(--primary)]"
                  onMouseEnter={() => setActiveContent(ind)}
                >
                  <h6>{el?.label}</h6>
                </div>
                <motion.p
                  initial={false}
                  animate={{
                    height: activeContent === ind ? "auto" : 0,
                    opacity: activeContent === ind ? 1 : 0,
                    visibility: activeContent === ind ? "visible" : "hidden",
                  }}
                  className="text-xs py-1 border-b border-gray-200 text-gray-300 overflow-hidden"
                >
                  {el?.description}
                </motion.p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ThreeColumnNav;
