"use client"
import Nav from '@/components/nav/Nav'
import styles from './page.module.css'
import { Historys } from '@/components/Historys/Historys'
import Posts from '@/components/posts/Posts'
import Menu from '@/components/menu/Menu'

async function getPosts (
) {
   const res = await fetch("/api/get_all", {
    method: "GET"
   }) 
   .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    return response.json(); // Parsea la respuesta JSON si se recibe una respuesta exitosa
  })
}

export default function Home() {
  // const posts = getPosts()
  console.log("posts");
  
  return (
    <div className={styles.main}>
      <Nav />
      <div className={styles.hola}>
        <Historys />
        <Posts />

        <div className={styles.menu}><Menu /></div>
      </div>
    </div>
  )
}
