"use client";
import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import Nav from "@/components/nav/Nav";
import Image from "next/image";
import { UserData } from "@/app/types";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Modal } from "@/components/Modal/Modal";

const Profile = () => {
  const router = useRouter()
  const [modal, setModal] = useState(false)
  const [setter, setSetter] = useState("")
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
    followers: [],
    following: [],
    name: "test",
    username: "usertest",
    seguidores: [],
    seguidos: []
  };

  const [userData, setUserData] = useState<UserData | null>(null);

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

  const Sign_off = () => {
    localStorage.removeItem('userData');
    router.push("/login")
  }
function set (prop: string) {
  setModal(!modal)
  setSetter(prop)
}

  return (
    <div className={styles.main}>
      <Nav />
      <div className={styles.containerProfile}>
        <div className={styles.containerHeader}>
          <div className={styles.containerProfileImg}>
            <Image
              src={userData ? userData?.image : "/images/photo.webp"}
              alt={"name"}
              width={150}
              height={150}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className={styles.containerProfileInfo}>
            <div className={styles.containerButtons}>
              <span>{userData ? userData?.username : "User Test"}</span>
              <div className={styles.containerFlex}>
                <button className={styles.message}>Message</button>
                <button className={styles.btnBlue}>Follow</button>
                <button className={styles.btnBlue2} onClick={()=> Sign_off()}><AiOutlinePoweroff /></button>
              </div>
            </div>

            <div className={styles.containerFollow}>
              <span>{userData?.posts.length} posts</span>
              <span onClick={()=> set("followers")}>{userData?.followers.length} followers</span>
              <span onClick={()=> set("following")}>{userData?.following.length} following</span>
              {modal && <Modal modal={modal} setModal={setModal} seguidos={setter === "following" ? userData?.seguidos : userData?.seguidores} />}
            </div>

            <div className={styles.containerTitle}>
            <strong><span>{userData?.name}</span> </strong >
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                mollitia perspiciatis magnam blanditiis iste ipsam adipisci
                asperiores, obcaecati fuga at. A aut atque veritatis qui vero
                quisquam ut et in!
              </span>
            </div>
          </div>
        </div>

      <div className={styles.ResponsiveButtons}>
      <button className={styles.btnBlue}>Follow</button>
      <button className={styles.message}>Message</button>
      </div>

        <div className={styles.containerPosts}>
          <div className={styles.containerBrackets}>
            <span style={{borderTop: "1px solid rgb(29, 25, 25)"}}>POSTS</span>
            <span>GUIDES</span>
            <span>REELS</span>
            <span>TAGGED</span>
          </div>
          <div className={styles.containerImages}>
            {userData?.posts.length ? userData?.posts.map((e, index) => {
              return <img key={index} src={e.image} alt={e.title} />;
            }) : null}
          </div>
          {
              !userData?.posts.length &&  <div className={styles.dont}>No existen posts</div>
            }
        </div>
      </div>
    </div>
  );
};

export default Profile;
