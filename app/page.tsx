"use client"
import Nav from '@/components/nav/Nav'
import styles from './page.module.css'
import { Historys } from '@/components/Historys/Historys'
import Posts from '@/components/posts/Posts'
import Menu from '@/components/menu/Menu'
import { useEffect, useState } from 'react'
import { Post } from './types'

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
  const [posts, setPosts] = useState([]); // Usa useState para manejar el estado

  
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
      <div className={styles.hola}>
        <Historys />
        {posts.length ? posts.map((e: Post) => {
          return <Posts key={e.id} id={e.id} title={e.title} image={e.image} liked={e.liked} authorId={e.authorId} author={e.author} comments={e.comments} likes={e.likes} />
        }) : 
        <div className={styles.spinner}></div>
 }
        <div className={styles.menu}><Menu /></div>
      </div>
    </div>
  )
}
