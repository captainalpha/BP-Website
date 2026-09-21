import MainLayout from "@/components/MainLayout";
import React from "react";

const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Main;
