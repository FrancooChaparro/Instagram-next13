"use client"
import Nav from '@/components/nav/Nav'
import styles from './page.module.css'
import { Historys } from '@/components/Historys/Historys'
import Posts from '@/components/posts/Posts'
import Menu from '@/components/menu/Menu'
import { useEffect, useState } from 'react'
import { Post } from './types'
import { useMyContext } from "@/context/ListContext";

async function getPosts() {
  const res = await fetch("/api/get_all_posts", {
    method: "GET"
  });

  if (!res.ok) {
    throw new Error("La solicitud no fue exitosa");
  }

  const data = await res.json(); // Espera la respuesta JSON
  return data;
}

export default  function Home() {
  const [posts, setPosts] = useState([
    {
      id: 3,
      title: "MARVEL",
      image: "/images/deadpoolwebp.webp",
      liked: true,
      authorId: 6,
      author: {
          id: 6,
          email: "TEST@hotmail.com",
          name: "TEST",
          username: "TEST Studios",
          password: "a123456",
          image: "/images/marvel.webp",
          followers: [],
          following: [
              1,
              5,
              7,
              8,
              4,
              2,
              9,
              10,
              11
          ]
      },
      comments: [],
      likes: [],
    },
    {
      id: 3,
      title: "MARVEL",
      image: "/images/deadpoolwebp.webp",
      liked: true,
      authorId: 6,
      author: {
          id: 6,
          email: "TEST@hotmail.com",
          name: "TEST",
          username: "TEST Studios",
          password: "a123456",
          image: "/images/marvel.webp",
          followers: [],
          following: [
              1,
              5,
              7,
              8,
              4,
              2,
              9,
              10,
              11
          ]
      },
      comments: [],
      likes: [],
    }]
)
  const { black_mode } = useMyContext();

  
  useEffect(() => {
    // Llama a getPosts y actualiza el estado cuando se obtengan los datos
    getPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.main}>
      <Nav />
      <div className={styles.containerPosts}>
        <Historys />
        {posts.length && posts.map((e: any) => {
          return <Posts key={e.id} id={e.id} title={e.title} image={e.image} liked={e.liked} authorId={e.authorId} author={e.author} comments={e.comments} likes={e.likes} />
        }) 
        // <div className={black_mode ? styles.spinner : styles.spinner_black}></div>
 }
        <div className={styles.menu}><Menu /></div>
      </div>
    </div>
  )
}
