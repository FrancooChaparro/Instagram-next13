"use client"
import React, { useState } from 'react';
import styles from "../menu/Menu.module.css";
import Image from 'next/image';

interface props {
  username: string;
  imagen: string;
  name: string;

}

export const Suggestions: React.FC<props>  = ({
  username, imagen, name
}) => {
  const [seguir, setseguir] = useState(true)

  function setFollowing() { 
    setseguir(!seguir)
  }
  return (
    <div className={styles.containerUser}>
    <div className={styles.containerUserImage}>
      <Image 
      src={imagen}
      alt={name}
      width={35.2}
      height={35.2}
      />
    </div>
    <div className={styles.containerUserInfo}>
      <strong><span>{username}</span></strong>
      <span>{name}</span>
    </div>
    <div className={styles.containerUserElipsis}>
      <span className={seguir ? styles.follow : styles.following} onClick={()=> setFollowing()}>{seguir ? "Follow" : "Following" }</span>
    </div>
   </div>
  )
}
