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
import { useMyContext } from "@/context/ListContext";


const Nav = () => {
  const router = useRouter();
  const { black_mode, setMode } = useMyContext();
  console.log(black_mode);
  
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


  function toggleDarkMode() {
    return setMode()
  }

  return (
    <div className={black_mode ? styles.containerAll : styles.containerAll_black}>
      <div className={black_mode ? styles.title : styles.title_black} onClick={() => router.push("/")}>
        <img
          src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
          alt="logo"
        />
      </div>
      <div onClick={() => router.push("/")} className={styles.containerSidebarResponsive}>
        <MdHomeFilled className={black_mode ? styles.icons : styles.icons_black} />
        <span>Home</span>
      </div>
      <div className={styles.containerSidebarResponsive} onClick={()=> router.push("/search")}>
        <BsSearch className={black_mode ? styles.icons : styles.icons_black} />
        <span>Search</span>
      </div>
      <div className={styles.containerSidebar}>
        <MdOutlineExplore className={black_mode ? styles.icons : styles.icons_black} />
        <span>Explore</span>
      </div>
      <div className={styles.containerSidebar}>
        <FiSend className={black_mode ? styles.icons : styles.icons_black} />
        <span>Messages</span>
      </div>
      <div className={styles.containerSidebarResponsive} onClick={() => router.push("/create")}>
        <MdOutlineAddBox className={black_mode ? styles.icons : styles.icons_black} />
        <span>Create</span>
      </div>
      <div className={styles.containerSidebarResponsive} >
        <div className={styles.containerSidebar2} onClick={()=> router.push("/notifications")}>
          <FiHeart className={black_mode ? styles.icons : styles.icons_black}/>
          <div className={styles.test} />
        </div>
        <span onClick={()=> router.push("/notifications")}>Notifications</span>
      </div>
      
      <div
        onClick={() => router.push("/profile")}
        className={styles.containerSidebarResponsive}
      >
        <AiOutlineUser className={black_mode ? styles.icons : styles.icons_black} />
        <span>Profile</span>
      </div>
      <div className={styles.cont} onClick={() => setOpenModal(!openModal)}>
        <AiOutlineMenu className={black_mode ? styles.icons : styles.icons_black} />
        <span>More</span>
        {openModal && (
          <div className={black_mode ? styles.blackMode : styles.blackMode_black}>
            <span onClick={()=> router.push("/profile")}>Profile</span>
            <span onClick={()=> toggleDarkMode()}>{black_mode ? "Black-mode" : "White-mode"}</span>
            <span onClick={() => Sign_off()}>Sing off</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
