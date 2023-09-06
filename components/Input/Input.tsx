import React from "react";
import styles from "./Input.module.css";

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
  return (
    <>
      <input    
        className={styles.input}
        onChange={Onchange}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};
