"use client";
import React, { useState, FC, ReactNode } from "react";
import MyContext, { MyContextType } from "./ListContext";

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [black_mode, setBlack_mode] = useState<boolean>(true);

  const setMode = () => {
    document.body.classList.toggle('dark-mode');
      return setBlack_mode(!black_mode);
  };

  const contextValue: MyContextType = {
    black_mode,
    setMode
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyProvider;
