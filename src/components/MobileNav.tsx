import { motion } from "motion/react";
import { IoIosClose } from "react-icons/io";
import Link from "next/link";
import { Routes } from "@/utils/constants";
import Image from "next/image";
import { INavLink } from "@/utils/types";
import MobileNavLink from "./MobileNavLink";
import { useApp } from "@/providers/AppProvider";

interface IProps {
  navLinks: INavLink[];
}

const MobileNav = ({ navLinks }: IProps) => {
  const { openMobileNav, setOpenMobileNav } = useApp();

  return (
    <motion.div
      className={
        "block md:hidden absolute bg-black shadow-2xl shadow-gray-900 top-0 left-0 right-0"
      }
      initial={{ y: -50, opacity: 0, visibility: "hidden" }}
      animate={{
        y: openMobileNav ? 0 : -50,
        opacity: openMobileNav ? 1 : 0,
        visibility: openMobileNav ? "visible" : "hidden",
      }}
    >
      <div className="flex justify-between items-center px-4 py-2">
        <Link href={Routes.HOME}>
          <Image
            src="/images/bpaas-logo.svg"
            alt="Bpaas Logo"
            height={100}
            width={100}
            className="h-full w-18"
          />
        </Link>
        <button onClick={() => setOpenMobileNav(false)}>
          <IoIosClose size={32} />
        </button>
      </div>

      <div className="p-4">
        {navLinks?.map((nav, ind) => (
          <MobileNavLink key={`${nav?.label}_${ind}`} nav={nav} />
        ))}
      </div>
    </motion.div>
  );
};

export default MobileNav;
