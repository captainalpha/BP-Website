import { motion } from "motion/react";
import { IoIosClose } from "react-icons/io";
import Link from "next/link";
import { Routes } from "@/utils/constants";
import Image from "next/image";
import { useApp } from "@/providers/AppProvider";

const MobileNav = () => {
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
            height={48}
            width={136}
            className="h-12 w-auto"
          />
        </Link>
        <button onClick={() => setOpenMobileNav(false)}>
          <IoIosClose size={32} />
        </button>
      </div>

      <div className="p-4">
      <ul
          style={{ fontFamily: "var(--font-inter-light)" }}
          className="flex flex-col items-center gap-4 text-md font-light"
        >
          <Link href={Routes.HOME}>Home</Link>
          <a href="#Products">Products</a>  
          <a href="#Clients">Clients</a>
          <a href="#Partnerships">Partnerships</a>
          <a href="#AboutUs">About Us</a>
          <a href="#ContactUs">Contact Us</a>
        </ul>
        
      </div>
    </motion.div>
  );
};

export default MobileNav;
