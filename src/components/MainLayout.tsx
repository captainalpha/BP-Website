"use client";

import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactButton from "./ContactButton";

interface IProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <div>
      <Header />
      <main className="pt-24">{children}</main>
      <ContactButton />
      <Footer />
    </div>
  );
};

export default MainLayout;
