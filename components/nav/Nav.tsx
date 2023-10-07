import React, { useEffect, useRef, useState } from "react";
import styles from "./Nav.module.css";
import {
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineAddBox,
} from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FiSend, FiHeart } from "react-icons/fi";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (openModal && event.target.closest(`.${styles.blackMode}`) === null) {
        setOpenModal(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [openModal, setOpenModal]);

  const Sign_off = () => {
    localStorage.removeItem('userData');
    router.push("/login")
  }

  return (
    <div className={styles.containerAll}>
      <div className={styles.title} onClick={() => router.push("/")}>
        <img
          src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
          alt="logo"
        />
      </div>
      <div onClick={() => router.push("/")} className={styles.containerSidebarResponsive}>
        <MdHomeFilled className={styles.icons} />
        <span>Home</span>
      </div>
      <div className={styles.containerSidebarResponsive}>
        <BsSearch className={styles.icons} />
        <span>Search</span>
      </div>
      <div className={styles.containerSidebar}>
        <MdOutlineExplore className={styles.icons} />
        <span>Explore</span>
      </div>
      <div className={styles.containerSidebar}>
        <FiSend className={styles.icons} />
        <span>Messages</span>
      </div>
      <div className={styles.containerSidebarResponsive}>
        <MdOutlineAddBox className={styles.icons} />
        <span>Create</span>
      </div>
      <div className={styles.containerSidebarResponsive} >
        <div className={styles.containerSidebar2} onClick={()=> router.push("/notifications")}>
          <FiHeart className={styles.icons} />
          <div className={styles.test} />
        </div>
        <span onClick={()=> router.push("/notifications")}>Notifications</span>
      </div>
      
      <div
        onClick={() => router.push("/profile")}
        className={styles.containerSidebarResponsive}
      >
        <AiOutlineUser className={styles.icons} />
        <span>Profile</span>
      </div>
      <div className={styles.cont} onClick={() => setOpenModal(!openModal)}>
        <AiOutlineMenu className={styles.icons} />
        <span>More</span>
        {openModal && (
          <div className={styles.blackMode}>
            <span onClick={()=> router.push("/profile")}>Profile</span>
            <span>Black-Mode</span>
            <span onClick={() => Sign_off()}>Sing off</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
