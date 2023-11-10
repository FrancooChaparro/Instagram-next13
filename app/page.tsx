"use client";
import Nav from "@/components/nav/Nav";
import styles from "./page.module.css";
import { Historys } from "@/components/Historys/Historys";
import Posts from "@/components/posts/Posts";
import Menu from "@/components/menu/Menu";
import { useEffect, useState } from "react";
import { Post } from "./types";
import { useMyContext } from "@/context/ListContext";

async function getPosts() {
  const res = await fetch("/api/get_all_posts", {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("La solicitud no fue exitosa");
  }

  const data = await res.json(); // Espera la respuesta JSON
  return data;
}

export default function Home() {
  const [posts, setPosts] = useState([
     {
       id: 1,
       title: "Deadpool",
         image: "/images/marvel3.avif",
       liked: false,
       authorId: 6,
       author: {
         id: 13,
             email: "marvel@hotmail.com",
             name: "Marvel Studios",
             username: "marvel",
             password: "$2b$10$0wgBc0vgwAnxf73gPHwKouH/48tzVbeVLXMy0PnjLvSo2rbvyTTp.",
             image: "/images/marvel.jpg",
         followers: [],
         following: [1, 5, 7, 8, 4, 2, 9, 10, 11],
       },
       comments: [  {
                id: 21,
                content: "awesome pic",
                authorIdComent: 14,
                comentPostId: 10,
                author: {
                    id: 14,
                    email: "bill@hotmail.com",
                    name: "Bill Gates",
                    username: "billgates",
                    password: "$2b$10$iuvjqTzdqB5NKUL0ptfj0OgNd0AZVqwLFHdkny8CkewdHo7XlHL4q",
                    image: "/images/bill_gates.jpg",
                    followers: [
                        16,
                        13
                    ],
                    "following": []
                }
            }],
       likes: [1,1,1],
     },
     {
       id: 2,
       title: "Background Marvel",
       image: "/images/marvel2.jpeg",
       liked: false,
       authorId: 6,
       author: {
         id: 13,
             email: "marvel@hotmail.com",
             name: "Marvel Studios",
             username: "marvel",
             password: "$2b$10$0wgBc0vgwAnxf73gPHwKouH/48tzVbeVLXMy0PnjLvSo2rbvyTTp.",
             image: "/images/marvel.jpg",
         followers: [],
         following: [1, 5, 7, 8, 4, 2, 9, 10, 11],
       },
       comments: [],
       likes: [1],
     },
     {
       id: 3,
       title: "",
       image: "/images/marvel4.jpg",
       liked: false,
       authorId: 6,
       author: {
         id: 13,
             email: "marvel@hotmail.com",
             name: "Marvel Studios",
             username: "marvel",
             password: "$2b$10$0wgBc0vgwAnxf73gPHwKouH/48tzVbeVLXMy0PnjLvSo2rbvyTTp.",
             image: "/images/marvel.jpg",
         followers: [],
         following: [1, 5, 7, 8, 4, 2, 9, 10, 11],
       },
       comments: [],
       likes: [1,2,3,4,5,6,7,8,9,10,11,12],
     },
  ]);
  const { black_mode } = useMyContext();

  // useEffect(() => {
  //   getPosts()
  //     .then((data) => {
  //       setPosts(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div className={styles.main}>
      <Nav />
      <div className={styles.containerPosts}>
        <Historys />
        {
          posts.length &&
            posts.map((e: any) => {
              return (
                <Posts
                  key={e.id}
                  id={e.id}
                  title={e.title}
                  image={e.image}
                  liked={e.liked}
                  authorId={e.authorId}
                  author={e.author}
                  comments={e.comments}
                  likes={e.likes}
                />
              );
            })
          // : <div className={black_mode ? styles.spinner : styles.spinner_black}></div>
        }
        <div className={styles.menu}>
          <Menu />
        </div>
      </div>
    </div>
  );
}
