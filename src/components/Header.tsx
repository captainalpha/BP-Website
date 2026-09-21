"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Routes } from "@/utils/constants";
import NavLink from "./NavLink";
import { navLinks } from "./NavLinks";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNav from "./MobileNav";
import RequestDemo from "./models/RequestDemo";
import { GoChevronRight } from "react-icons/go";
import { usePathname } from "next/navigation";
import { useApp } from "@/providers/AppProvider";
import { isIOSorSafari } from "@/providers/Helper";
import Image from "next/image";

const Header: React.FC = () => {
  const { openDropdown, setOpenDropdown, setOpenMobileNav } = useApp();
  const [scrollingDown, setScrollingDown] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [requestDemoOpen, setRequestDemoOpen] = useState(false);
  const pathname = usePathname();
  const disableAnimation = isIOSorSafari();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (window.scrollY > scrollY) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    setOpenDropdown(null);
    setOpenMobileNav(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: !disableAnimation && scrollingDown ? -100 : 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className="fixed top-0 left-0 right-0 z-50 h-24  bg-[#000000] text-[#ffffff]"
      // className="fixed top-0 left-0 right-0 z-50 h-24 bg-[#22222290] backdrop-blur-xl text-[#ffffff]"
    >
      <div className="px-4 h-full flex items-center justify-between relative">
        <Link href={Routes.HOME}>
          <Image
            src="/images/bpaas-logo.svg"
            alt="Bpaas Logo"
            height={10000}
            width={10000}
            className="h-full w-34"
          />
          {/* <BpaasLogoAnimation /> */}
        </Link>
        <ul
          style={{ fontFamily: "var(--font-inter-light)" }}
          className="hidden md:flex items-center gap-4 text-md font-light"
        >
          {navLinks.map((link, index) => (
            <NavLink
              key={link?.label + index}
              link={link}
              open={openDropdown === index}
              onToggle={() =>
                setOpenDropdown(openDropdown === index ? null : index)
              }
            />
          ))}
        </ul>
        <Link className="hidden md:block" href={Routes.CONTACT_US}>
          <button
            className={`cursor-pointer  w-fit   h-full transition duration-300 ease-in-out  flex justify-between items-center px-6 group`}
          >
            Request Demo
            <span className="ml-4 text-2xl bg-[#ec964c] text-[#000000] opacity-40 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              <GoChevronRight />
            </span>
          </button>
        </Link>
        <button
          className="block md:hidden active:scale-90 transition-all"
          onClick={() => setOpenMobileNav(true)}
        >
          <RxHamburgerMenu size={22} />
        </button>
        <MobileNav {...{ navLinks }} />
        <RequestDemo
          open={requestDemoOpen}
          onClose={() => setRequestDemoOpen(false)}
        />
      </div>
    </motion.header>
  );
};

export default Header;
