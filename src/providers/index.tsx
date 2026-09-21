import React, { ReactNode } from "react";
import ThemeProvider from "./ThemeProvider";
import AppProvider from "./AppProvider";

interface IProps {
  children: ReactNode;
}

const Providers = ({ children }: IProps) => {
  return (
    <ThemeProvider>
      <AppProvider>{children}</AppProvider>
    </ThemeProvider>
  );
};

export default Providers;
