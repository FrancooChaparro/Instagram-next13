import React from "react";
import styles from "./Input.module.css";
import { useMyContext } from "@/context/ListContext";

interface Props {
  Onchange: any;
  type: string;
  value: string;
  name: string;
  placeholder: string;
}

export const Input: React.FC<Props> = ({
  Onchange,
  type,
  value,
  placeholder,
  name
}) => {
  const { black_mode } = useMyContext();

  return (
    <>
      <input    
        className={black_mode ? styles.input: styles.input_black}
        onChange={Onchange}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};
