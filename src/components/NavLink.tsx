import { INavLink } from "@/utils/types";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface IProps {
  link: INavLink;
  open: boolean;
  onToggle: () => void;
}

const NavLink = ({ link, open, onToggle }: IProps) => {
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      // @ts-expect-error closest is there
      if (!e.target?.closest(".nav-link-dropdown")) onToggle();
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onToggle]);

  return (
    <li className="relative nav-link-dropdown">
      <button
        className="flex items-center hover:text-[#cbcbcb] gap-1"
        role="menuitem"
        tabIndex={0}
        onClick={onToggle}
      >
        <Link
          href={link?.href}
          className={`transition-[color]  ${
            open ? "border-b transition-all duration-200 ease-linear" : ""
          }`}
        >
          {link.label}
        </Link>
        {link?.content && (
          <FiChevronDown
            className={`cursor-pointer  transition-transform duration-300 ${
              open ? "rotate-180 " : ""
            }`}
          />
        )}
      </button>
      {link?.content && (
        <motion.div
          aria-label="region"
          aria-live="polite"
          aria-hidden={open ? "false" : "true"}
          initial={{
            opacity: 0,
            y: -50,
            height: 0,
            display: "none",
          }}
          animate={{
            opacity: open ? 1 : 0,
            y: open ? 30 : -50,
            top: open ? "3.5rem" : "5rem",
            height: open ? "auto" : 0,
            display: open ? "block" : "none",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="fixed top-[3.5rem] left-0 w-full  z-50 shadow-lg"
        >
          {link?.content}
        </motion.div>
      )}
    </li>
  );
};

export default NavLink;
