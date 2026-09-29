"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Routes } from "@/utils/constants";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNav from "./MobileNav";
import { GoChevronRight } from "react-icons/go";
import { usePathname } from "next/navigation";
import { useApp } from "@/providers/AppProvider";
import Image from "next/image";

const Header: React.FC = () => {
  const { setOpenDropdown, setOpenMobileNav } = useApp();
  const pathname = usePathname();

  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname, setOpenDropdown]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-24  bg-[#000000] text-[#ffffff]">
      <div className="px-4 h-full flex items-center justify-between relative">
        <Link href={Routes.HOME}>
          <Image
            src="/images/bpaas-logo.svg"
            alt="Bpaas Logo"
            height={48}
            width={136}
            priority
            className="h-12 w-auto"
          />
        </Link>
        <ul
          style={{ fontFamily: "var(--font-inter)" }}
          className="hidden md:flex items-center gap-4 text-md font-light"
        >
          <Link href={Routes.HOME}>Home</Link>
          <a href="#Products">Products</a>  
          <a href="#Clients">Clients</a>
          <a href="#Partnerships">Partnerships</a>
          <a href="#AboutUs">About Us</a>
          <a href="#ContactUs">Contact Us</a>
        </ul>
        <a className="hidden md:block" href="#ContactUs">
          <button
            className={`cursor-pointer  w-fit   h-full transition duration-300 ease-in-out  flex justify-between items-center px-6 group`}
          >
            Request Demo
            <span className="ml-4 text-2xl bg-[#ec964c] text-[#000000] opacity-40 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              <GoChevronRight />
            </span>
          </button>
        </a>
        <button
          className="block md:hidden active:scale-90 transition-all"
          onClick={() => setOpenMobileNav(true)}
        >
          <RxHamburgerMenu size={22} />
        </button>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
