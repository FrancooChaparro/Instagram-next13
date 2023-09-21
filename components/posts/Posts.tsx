import React from "react";
import styles from "./Posts.module.css";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FiSend, FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { BsSave } from "react-icons/bs";
import model from "@/app/api/model.json";
import Image from "next/image";

const Posts = () => {
  return (
    <div className={styles.containerAll}>
      <div className={styles.containerHeader}>
        <div className={styles.containerImage}>
          <Image
          src="/images/adad.webp"
          width={44.8}
          height={44.8}
          alt="Picture of the author"
          style={{"objectFit": "cover", objectPosition: "center"}}
        />
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
        <Image
          src="/images/adad.webp"
          width={496}
          height={480}
          alt="Picture of the author"
          style={{"objectFit": "cover", objectPosition: "center"}}
        />
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
        <div>
          <span>
            <strong>Franco Chaparro</strong> Lorem ip elit. Illo laborum, unde
            necessitatibus dolorem
          </span>
        </div>
      </div>
      <div className={styles.containerComments}>
        {model.comments.map((e) => {
          return (
            <div key={e.id} className={styles.coment}>
              <span>
                <strong style={{ marginRight: "4px" }}>{e.username}</strong>
                {e.content}
              </span>
            </div>
          );
        })}
      </div>
      <div className={styles.addComment}>
        <input type="text" placeholder="Add a comment..." />
      </div>
    </div>
  );
};

export default Posts;
