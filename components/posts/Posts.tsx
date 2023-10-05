import React, { useEffect, useState } from "react";
import styles from "./Posts.module.css";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FiSend, FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { BsSave } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import Image from "next/image";
import { Coment, Like, UserData } from "@/app/types";
import { useRouter } from 'next/navigation';


async function like_post({ PostIdLike, authorIdLike }: { PostIdLike: number, authorIdLike: number }) {
  try {
    const response = await fetch("/api/create_like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ PostIdLike, authorIdLike }),
    })
    if (!response.ok) {
      console.log(response);
      return;
    }
    const data = await response.json();
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

async function dislike_post({ PostIdLike, authorIdLike }: { PostIdLike: number, authorIdLike: number }) {
  try {
    const response = await fetch("/api/dislike", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ PostIdLike, authorIdLike }),
    });

    if (!response.ok) {
      console.log(response);
      return;
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}


async function create_coment({ content, authorIdComent, postId }: { content: string, authorIdComent: number, postId: number }) {
  try {
    const response = await fetch("/api/create_coment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, authorIdComent, postId }),
    });

    if (!response.ok) {
      console.log("Error en la solicitud:", response);
      return;
    }
    const data = await response.json();
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

interface comentarios {
  name: string
  content: string
}

interface props {
  id: number,
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
  title, image, liked, author, comments, authorId, likes, id
}) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem("userData");
        const parsedData = storedData ? JSON.parse(storedData) : null;
        setUserData(parsedData);
      } catch (error) {
        console.error("Error al recuperar datos de localStorage:", error);
      }
    };
    fetchData();
  }, []);
 
  
  const [comentarios, setComentarios] = useState<comentarios[]>([]);
  const [like, setLike] = useState(liked)
  const [number, setNumber] = useState(likes.length)

  const [inputValues, setInputValues] = useState({
    content: "",
    name: "UserTest"
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValues({
      name: userData?.name || "UserTest",
      content: e.target.value,
    });
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (userData) {
       create_coment({postId: id, authorIdComent: userData?.id, content: inputValues.content})
      }
      setInputValues({
        ...inputValues,
        name: userData?.name || "UserTest",
      });
      setComentarios([...comentarios, inputValues])
      setInputValues({
        content: "",
        name: userData?.name || "UserTest"
      });
    }
  };

  const opLi = () => {
    if (userData) {
      if(liked) {
        dislike_post({PostIdLike: id, authorIdLike: userData?.id})
      } else { 
        like_post({PostIdLike: id, authorIdLike: userData?.id})
      }
    }
    if (liked) {
      setLike(!like)
      if (like) {
        return setNumber(likes.length-1)
      }
      else {
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
          <span onClick={()=> router.push(`/profile/${id}`)}>{author.name}</span>
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
        {comentarios.map((e: comentarios, index: number) => {
          return (
         <div className={styles.coment} key={index}>
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
