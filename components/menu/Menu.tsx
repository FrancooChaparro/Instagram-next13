import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { Suggestions } from "../Suggestions/Suggestions";
import { MenuFooter } from "../MenuFooter/MenuFooter";
import Image from "next/image";
import { Postt, User, UserData } from "@/app/types";
import { useRouter } from "next/navigation";
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

const fetchDataFromLocalStorage = async (key: string, defaultValue: UserData) => {
  try {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : defaultValue;
  } catch (error) {
    console.error(`Error al recuperar datos de localStorage (${key}):`, error);
    return defaultValue;
  }
};

const Menu = () => {
  const [users, setUsers] = useState([]); // Usa useState para manejar el estado
  const [index, setIndex] = useState(3)
  const router = useRouter()

  const userPrueba: UserData = {
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
  };

  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const [userDataFromLocalStorage, usersData] = await Promise.all([
        fetchDataFromLocalStorage('userData', userPrueba),
        getUsers().catch((error) => {
          console.error('Error al obtener datos de usuarios:', error);
          return []; // o algún otro valor predeterminado
        }),
      ]);

      setUserData(userDataFromLocalStorage);
      setUsers(usersData);
    };

    fetchData();
  }, []);


  function sett ()  {
    if (index == 3) setIndex(users.length)
    else setIndex(3)
  }
  return (
    <div className={styles.containerAll}>
      <div className={styles.containerHeader}>
        <div className={styles.containerImage}>
          <Image
          src={userData ? userData?.image : "/images/photo.webp"}
          width={64}
          height={64}
          alt="Picture of the author"
          style={{"objectFit": "cover", objectPosition: "center"}}
        />
        </div>
        <div className={styles.containerInfo}>
          <strong>
            <span onClick={()=> router.push("/profile")}>{userData?.username}</span>
          </strong>
          <span>{userData?.name}</span>
        </div>
        <div className={styles.containerElipsis}>
         <span>Swith</span>
        </div>
      </div>
      <div className={styles.containerSuggestionsHeader}>
        <span className={styles.spanA}>Suggestions For You</span>
        <span className={styles.spanB} onClick={()=> sett()}>{index == 3 ? "See All" : "See Less"}</span>
      </div>
      <div className={styles.containerSuggestions}>
        {users.map((e: User)=> {
          return <Suggestions 
          key={e.id} 
          username={e.username}
          name={e.name}
          imagen={e.image}
          />
        }).splice(0,index)}
      </div>
      <MenuFooter />
    </div>
  );
};

export default Menu;
