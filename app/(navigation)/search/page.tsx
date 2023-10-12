"use client";
import Nav from "@/components/nav/Nav";
import React from "react";
import styles from "./search.module.css";

const Search = () => {
  const URL_IMG =
    "https://acdn.mitiendanube.com/stores/001/140/641/products/e74e8cb9-f662-4f00-99f7-b09b3682fbc2-ea82d95d57101336e716935087754380-1024-1024.jpg";
  return (
    <div className={styles.main}>
      <Nav />
      <div className={styles.containerNotifications}>
        <input type="text" className={styles.input} placeholder="Search" />
        <div className={styles.containerImages}>
          <img src={URL_IMG} alt={URL_IMG} />
          <img src={URL_IMG} alt={URL_IMG} />
          <img src={URL_IMG} alt={URL_IMG} />
          <img src={URL_IMG} alt={URL_IMG} />
          <img src={URL_IMG} alt={URL_IMG} />
          <img src={URL_IMG} alt={URL_IMG} />
          <img src={URL_IMG} alt={URL_IMG} />
          <img src={URL_IMG} alt={URL_IMG} />
          <img src={URL_IMG} alt={URL_IMG} />
        </div>
      </div>
    </div>
  );
};

export default Search;
