"use client";
import { logout } from "@/app/actions/logout";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  const pathname = usePathname();

  return (
    <div>
      <header className="flex items-center bg-[#f5f5f7] justify-between p-4 ">
        <div />
        <ul className="flex items-center px-8 bg-white rounded-md shadow gap-4 text-black">
          <li
            className={cn(
              pathname?.includes("user") && "text-blue-500 underline "
            )}
          >
            <Link href="/auth/dashboard/user">Users</Link>
          </li>
          <li
            className={cn(
              pathname?.includes("jobs") && "text-blue-500 underline"
            )}
          >
            <Link href="/auth/dashboard/jobs">Jobs</Link>
          </li>
        </ul>
        <button className="cursor-pointer text-black px-2 shadow hover:shadow-none rounded-md bg-white" onClick={logout}>
          Logout
        </button>
      </header>
      <main className="p-4 bg-[#f5f5f7]">{children}</main>
    </div>
  );
};

export default DashboardLayout;
