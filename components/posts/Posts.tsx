import React, { useState } from "react";
import styles from "./Posts.module.css";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FiSend, FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { BsSave } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import Image from "next/image";
import { Coment } from "@/app/types";

interface props {
  title: string,
  image: string,
  liked: boolean,
  authorId: number
  author: {
    id: string
    email: string
    name: string
    username: string
    password: string
    image: string
},
comments: Coment[]
}
const Posts: React.FC<props> = ({ 
  title, image, liked, author, comments
}) => {
  console.log(comments);
  
  const [like, setLike] = useState(false)
  const [number, setNumber] = useState(72)
  const opLi = () => {
    setLike(!like)
    if (like) return setNumber(72)
    setNumber(73)
  }
  return (
    <div className={styles.containerAll}>
      <div className={styles.containerHeader}>
        <div className={styles.containerImage}>
          <Image
          src={author.image}
          width={44.8}
          height={44.8}
          alt="Picture of the author"
          style={{"objectFit": "cover", objectPosition: "center"}}
        />
        </div>
        <div className={styles.containerInfo}>
          <span>{author.name}</span>
          <span>Buenos Aires, Argentina</span>
        </div>
        <div className={styles.containerElipsis}>
          <AiOutlineEllipsis />
        </div>
      </div>

      <div className={styles.containerPhoto}>
        <Image
          src={image}
          width={496}
          height={480}
          alt="Picture of the author"
          style={{"objectFit": "cover", objectPosition: "center"}}
        />
      </div>

      <div className={styles.containerBtn}>
        <div className={styles.containerIcons} onClick={()=> opLi()}>
        {like ? <FcLike /> : <FiHeart />}
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
        <h4>{number} Likes</h4>
        <div>
          <span>
            <strong>{author.name}</strong> {title}
          </span>
        </div>
      </div>
      <div className={styles.containerComments}>
        {comments.map((e: Coment) => {
          return (
            <div key={e.id} className={styles.coment}>
              <span>
                <strong style={{ marginRight: "4px" }}>{e.author.username}</strong>
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
