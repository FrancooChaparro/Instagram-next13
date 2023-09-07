import React from 'react'
import styles from "./Menu.module.css";

const Menu = () => {
  return (
     <div  className={styles.containerAll}>
       <div className={styles.containerHeader}>
        <div className={styles.containerImage}>
          <img src="/images/Googleplay.png" alt="Googleplay" />
        </div>
        <div className={styles.containerInfo}>
          <strong><span>Franco</span></strong>
          <span>Franco Chaparro</span>
        </div>
        <div className={styles.containerElipsis}>
          <span>swith</span>
        </div>
      </div>
      <div className={styles.containerSuggestionsHeader}>
        <span>Suggestions For You</span>
        <span>See All</span>
      </div>

      <div className={styles.containerSuggestions}>

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

      </div>
    </div>
  )
}

export default Menu;