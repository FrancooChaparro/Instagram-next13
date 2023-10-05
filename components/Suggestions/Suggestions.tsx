"use client"
import React, { useState } from 'react';
import styles from "../menu/Menu.module.css";
import Image from 'next/image';
import { useRouter } from 'next/navigation';


async function insert_follow({ followerId, followingId }: { followerId: number, followingId: number }) {
  try {
    const response = await fetch("/api/insert_follower", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ followerId, followingId }),
    });

    if (!response.ok) {
      throw new Error("La solicitud no fue exitosa");
    }

    const data = await response.json();
    console.log(data);
    localStorage.setItem('userData', JSON.stringify(data.user));
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
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
  const router = useRouter()
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
    <div className={styles.containerUserInfo} onClick={()=> router.push(`/profile/${id}`)}>
      <strong><span>{username}</span></strong>
      <span>{name}</span>
    </div>
    <div className={styles.containerUserElipsis}>
      <span className={seguir ? styles.follow : styles.following} onClick={()=> setFollowing()}>{seguir ? "Follow" : "Following" }</span>
    </div>
   </div>
  )
}
