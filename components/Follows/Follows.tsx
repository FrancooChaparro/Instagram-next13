import React from 'react';
import styles from "../Modal/Modal.module.css"
import Image from 'next/image';

export const Follows = () => {
  return (
    <div className={styles.containerUser}>
    <div className={styles.containerUserImage}>
      <Image 
      src={"/images/photo.webp"}
      alt={"name"}
      width={35.2}
      height={35.2}
      />
    </div>
    <div className={styles.containerUserInfo}>
      <strong><span>CENTRAR ESTO</span></strong>
    </div>
    </div>
  )
}
