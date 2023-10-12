"use client"
import { createContext, useContext } from 'react';

export type MyContextType = {
  black_mode: boolean;
  setMode: () => void;
};

const MyContext = createContext<MyContextType | undefined>(undefined);

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export default MyContext;
