"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SplashScreen from "./SplashScreen";
import ContactButton from "./ContactButton";

interface IProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IProps) => {
  const [showSplash, setShowSplash] = useState(true);
  const [exitSplash, setExitSplash] = useState(false);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setExitSplash(true);
      setTimeout(() => {
        setShowSplash(false);
      }, 100);
    }, 3000);

    return () => clearTimeout(splashTimer);
  }, []);

  if (showSplash) {
    return <SplashScreen shouldExit={exitSplash} />;
  }

  return (
    <div>
      <>
        {" "}
        <Header />
        {/* <HeaderLight /> */}
        <main className="pt-24">{children}</main>
         <ContactButton />
        <Footer />
      </>
    </div>
  );
};

export default MainLayout;
