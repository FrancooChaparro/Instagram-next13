import React from 'react'
import styles from "./Nav.module.css";
import { MdHomeFilled, MdOutlineExplore, MdOutlineAddBox } from "react-icons/md"
import { BsSearch } from "react-icons/bs"
import { FiSend, FiHeart } from "react-icons/fi"
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai"

const Nav = () => {
  return (
    <div className={styles.containerAll}>
         <div className={styles.title}>
           <img src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="logo" />
        </div>
        <div className={styles.containerSidebar}>
        <MdHomeFilled className={styles.icons}/><span>Home</span>
        </div>
        <div  className={styles.containerSidebar} >
        <BsSearch className={styles.icons} /><span>Search</span>
        </div>
        <div  className={styles.containerSidebar} >
        <MdOutlineExplore className={styles.icons}/><span>Explore</span>
        </div>
        <div  className={styles.containerSidebar} >
        <FiSend className={styles.icons}/><span>Messages</span>
        </div>
        <div  className={styles.containerSidebar} >
        <FiHeart className={styles.icons}/><span>Notifications</span>
        </div>
        <div  className={styles.containerSidebar} >
        <MdOutlineAddBox className={styles.icons}/><span>Create</span>
        </div>
        <div  className={styles.containerSidebar} >
        <AiOutlineUser className={styles.icons}/><span>Profile</span>
        </div>
        <div className={styles.cont}>
        <AiOutlineMenu className={styles.icons}/><span>More</span>
        </div>
    </div>
  )
}

export default Nav;