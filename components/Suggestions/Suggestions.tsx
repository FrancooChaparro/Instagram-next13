import React from 'react';
import styles from "../menu/Menu.module.css";

interface props {
  username: string;
  imagen: string;
  name: string;

}

export const Suggestions: React.FC<props>  = ({
  username, imagen, name
}) => {
  return (
    <div className={styles.containerUser}>
    <div className={styles.containerUserImage}>
      <img src={imagen} alt={name} />
    </div>
    <div className={styles.containerUserInfo}>
      <strong><span>{username}</span></strong>
      <span>{name}</span>
    </div>
    <div className={styles.containerUserElipsis}>
      <span>Follow</span>
    </div>
   </div>
  )
}
