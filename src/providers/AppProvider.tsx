"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

interface IAppContext {
  openMobileNav: boolean;
  openDropdown: number | null;
  setOpenMobileNav: Dispatch<SetStateAction<boolean>>;
  setOpenDropdown: Dispatch<SetStateAction<number | null>>;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);

  const value = useMemo(
    () => ({ openDropdown, openMobileNav, setOpenMobileNav, setOpenDropdown }),
    [openDropdown, openMobileNav]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("useApp must be used within an AppProvider");
  return context;
};

export default AppProvider;
