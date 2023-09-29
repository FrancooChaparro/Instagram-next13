import React, { useState } from "react";
import styles from "./Posts.module.css";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FiSend, FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { BsSave } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import Image from "next/image";
import { Coment, Like } from "@/app/types";

interface comentarios {
  name: string
  content: string
}

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
likes: Like[]
}
const Posts: React.FC<props> = ({ 
  title, image, liked, author, comments, authorId, likes
}) => {
  const [comentarios, setComentarios] = useState<comentarios[]>([]);
  const [like, setLike] = useState(liked)
  const [number, setNumber] = useState(likes.length)

  const [inputValues, setInputValues] = useState({
    content: "",
    name: "Franco"
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setComentarios([...comentarios, inputValues])
      setInputValues({
        content: "",
        name: "Franco"
      });
    }
  };
  const opLi = () => {
    if (liked) {
      setLike(!like)
      if (like) {
        console.log("aca") 
        return setNumber(likes.length-1)
      }
      else {
        console.log("aca2") 
       setNumber(likes.length)
      }
    }
    else {
      setLike(!like)
      if (like) return setNumber(likes.length)
      else setNumber(likes.length+1)
    }
   
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
      {
       number ? <h4>{number} Likes</h4> : null
      } 
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
                <strong style={{ marginRight: "4px" }}>{e.author.name}</strong>
                {e.content}
              </span>
            </div>
          );
        })}
        {comentarios.map((e: comentarios) => {
          return (
         <div className={styles.coment}>
              <span>
                <strong style={{ marginRight: "4px" }}>{e.name}</strong>
                {e.content}
              </span>
            </div>
             );
            })}
      </div>
      <div className={styles.addComment}>
        <input type="text" value={inputValues.content} name="content"  onKeyPress={handleKeyPress} onChange={handleChange} placeholder="Add a comment..." />
      </div>
    </div>
  );
};

export default Posts;
