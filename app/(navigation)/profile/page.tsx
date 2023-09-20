import React from "react";
import styles from "./Profile.module.css";
import Nav from "@/components/nav/Nav";
import Image from "next/image";

const Profile = () => {
  return (
    <div className={styles.main}>
      <Nav />
      <div className={styles.containerProfile}>
        <div className={styles.containerHeader}>
          <div className={styles.containerProfileImg}>
            <Image 
              src={"/images/profile.jpg"}
              alt={"name"}
              width={150}
              height={150}
              style={{"objectFit": "cover", objectPosition: "center"}}
            />
          </div>
          <div className={styles.containerProfileInfo}>
            <div className={styles.containerButtons}>
              <span>Franco</span>
              <div className={styles.containerFlex}>
              <button className={styles.message}>Message</button>
              <button className={styles.btnBlue}>Follow</button>
              <button className={styles.btnBlue2}>V</button> 
              </div>
            </div>

            <div className={styles.containerFollow}>
              <span>5.000 posts</span>
              <span>2.4M followers</span>
              <span>98 Following</span>
            </div>

            <div className={styles.containerTitle}>
              <span>Insider</span>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                mollitia perspiciatis magnam blanditiis iste ipsam adipisci
                asperiores, obcaecati fuga at. A aut atque veritatis qui vero
                quisquam ut et in!
              </span>
              <span>Follow back!</span>
            </div>
          </div>
        </div>

        <div className={styles.containerPosts}>
          <div className={styles.containerBrackets}>
              <span>POSTS</span>
              <span>GUIDES</span>
              <span>REELS</span>
              <span>TAGGED</span>
          </div>
          <div className={styles.containerImages}>
              <img src="/images/adad.webp" alt="" /><img src="/images/adad.webp" alt="" /><img src="/images/adad.webp" alt="" /><img src="/images/adad.webp" alt="" /><img src="/images/adad.webp" alt="" /><img src="/images/adad.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
