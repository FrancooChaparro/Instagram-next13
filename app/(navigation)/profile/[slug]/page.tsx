"use client"
import Nav from "@/components/nav/Nav";
import styles from "../Profile.module.css"
import Image from "next/image";

async function get_user(prop: string) {
    const res = await fetch(`/api/see_follows/${prop}`, {
      method: "GET"
    });
  
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa");
    }
  
    const data = await res.json(); // Espera la respuesta JSON
    return data.user;
  }

export default function Page({ params }: { params: { slug: string } }) {
let user: any 
    const fetchData = async () => {
        try {
         user = await get_user(params.slug);
          console.log(user);
        } catch (error) {
          console.error("Error al obtener el usuario:", error);
        }
      };
    
      fetchData();

    console.log(user);
    
    return  (
    <div className={styles.main}>
    <Nav />
    <div className={styles.containerProfile}>
        <div className={styles.containerHeader}>
          <div className={styles.containerProfileImg}>
            <Image
              src={"/images/photo.webp"}
              alt={"name"}
              width={150}
              height={150}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className={styles.containerProfileInfo}>
            <div className={styles.containerButtons}>
              <span>username</span>
              <div className={styles.containerFlex}>
                <button className={styles.message}>Message</button>
                <button className={styles.btnBlue}>Follow</button>
              </div>
            </div>
            <div className={styles.containerFollow}>
              <span>1 posts</span>
              <span>1 followers</span>
              <span>1 following</span>
            </div>
            <div className={styles.containerTitle}>
              <span>name</span>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                mollitia perspiciatis magnam blanditiis iste ipsam adipisci
                asperiores, obcaecati fuga at. A aut atque veritatis qui vero
                quisquam ut et in!
              </span>
              <span>Follow back!</span>
            </div>
          </div>
        </div>

        <div className={styles.containerPosts}>
          <div className={styles.containerBrackets}>
            <span style={{borderTop: "1px solid rgb(29, 25, 25)"}}>POSTS</span>
            <span>GUIDES</span>
            <span>REELS</span>
            <span>TAGGED</span>
          </div>
          <div className={styles.containerImages}>
          <img key={1} src={"/images/deadpoolwebp.webp"} alt={"img"} />
          <img key={2} src={"/images/deadpoolwebp.webp"} alt={"img"} />
          <img key={3} src={"/images/deadpoolwebp.webp"} alt={"img"} />
          </div>
        </div>
      </div>
  </div>
);
};
  