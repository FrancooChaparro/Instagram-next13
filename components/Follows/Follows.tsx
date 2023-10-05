import React from 'react';
import styles from "../Modal/Modal.module.css"
import Image from 'next/image';

interface props{ 
  id: string
  image: string
  name: string
}

export const Follows:React.FC<props> = (
  {image, name, id}
) => {
  return (
    <div className={styles.containerUser}>
    <div className={styles.containerUserImage}>
      <Image 
      src={image || "/images/photo.webp"}
      alt={"name"}
      width={35.2}
      height={35.2}
      />
    </div>
    <div className={styles.containerUserInfo}>
      <strong><span>{name}</span></strong>
    </div>
    </div>
  )
}
