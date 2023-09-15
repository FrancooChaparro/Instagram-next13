import React from 'react'
import styles from "./Profile.module.css";
import Nav from '@/components/nav/Nav';

const Profile = () => {
  return (
    <div className={styles.main}>
        <Nav />
        <div className={styles.containerProfile}>
            <div className={styles.containerHeader}>
              <div className={styles.containerProfileImg}></div>
              <div className={styles.containerProfileInfo}>

                <div className={styles.containerButtons}>
                <span>Franco</span>
                  <button className={styles.message}>Message</button>
                  <button className={styles.btnBlue}>Follow</button>
                  <button className={styles.btnBlue2}>V</button>
                </div>

<div className={styles.containerFollow}>
  <span>5.000 posts</span><span>2.4M followers</span><span>98 Following</span>
</div>


<div className={styles.containerTitle}>
  <span>Insider</span><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos mollitia perspiciatis magnam blanditiis iste ipsam adipisci asperiores, obcaecati fuga at. A aut atque veritatis qui vero quisquam ut et in!</span><span>Follow back!</span>
</div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Profile;