import React from 'react';
import styles from "../menu/Menu.module.css";

export const Suggestions = () => {
  return (
    <div className={styles.containerUser}>
    <div className={styles.containerUserImage}>
      <img src="/images/Googleplay.png" alt="Googleplay" />
    </div>
    <div className={styles.containerUserInfo}>
      <strong><span>Franco</span></strong>
      <span>Franco Chaparro</span>
    </div>
    <div className={styles.containerUserElipsis}>
      <span>Follow</span>
    </div>
   </div>
  )
}
