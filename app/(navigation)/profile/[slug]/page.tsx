"use client";
import Nav from "@/components/nav/Nav";
import styles from "../Profile.module.css";
import Image from "next/image";
import { Postt, UserData } from "@/app/types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "@/components/Modal/Modal";

async function get_user(prop: string) {
  const res = await fetch(`/api/see_follows/${prop}`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("La solicitud no fue exitosa");
  }

  const data = await res.json();
  return data.user;
}

async function insert_follow({ followerId, followingId }: { followerId: number | undefined, followingId: number | undefined }) {
    try {
      const response = await fetch("/api/insert_follower", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ followerId, followingId }),
      });
  
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
  
      const data = await response.json();
      console.log(data);
      localStorage.setItem('userData', JSON.stringify(data.user));
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  }

export default function Page({ params }: { params: { slug: string } }) {
  const [user, setUser] = useState<UserData | null>(null);
  const router = useRouter()
  const [modal, setModal] = useState(false)
  const [setter, setSetter] = useState("")
  const [seguir, setseguir] = useState(true)
  const [userData, setUserData] = useState<UserData | null>(null);

  
  const userPrueba: UserData = {
    id: 100,
    image: "/images/profile.jpg",
    posts: [
      {
        id: 1,
        title: "string",
        image: "/images/adad.webp",
        liked: false,
        authorId: 1,
      }, {
        id: 2,
        title: "string",
        image: "/images/adad.webp",
        liked: false,
        authorId: 2,
      }, {
        id: 3,
        title: "string",
        image: "/images/adad.webp",
        liked: false,
        authorId: 3,
      },
    ],
    followers: [1, 2, 3, 4, 5, 6],
    following: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    name: "test",
    username: "inside",
    seguidores: [],
    seguidos: []
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem("userData");
        const parsedData = storedData ? JSON.parse(storedData) : null;
        setUserData(parsedData);
      } catch (error) {
        console.error("Error al recuperar datos de localStorage:", error);
        setUserData(userPrueba);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await get_user(params.slug);
        setUser(userData);
        console.log(userData);
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    };

    fetchData();
  }, [params.slug]);

  if (!user) {
    return (
      <div className={styles.main}>
        <Nav />
      </div>
    );
  }

  function set (prop: string) {
    setModal(!modal)
    setSetter(prop)
  }
  function setFollowing() { 
    if(userData?.id !== 100) {
      insert_follow({followerId: user?.id, followingId: userData?.id})
    }
     setseguir(!seguir)
   }
  return (
    <div className={styles.main}>
      <Nav />
      <div className={styles.containerProfile}>
        <div className={styles.containerHeader}>
          <div className={styles.containerProfileImg}>
            <Image
              src={user.image}
              alt={user.name}
              width={150}
              height={150}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className={styles.containerProfileInfo}>
            <div className={styles.containerButtons}>
              <span>{user?.name}</span>
              <div className={styles.containerFlex}>
                <button className={styles.message}>Message</button>
                <button className={seguir ? styles.btnBlue : styles.message2} onClick={()=> setFollowing()}>{seguir ? "Follow" : "Following" }</button>
              </div>
            </div>
            <div className={styles.containerFollow}>
            <span>{user?.posts.length} posts</span>
              <span onClick={()=> set("followers")}>{user?.followers.length} followers</span>
              <span onClick={()=> set("following")}>{user?.following.length} following</span>
              {modal && <Modal modal={modal} setModal={setModal} seguidos={setter === "following" ? user?.seguidos : user?.seguidores} />}
            </div>
            <div className={styles.containerTitle}>
              <strong><span>{user?.username}</span></strong>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                mollitia perspiciatis magnam blanditiis iste ipsam adipisci
                asperiores.
              </span>
            </div>
          </div>
        </div>

        <div className={styles.ResponsiveButtons}>
      <button className={seguir ? styles.btnBlue : styles.message} onClick={()=> setFollowing()}>{seguir ? "Follow" : "Following" }</button>
      <button className={styles.message}>Message</button>
      </div>

        <div className={styles.containerPosts}>
          <div className={styles.containerBrackets}>
            <span style={{ borderTop: "1px solid rgb(29, 25, 25)" }}>
              POSTS
            </span>
            <span>GUIDES</span>
            <span>REELS</span>
            <span>TAGGED</span>
          </div>
          <div className={styles.containerImages}>
          {user?.posts.length ? user?.posts.map((e: Postt, index) => {
              return <img key={index} src={e.image} alt={e.title} />
            }) : null 
            }
          </div>
          {
              !user?.posts.length &&  <div className={styles.dont}>No existen posts</div>
            }
        </div>
      </div>
    </div>
  );
}
