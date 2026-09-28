import React, { MouseEvent } from "react";
import { INavLink } from "@/utils/types";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { useDisclosure } from "@/utils/hooks/useDisclosure";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

const MobileNavLink = ({ nav }: { nav: INavLink }) => {
  const router = useRouter();
  const [isOpen, { toggle }] = useDisclosure(false);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (nav?.content) toggle();
    else router?.push(nav?.href);
  };

  return (
    <div>
      <Link
        href={nav?.href}
        className="flex items-center justify-between border-b border-gray-200 pt-2 pb-1"
        onClick={handleClick}
      >
        <span>{nav?.label}</span>

        {nav?.content && (
          <span className={`${isOpen ? "rotate-180" : ""} transition-all`}>
            <FiChevronDown size={18} />
          </span>
        )}
      </Link>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden  py-2 rounded-b-md"
      >
        {nav?.content && isOpen && (
          <div className="flex flex-col gap-2">{nav.content}</div>
        )}
      </motion.div>
    </div>
  );
};

export default MobileNavLink;
