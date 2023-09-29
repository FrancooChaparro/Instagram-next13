"use client"
import React, { useState } from 'react';
import styles from "../menu/Menu.module.css";
import Image from 'next/image';

async function insert_follow(props : {followerId: number, followingId: number}) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  };
  const res = await fetch("/api/insert_follower", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      return response.json();
    })
    .then((data) => { 
      console.log(data);
      localStorage.setItem('userData', JSON.stringify(data.user));
    });
}

interface props {
  username: string;
  imagen: string;
  name: string;
  id: number;
  userActiveID: number;
}

export const Suggestions: React.FC<props>  = ({
  username, imagen, name, id, userActiveID
}) => {
  const [seguir, setseguir] = useState(true)

  function setFollowing() { 
   if(userActiveID !== 100) {
     insert_follow({followerId: id, followingId: userActiveID})
   }
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
