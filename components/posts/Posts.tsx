import React from "react";
import styles from "./Posts.module.css";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FiSend, FiHeart } from "react-icons/fi"
import { FaRegComment  } from "react-icons/fa"
import { BsSave } from "react-icons/bs"

const Posts = () => {
  return (
    <div className={styles.containerAll}>
      <div className={styles.containerHeader}>
        <div className={styles.containerImage}>
          <img src="/images/Googleplay.png" alt="Googleplay" />
        </div>
        <div className={styles.containerInfo}>
          <span>Franco Chaparro</span>
          <span>Buenos Aires, Argentina</span>
        </div>
        <div className={styles.containerElipsis}>
          <AiOutlineEllipsis />
        </div>
      </div>

      <div className={styles.containerPhoto}>
        <img src="https://e0.pxfuel.com/wallpapers/13/584/desktop-wallpaper-paisaje-paisajes-thumbnail.jpg" alt="Image" />
      </div>

      <div className={styles.containerBtn}>
            <div className={styles.containerIcons}>
              <FiHeart />
            </div>
            <div className={styles.containerIcons}>
            <FaRegComment />
            
            </div>
            <div className={styles.containerIcons}>
            <FiSend />
            </div>
            <div className={styles.containerIconsFinal}>
            <BsSave />
            </div>
      </div>
       <div className={styles.containerUser}>
          <h4>73 Likes</h4>
          <div >
           <span><strong>Franco Chaparro</strong> Lorem ip elit. Illo laborum, unde necessitatibus dolorem</span>
          </div>
       </div>
      <div className={styles.containerComments}>
      <div className={styles.coment}>
          <span><strong>Franco Chaparro</strong> Lorem ip elit. Illo laborum, unde necessitatibus dolorem</span>
          </div>
          <div className={styles.coment}>
          <span><strong>Franco Chaparro</strong> Lorem ip elit. Illo laborum, unde necessitatibus dolorem</span>
          </div>
          <div className={styles.coment}>
          <span><strong>Franco Chaparro</strong> Lorem ip elit. Illo laborum, unde necessitatibus dolorem</span>
          </div>
      </div>
    </div>
    
  );
};

export default Posts;
