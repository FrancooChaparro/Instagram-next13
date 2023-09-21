import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { Suggestions } from "../Suggestions/Suggestions";
import { MenuFooter } from "../MenuFooter/MenuFooter";
import Image from "next/image";
import { User } from "@/app/types";

async function getUsers() {
  const res = await fetch("/api/get_all_users", {
    method: "GET"
  });

  if (!res.ok) {
    throw new Error("La solicitud no fue exitosa");
  }

  const data = await res.json(); // Espera la respuesta JSON
  return data;
}

const Menu = () => {
  const [users, setUsers] = useState([]); // Usa useState para manejar el estado

  useEffect(() => {
    // Llama a getPosts y actualiza el estado cuando se obtengan los datos
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.containerAll}>
      <div className={styles.containerHeader}>
        <div className={styles.containerImage}>
          {/* <img src="/images/Googleplay.png" alt="Googleplay" /> */}
          <Image
          src="/images/profile.jpg"
          width={64}
          height={64}
          alt="Picture of the author"
          style={{"objectFit": "cover", objectPosition: "center"}}
        />
        </div>
        <div className={styles.containerInfo}>
          <strong>
            <span>Franco</span>
          </strong>
          <span>Franco Chaparro</span>
        </div>
        <div className={styles.containerElipsis}>
         <span>Swith</span>
        </div>
      </div>
      <div className={styles.containerSuggestionsHeader}>
        <span className={styles.spanA}>Suggestions For You</span>
        <span className={styles.spanB}>See All</span>
      </div>
      <div className={styles.containerSuggestions}>
        {users.map((e: User)=> {
          return <Suggestions 
          key={e.id} 
          username={e.username}
          name={e.name}
          imagen={e.image}
          />
        })}
      </div>
      <MenuFooter />
    </div>
  );
};

export default Menu;
